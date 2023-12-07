import React, { CSSProperties, useEffect, useRef, useState } from "react"
import guitarStyles from "@/styles/guitar.module.css"
import { FretMarker } from "@/interfaces/baseInterfaces"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { robotoMono } from "@/assets/fonts"
import { blue, blueGrey, green, grey, lightGreen, orange } from "@mui/material/colors"

interface GuitarNeckProps {
    hiddeFretNumbers?: Boolean
    fretRange?: {min : number,max:number},
    name?: string
    stringNum?: number
    allowAddMarkers? : boolean
    fretMarkers? : FretMarker[]
    rootNote?: string
    highlight?: string[]
    setWhenAddMarker?: Function
    cleanWhenChange? : any
}

function Neck({
    hiddeFretNumbers = false,
    allowAddMarkers = false,
    setWhenAddMarker,
    name = "",
    stringNum =  6,
    fretRange = {min : 0,max:12},
    fretMarkers = [],
    rootNote = "",
    highlight = [],
    cleanWhenChange

}: GuitarNeckProps) {
    const stringRefs = useRef<Array<HTMLDivElement | null>>(
        Array.from({ length: stringNum}).map(() => null)
    );

    const neckRef = useRef<HTMLDivElement>(null)

    const [addedMarkers, setAddedMarkers] = useState<FretMarker[]>([])

    //funciones===============================================>
    function addOrDeleteMarker(fretMarker: FretMarker, added: boolean = false) {
        //agregar texto a cada traste que lo requiera
        const string = stringRefs.current[(fretMarker.position[0] - 1)]
        if (string) {
            const fret = string.children[fretMarker.position[1] - fretRange.min]
            if (fret) {
                let fretMarkerElement : HTMLDivElement | null = fret.querySelector(`div.${guitarStyles.fretMarker}`) || null

                //agregar o quitar estilos a marcadores
                if (fretMarkerElement) {
                    if (fretMarkerElement.classList.contains(guitarStyles.fretMarker_active)) {
                        fretMarkerElement.classList.remove(guitarStyles.fretMarker_active)
                    } else {
                        //activar marcador
                        fretMarkerElement.classList.add(guitarStyles.fretMarker_active)
                        //agregar estilo extra
                        if (fretMarker.text && highlight.includes(fretMarker.text)) {
                            fretMarkerElement.style.backgroundColor = lightGreen[400]
                        }else if (fretMarker.text && fretMarker.text === rootNote) {
                            fretMarkerElement.style.backgroundColor = orange[400]
                        }else{                
                            fretMarkerElement.style.backgroundColor = grey[900]
                            fretMarkerElement.style.color = grey[400]
                            fretMarkerElement.style.border = `1px solid ${lightGreen[700]}`
                        }

                    }
                    //agregar texto
                    if (fretMarker.text) {
                        fretMarkerElement.textContent = fretMarker.text
                    }
                }
            }
        }
    }

    function updateAddedMarkers(newFretPosition: FretMarker) {
        setAddedMarkers(prevData => {
            if (prevData.some(
                fretIndicator =>
                    fretIndicator.position[0] == newFretPosition.position[0] && fretIndicator.position[1] == newFretPosition.position[1])) {
                const updatedData = prevData.filter(fretIndicator =>
                    fretIndicator.position[0] != newFretPosition.position[0] || fretIndicator.position[1] != newFretPosition.position[1]
                )
                return updatedData
            } else {
                return [...prevData, newFretPosition]
            }
        })
    }

    function fretMarkerCleaner () {
        console.log("limpiando")
        if(neckRef.current){
            console.log("limpiando 2")
            const neckEl : HTMLDivElement = neckRef.current
            const activeClass = guitarStyles["fretMarker_active"]
            const fretMarkers : HTMLDivElement[] = Array.from(neckEl.querySelectorAll(`.${activeClass}`)) || []
            fretMarkers.forEach(el => {
                el.classList.remove(activeClass)
            })
            setAddedMarkers([])
        }
    }

    //efectos============================================>
    useEffect(() => {
        if (fretMarkers.length > 0) {
            for (const fretMarker of fretMarkers) {
                addOrDeleteMarker(fretMarker)
            }
        }
        //agregar evento de escucha a cada elemento html para agregar marcadores y ejecutar alguna funcion cuando esto pase
        if (allowAddMarkers) {
            stringRefs.current.forEach((stringElement, stringIdx) => {
                if (stringElement && stringElement.children) {
                    const frets = stringElement.children
                    Array.from(frets).forEach((fret, fretIdx) => {
                        fret.addEventListener("click", () => {
                            let fretMarker: FretMarker = {
                                position: [stringIdx + 1, fretIdx]
                            }
                            addOrDeleteMarker(fretMarker, true)
                            updateAddedMarkers(fretMarker)
                        })
                    })
                }
            })
        }
    }, [])

    //actualizar estado cada vez que se agrega un marcador
    useEffect(() => {
        if (setWhenAddMarker) {
            const data = addedMarkers
            console.log("se agregaran:", data)
            setWhenAddMarker(data)
        }
    }, [addedMarkers])

    useEffect(()=>{
        if(cleanWhenChange){
            fretMarkerCleaner()
        }
    },[cleanWhenChange])

    return (
        <div ref={neckRef} className={guitarStyles["neck"]}>
            {
                name ? <h5 className={`${guitarStyles["neck-name"]} ${robotoMono.className}`}>{name}</h5>
                    : null
            }
            {
                hiddeFretNumbers ? null
                    : <div className={guitarStyles["fretNumber-container"]}>
                        {Array.from({ length: fretRange.max - fretRange.min + 1 }).map((_, index) => (
                            <span key={index} className={guitarStyles["fretNumber"]}>{String(index)}</span>
                        ))}
                    </div>
            }

            {/* Crear cuerdas */}
            {Array.from({ length: stringNum }).map((_, stringIdx) => (
                <div
                    ref={(ref) => (stringRefs.current[stringIdx] = ref)}
                    key={stringIdx}
                    className={guitarStyles.string}
                >
                    {/* Crear trastes del mástil */}
                    {Array.from({ length: (fretRange.max - fretRange.min) + 1 }).map((_, fretIdx) => (
                        <div key={fretIdx} className={
                            // agregar estilos del backgraund del traste segun si es una cuerda al aire o no
                            fretRange.min == 0 && fretIdx == 0 ?
                                `${guitarStyles.fret} ${guitarStyles["string-open"]}`
                                : `${guitarStyles.fret} ${guitarStyles[`string-fret`]}`
                        }>
                            {/* agregar fretMakers */}
                            <div className={`${guitarStyles.fretMarker}`}></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

function NeckContainer(props: { children: React.ReactNode, fontSize?: number }) {
    const fontSizeProp = props.fontSize || 10
    const theme = useTheme()
    const containerStyles: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center",
        gap: 2,
        flexWrap: "wrap",
        fontSize: fontSizeProp,
        [theme.breakpoints.down("lg")]: {
            justifyContent: "center", fontSize: Math.floor(fontSizeProp * 0.85)
        },
        [theme.breakpoints.down("md")]: {
            fontSize: Math.floor(fontSizeProp * 0.7)
        },
        [theme.breakpoints.down("sm")]: {
            fontSize: Math.floor(fontSizeProp * 0.55)
        },
    }

    return (
        <Box sx={containerStyles}>
            {props.children}
        </Box>
    )
}

export default { Neck, NeckContainer }


