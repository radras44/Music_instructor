import { Course, CourseLesson, CourseSection } from "@/interfaces/baseInterfaces";
import GuitarCourse from "../app/courses/guitar/Register"
import guitarCourse from "../app/courses/guitar/Register";
export function getLessonRoute (coursePathName : string,sectionId : number,lessonId: number) {
    return `/courses/${coursePathName}/S${sectionId}-L${lessonId}`
}

const courses : {[key:string] : Course} = {
    guitar : guitarCourse
}

export function getLesson (coursePathName : string,sectionId : number,lessonId : number){
    const course = courses[coursePathName]
    if(course){
        const section : CourseSection | undefined = course.sections.find(section => section.id === sectionId) 
        if(typeof(section) == "undefined"){
            return null
        }
        const lesson : CourseLesson | undefined = section.lessons.find(lesson => lesson.id === lessonId)
        if(typeof(lesson) == "undefined"){
            return null
        }
        return lesson
        
    }
    return null
}