export interface TextComponent {
    text : string
    highlight? : boolean
}

export interface Course {
    pathName : string
    name : string
    url? : string
    sections : CourseSection[]
}

export interface CourseSection {
    id : number
    name : string,
    lessons : CourseLesson[]
}

export interface CourseLesson {
    id : number
    name : string
    description : string
}

export interface Statement {
    statement: string
    correction: JSX.Element | string
}

// guitar

export interface neckTestQuestion {
    question: string,
    solutions: FretMarker[][],
    defaultMarkers?: FretMarker[]
    verificationMethod?: (response: FretMarker[], solutions: FretMarker[][]) => boolean
}

export interface FretMarker {
    position: [number, number]
    text?: string
}