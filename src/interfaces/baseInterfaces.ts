export interface CourseLesson {
    id : number
    name : string
    description : string
    component : JSX.Element
}

export interface CourseSection {
    id : number
    name : string,
    lessons : CourseLesson[]
}

export interface Course {
    pathName : string
    name : string,
    sections : CourseSection[]
}

export interface LessonComponent {
    title : string    
}

export interface Statement {
    statement: string
    correction: JSX.Element | string
}