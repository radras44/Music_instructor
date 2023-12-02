import React, { CSSProperties, useEffect, useRef, useState } from "react"
import guitarStyles from "@/styles/guitar.module.css"
import { FretMarker } from "@/interfaces/baseInterfaces"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { robotoMono } from "@/assets/fonts"

interface GuitarNeckProps {
    label?: string
    frets?: number
    strings?: number
    fretMarkers?: FretMarker[]
    fretRange?: number[]
    allowAdd?: boolean
    rootNote?: string
    hiddeFretNumbers?: Boolean
    highlight?: string[]
    setWhenAddMarker?: Function
}

function Neck({
    label,
    strings = 6,
    fretMarkers,
    fretRange = [0, 12],
    allowAdd = false,
    rootNote,
    highlight = [],
    setWhenAddMarker,
    hiddeFretNumbers
}: GuitarNeckProps) {
    console.log("render")
    const stringRefs = useRef<Array<HTMLDivElement | null>>(
        Array.from({ length: strings }).map(() => null)
    );

    const [addedMarkers, setAddedMarkers] = useState<FretMarker[]>([])

    //funciones===============================================>
    function addOrDeleteMarker(fretMarker: FretMarker, added: boolean = false) {
        //agregar texto a cada traste que lo requiera
        const string = stringRefs.current[(fretMarker.position[0] - 1)]
        if (string) {
            const fret = string.children[fretMarker.position[1] - fretRange[0]]
            if (fret) {
                let fretMarkerElement = fret.querySelector(`div.${guitarStyles.fretMarker}`)

                //agregar o quitar estilos a marcadores
                if (fretMarkerElement) {
                    if (fretMarkerElement.classList.contains(guitarStyles.fretMarker_active)) {
                        fretMarkerElement.classList.remove(guitarStyles.fretMarker_active)
                    } else {
                        //activar marcador
                        fretMarkerElement.classList.add(guitarStyles.fretMarker_active)
                        //agregar estilo extra
                        if (fretMarker.text && highlight.includes(fretMarker.text)) {
                            fretMarkerElement.classList.add(guitarStyles["fretMarker-highlight"])
                        }
                        if (fretMarker.text && fretMarker.text === rootNote) {
                            fretMarkerElement.classList.add(guitarStyles["fretMarker-root"])
                        }
                        if (added) {
                            fretMarkerElement.classList.add(guitarStyles["fretMarker-added"])
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

    //efectos============================================>
    useEffect(() => {
        if (fretMarkers) {
            for (const fretMarker of fretMarkers) {
                addOrDeleteMarker(fretMarker)
            }
        }
        //agregar evento de escucha a cada elemento html para agregar marcadores y ejecutar alguna funcion cuando esto pase
        if (allowAdd) {
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

    return (
        <div className={guitarStyles["neck"]}>
            {
                label ? <h5 className={`${guitarStyles["neck-label"]} ${robotoMono.className}`}>{label}</h5>
                    : null
            }
            {
                hiddeFretNumbers ? null
                    : <div className={guitarStyles["fretNumber-container"]}>
                        {Array.from({ length: fretRange[1] - fretRange[0] + 1 }).map((_, index) => (
                            <span key={index} className={guitarStyles["fretNumber"]}>{String(index)}</span>
                        ))}
                    </div>
            }

            {/* Crear cuerdas */}
            {Array.from({ length: strings }).map((_, stringIdx) => (
                <div
                    ref={(ref) => (stringRefs.current[stringIdx] = ref)}
                    key={stringIdx}
                    className={guitarStyles.string}
                >
                    {/* Crear trastes del mástil */}
                    {Array.from({ length: (fretRange[1] - fretRange[0]) + 1 }).map((_, fretIdx) => (
                        <div key={fretIdx} className={
                            // agregar estilos del backgraund del traste segun si es una cuerda al aire o no
                            fretRange[0] == 0 && fretIdx == 0 ?
                                `${guitarStyles.fret} ${guitarStyles["string-open"]}`
                                : `${guitarStyles.fret} ${guitarStyles[`string-fret`]}`
                        }>
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


