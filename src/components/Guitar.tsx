import React, { CSSProperties, useEffect, useMemo, useRef, useState } from "react"
import guitarStyles from "@/styles/guitar.module.css"
import { FretMarker } from "@/interfaces/baseInterfaces"
import { Box } from "@mui/material"
import { useTheme } from "@mui/material/styles"
import { robotoMono } from "@/assets/fonts"
import { blue, blueGrey, green, grey, lightGreen, orange } from "@mui/material/colors"
import { darkTheme } from "@/theme"

interface GuitarNeckProps {
    hiddeFretNumbers?: Boolean
    fretRange?: { min: number, max: number },
    name?: string
    stringNum?: number
    allowAddMarkers?: boolean
    fretMarkers?: FretMarker[]
    rootNote?: string
    highlight?: string[]
    setWhenAddMarker?: Function
    cleanWhenChange?: any
}

function Neck({
    hiddeFretNumbers = false,
    allowAddMarkers = false,
    setWhenAddMarker,
    name = "",
    stringNum = 6,
    fretRange = { min: 0, max: 12 },
    fretMarkers = [],
    rootNote = "",
    highlight = [],
    cleanWhenChange
}: GuitarNeckProps) {
    const fretNum = useMemo(() => fretRange.max - fretRange.min + 1, [])
    const stringRefs = useRef<Array<HTMLDivElement | null>>(Array.from({ length: stringNum }).map(() => null));
    const fretRefs = useRef<Array<HTMLDivElement | null>>(Array.from({ length: (fretNum) * stringNum }).map(() => null))
    const fretMarkerRefs = useRef<Array<HTMLDivElement | null>>(Array.from({ length: (fretNum) * stringNum }).map(() => null))
    const neckRef = useRef<HTMLDivElement>(null)

    const [addedMarkers, setAddedMarkers] = useState<FretMarker[]>([])

    function getMarkerIdx (fretMarker : FretMarker) {
        return ((fretMarker.position[0] - 1) * fretNum) + fretMarker.position[1]
    }

    function getMarkerPos (fretIdx : number) : {string : number,fret : number} {
        return {
            string : Math.floor(fretIdx/fretNum + 1),
            fret : fretIdx% fretNum
        }
    }

    //funciones===============================================>
    function addOrDeleteMarker(fretMarker: FretMarker, added: boolean = false) {
        const index = getMarkerIdx(fretMarker)
        console.log("se agregara el marker",index)
        if (!fretMarkerRefs.current) return
        const fretMarkerEl = fretMarkerRefs.current[Math.floor(index)] || null
        if (!fretMarkerEl) return
        if (fretMarkerEl.classList.contains(guitarStyles.fretMarker_active)) {
            fretMarkerEl.classList.remove(guitarStyles.fretMarker_active)
        } else {
            fretMarkerEl.classList.add(guitarStyles.fretMarker_active)
            if (fretMarker.text && highlight.includes(fretMarker.text)) {
                fretMarkerEl.style.backgroundColor = darkTheme.palette.primary.main
            } else if (fretMarker.text && fretMarker.text === rootNote) {
                fretMarkerEl.style.backgroundColor = darkTheme.palette.secondary.main
            } else {
                fretMarkerEl.style.backgroundColor = grey[900]
                fretMarkerEl.style.color = grey[400]
                fretMarkerEl.style.border = `1px solid ${darkTheme.palette.primary.light}`
            }
        }
        if (fretMarker.text) {
            fretMarkerEl.textContent = fretMarker.text
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

    function fretMarkerCleaner() {
        if (fretMarkerRefs.current) {
            const activeClass = guitarStyles["fretMarker_active"]
            const fretMarkers: HTMLDivElement[] = fretMarkerRefs.current.filter(
                el => el && el.classList.contains(activeClass) ? true : false
            ) as HTMLDivElement[]
            fretMarkers.forEach(el => { el.classList.remove(activeClass) })
            setAddedMarkers([])
        }
    }

    function addFretClickEvent(pos : [number,number]) {
        console.log("agregando")
        let fretMarker: FretMarker = {
            position: pos
        }
        addOrDeleteMarker(fretMarker, true)
        updateAddedMarkers(fretMarker)
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
            fretRefs.current.forEach((fret, fretIdx) => {
                if(fret){
                    const pos = getMarkerPos(fretIdx)
                    fret.addEventListener("click", () => addFretClickEvent([pos.string,pos.fret]))
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

    useEffect(() => {
        if (cleanWhenChange) {
            fretMarkerCleaner()
        }
    }, [cleanWhenChange])

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
                        <div
                            ref={(ref) => { fretRefs.current[(stringIdx * fretNum) + fretIdx] = ref }}
                            key={fretIdx}
                            className={
                                // agregar estilos del backgraund del traste segun si es una cuerda al aire o no
                                fretRange.min == 0 && fretIdx == 0 ?
                                    `${guitarStyles.fret} ${guitarStyles["string-fret-open"]}`
                                    : `${guitarStyles.fret} ${guitarStyles[`string-fret-close`]}`
                            }>
                            {/* agregar fretMakers */}
                            <div
                                ref={(ref) => { fretMarkerRefs.current[(stringIdx * fretNum) + fretIdx] = ref }}
                                className={`${guitarStyles.fretMarker}`}></div>
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


