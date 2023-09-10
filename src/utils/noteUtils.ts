import { FretMarkerPosition } from "@/components/lessonComponents/guitar";

const notes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"]

const stringNotes: { [key: number]: string } = {
    1: "Mi",
    2: "Si",
    3: "Sol",
    4: "Re",
    5: "La",
    6: "Mi"
}

export function isAnOctave(response: FretMarkerPosition[], solutions: FretMarkerPosition[][]): boolean {
    const result = solutions.some(solution =>
        solution.every(fret => 
            response.length === solution.length &&
                response.some(responseFret => getFretNote(fret) === getFretNote(responseFret))
                )
    )
    return result
}

export function getFretNote(marker: FretMarkerPosition) {
    const string = marker.position[0]
    const fret = marker.position[1]
    const stringNote = stringNotes[string]
    if (stringNote == undefined) {
        return null
    }

    const fretNote = notes[notes.indexOf(stringNote) + fret]
    return fretNote
}