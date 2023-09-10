export interface CourseLesson {
    lessonNumber : number
    name : string
    description : string
    component : JSX.Element
}

export interface CourseSection {
    sectionNumber : number
    name : string,
    lessons : CourseLesson[]
}

export interface Course {
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