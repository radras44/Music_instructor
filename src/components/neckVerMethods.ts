import { FretMarker } from "@/interfaces/baseInterfaces"

const notes = ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si"]

const stringNotes: { [key: number]: string } = {
    1: "Mi",
    2: "Si",
    3: "Sol",
    4: "Re",
    5: "La",
    6: "Mi"
}

export function isAnOctave(response: FretMarker[], solutions: FretMarker[][]): boolean {
    function getFretNote(marker: FretMarker) {
        const string = marker.position[0]
        const fret = marker.position[1]
        const stringNote = stringNotes[string]
        if (stringNote == undefined) {
            return null
        }
    
        const fretNote = notes[notes.indexOf(stringNote) + fret]
        return fretNote
    }

    const result = solutions.some(solution =>
        solution.every(solutionFret => 
            response.length === solution.length &&
                response.some(responseFret => getFretNote(solutionFret) === getFretNote(responseFret))
                )
    )
    return result
}


export function belongString (response: FretMarker[],solutions : FretMarker[][]) {
    const string : number =  solutions[0][0].position[0]
    if(response.length == 1 && response[0].position[0] === string){
        return true
    }

    return false
}

export function belongFret(response: FretMarker[],solution : FretMarker[][]) {
    const fretSolution = solution[0][0].position[1]
    if(response.length == 1 && response[0].position[1] === fretSolution){
        return true
    }
    return false
}