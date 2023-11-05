import React, { useEffect, useRef, useState } from "react"
import guitarStyles from "../../styles/guitar.module.css"
import { FretMarker } from "@/interfaces/baseInterfaces"

interface GuitarNeckProps {
    label?: string
    frets?: number
    strings?: number
    fretMarkers?: FretMarker[]
    neckRange?: number[]
    allowAdd?: boolean
    rootNote?: string
    highlight?: string[]
    setWhenAddMarker?: Function
    showFretLabels? : boolean
}

export function GuitarNeck({
    label,
    strings = 6,
    fretMarkers,
    neckRange = [0, 12],
    allowAdd = false,
    rootNote,
    highlight = [],
    setWhenAddMarker,
    showFretLabels = true
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
            const fret = string.children[fretMarker.position[1] - neckRange[0]]
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

    function resetMarkers() {
        for (const marker of addedMarkers) {
            addOrDeleteMarker(marker)
            setAddedMarkers([])
        }
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
        <div className={guitarStyles.neck}>
            {
                label ?
                    <h5 className={guitarStyles["neck-label"]}>{label}</h5>
                    : null
            }
            {/* Crear cuerdas */}
            {Array.from({ length: strings }).map((_, stringIdx) => (
                <div
                    ref={(ref) => (stringRefs.current[stringIdx] = ref)}
                    key={stringIdx}
                    className={guitarStyles.string}
                >
                    {/* Crear trastes del mástil */}
                    {Array.from({ length: (neckRange[1] - neckRange[0]) + 1 }).map((_, fretIdx) => (
                        <div key={fretIdx} className={
                            // agregar estilos del backgraund del traste segun si es una cuerda al aire o no
                            neckRange[0] == 0 && fretIdx == 0 ?
                                `${guitarStyles.fret} ${guitarStyles["string-open"]} `
                                :
                                `${guitarStyles.fret} ${guitarStyles[`string-fret`]}`
                        }>
                            {/* agregar label encima de cada traste indicando su numero*/}
                            {
                                showFretLabels && stringIdx == 0 && (fretIdx + neckRange[0]) !== 0 ?
                                    <div className={guitarStyles.fretNumberLabel}>{fretIdx + neckRange[0]}</div>
                                    : null
                            }
                            <div className={`${guitarStyles.fretMarker}`}></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}
