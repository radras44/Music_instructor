export interface TutorialLesson {
    lessonNumber : number
    name : string
    description : string
    component : JSX.Element
}

export interface TutorialSection {
    sectionNumber : number
    name : string,
    lessons : TutorialLesson[]
}

export interface LessonComponent {
    title : string    
}

export interface Statement {
    statement: string
    correction: JSX.Element | string
}