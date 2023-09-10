import { CourseLesson, CourseSection } from "@/interfaces/baseInterfaces"

export function saveLessonId (courseName : string,lessonId : string){
    courseName = courseName[0].toUpperCase() + courseName.slice(1)
    if(window !== undefined){
        window.localStorage.setItem(`initial${courseName}LessonId`,lessonId)
    }
}

export function getSavedLesson (courseName : string,lessonSections : CourseSection[]){
    courseName = courseName[0].toUpperCase() + courseName.slice(1)
    if(window === undefined){
        return {
            status : false,
            error : "window es undefined",
            result : null
        }
    }
    const lessonId = window.localStorage.getItem(`initial${courseName}LessonId`)
    if(!lessonId){
        return {
            status : false,
            error : "lessonId not found",
            result : null
        }
    }

    const sectionNumber = Number(lessonId.substring(lessonId.indexOf("S") +1 ,lessonId.indexOf("L")))
    const lessonNumber = Number(lessonId.split("L")[1])
    const section : CourseSection | null = lessonSections.find(section => section.sectionNumber === sectionNumber ) || null
    if(!section){
        return {
            status : false,
            error : "section es null",
            result : null
        }
    }
    console.log(`section es nulo`)

    const lesson : CourseLesson | null = section.lessons.find(lesson => lesson.lessonNumber === lessonNumber) || null
    
    return {
        status : true,
        error : "",
        result : lesson
    }
}

export function getLessonId(sectionNumber : number,lessonnumber : number){
    return `S${sectionNumber}L${lessonnumber}`
}
