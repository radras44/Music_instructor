import { CourseLesson } from "@/interfaces/baseInterfaces"
import { getLesson } from "@/utils/routerUtils"
import { useState, useEffect } from "react"

export default function useLesson (routeId : string) {

    const [current,setCurrent] = useState<CourseLesson | null>(null)
    const [sectionId, setSectionId] = useState<number | null>(null)
    useEffect(() => {
        const splited = routeId.split("-")

        if (splited.length >= 2) {
            const sectionId = Number(splited[0].substring(1))
            setSectionId(sectionId)
            const lessonId = Number(splited[1].substring(1))
            const lesson: CourseLesson | null = getLesson("guitar", sectionId, lessonId)
            setCurrent(lesson)
        }
    }, [])
    return ({current,sectionId})
}