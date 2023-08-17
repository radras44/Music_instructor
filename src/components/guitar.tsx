import { useEffect, useRef } from "react"
import guitarStyles from "../styles/guitar.module.css"

interface FretMarkerPosition {
    string: number,
    fret: number
    text? : string

}

interface GuitarNeckProps {
    label? : string
    frets?: number
    strings?: number
    fretMarkers: FretMarkerPosition[]
    neckRange?: number[]
    allowAdd? : boolean
    rootNote? : string
}

export function GuitarNeck({
    label, 
    strings = 6, 
    fretMarkers,
    neckRange = [0,12],
    allowAdd = false,
    rootNote
}: GuitarNeckProps) {
    const stringRefs = useRef<Array<HTMLDivElement | null>>(
        Array.from({ length: strings }).map(() => null)
    );

    function addFretLabel (fretMarkers : FretMarkerPosition) {
        //agregar texto a cada traste que lo requiera
        const string = stringRefs.current[(fretMarkers.string - 1)]
        if (string) {
            const fret = string.children[fretMarkers.fret - neckRange[0]]
            if (fret) {
                let fretMarker = fret.querySelector(`div.${guitarStyles.fretMarker}`)
                if(fretMarker){
                    if (fretMarker.classList.contains(guitarStyles.fretMarker_active)) {
                        fretMarker.classList.remove(guitarStyles.fretMarker_active)
                    } else {
                        fretMarker.classList.add(guitarStyles.fretMarker_active)
                        if(fretMarkers.text && fretMarkers.text === rootNote){
                            fretMarker.classList.add(guitarStyles["fretMarker-root"])
                        }
                    }
                    //agregar estilo a la fundamental

                    if(fretMarkers.text){
                        fretMarker.textContent = fretMarkers.text
                    }
                }
            }
        }
    }

    useEffect(() => {
        for (const fretMarker of fretMarkers) {
           addFretLabel(fretMarker)
        }
        //agregar elementos de escucha
        if(allowAdd){
            stringRefs.current.forEach((stringElement,stringIdx)=>{
                if(stringElement && stringElement.children){
                    const frets = stringElement.children
                    Array.from(frets).forEach((fret,fretIdx)=>{
                        fret.addEventListener("click",()=>{
                            let fretMarker : FretMarkerPosition = {
                                string : stringIdx + 1,
                                fret : fretIdx 
                            }
                            addFretLabel(fretMarker)
                        })
                    })
                }
            })
        }
    }, [])

    return (
        <div className={guitarStyles.neck}>
            {
                label ? 
                <h5 className={guitarStyles["neck-label"]}>{label}</h5>
                :null
            }
            {/* Crear cuerdas */}
            {Array.from({ length: strings }).map((_, stringIdx) => (
                <div
                    ref={(ref) => (stringRefs.current[stringIdx] = ref)}
                    key={stringIdx}
                    className={guitarStyles.string}
                >
                    {/* Crear trastes del mástil */}
                    {Array.from({ length: (neckRange[1] - neckRange[0])+1 }).map((_, fretIdx) => (
                        <div key={fretIdx} className={
                            neckRange[0] == 0 &&     fretIdx == 0 ?
                            `${guitarStyles.fret} ${guitarStyles["string-open"]} `
                            :
                            `${guitarStyles.fret} ${guitarStyles[`string-${String(stringIdx+1)}`]}`
                            }>
                            {
                                stringIdx == 0 && (fretIdx + neckRange[0]) !== 0?
                                <div className={guitarStyles.fretNumberLabel}>{fretIdx + neckRange[0]}</div>
                                : null
                            }
                            {/* Crear labels o indicadores encima de cada traste */}
                            <div className={`${guitarStyles.fretMarker}`}></div>
                        </div>
                    ))}
                </div>
            ))}
        </div>
    );
}

