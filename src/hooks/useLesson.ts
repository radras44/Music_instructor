import { CourseLesson } from "@/interfaces/baseInterfaces"
import { getLesson } from "@/utils/routerUtils"

export default function useLesson (pathName : string) {
    const pathSegments = pathName.split("/")
    const routeId = pathSegments[pathSegments.length - 1]
    console.log(routeId)
    const splited = routeId.split("-")
    if (splited.length >= 2) {
        const sectionNumber = Number(splited[0].substring(1))
        const lessonNumber = Number(splited[1].substring(1))
        const lesson: CourseLesson | null = getLesson("guitar", sectionNumber, lessonNumber)
        const lessonName = lesson ? lesson.name : ""
        return {lessonName,lessonNumber,sectionNumber}
    }
    return {lessonName : "",lessonNumber : 0,sectionNumber : 0}
}