"use client"
import { Course, CourseLesson, CourseSection } from "@/interfaces/baseInterfaces";
import { Box, Drawer, Grid, ListItemButton, ListItemIcon, useMediaQuery } from "@mui/material";
import { useEffect, useState } from "react";
import guitarCourse from "../Register";
import ThemeContainer from "@/components/themes";
import { useTheme } from "@mui/material/styles";
import { getLesson } from "@/utils/routerUtils";
import CourseNavbar from "@/components/nav/courseNavbar";


const course: Course = guitarCourse

export default function GuitarLessons({ params }: { params: { routeId: string } }) {
    const theme = useTheme()
    const uplg = useMediaQuery(theme.breakpoints.up("lg"))

    const [lesson, setLesson] = useState<CourseLesson | null>(null)
    const [sectionId, setSectionId] = useState<number | null>(null)

    useEffect(() => {
        const splited = params.routeId.split("-")

        if (splited.length >= 2) {
            const sectionId = Number(splited[0].substring(1))
            setSectionId(sectionId)
            const lessonId = Number(splited[1].substring(1))
            const lesson: CourseLesson | null = getLesson("guitar", sectionId, lessonId)
            setLesson(lesson)
        }
    }, [])

    return (
        <ThemeContainer maxWidth={"lg"}>
            <Box>
                {
                    lesson && sectionId ?
                        <CourseNavbar
                            course={course}
                            currentLesson={lesson}
                            currentSectionId={sectionId}
                        /> : null
                }
            </Box>
            <Box sx={{mt:15}}>
                {
                    lesson ?
                        lesson.component
                        : null
                }
            </Box>
        </ThemeContainer>
    )
}