"use client"
import { Course } from "@/interfaces/baseInterfaces";
import { Box, useMediaQuery } from "@mui/material";
import guitarCourse from "../Register";
import ThemeContainer from "@/components/themes";
import { useTheme } from "@mui/material/styles";
import CourseNavbar from "@/components/nav/courseNavbar";
import useLesson from "@/hooks/useLesson";


const course: Course = guitarCourse

export default function GuitarLessons({ params }: { params: { routeId: string } }) {
    const theme = useTheme()
    const uplg = useMediaQuery(theme.breakpoints.up("lg"))
    const {current,sectionId} = useLesson(params.routeId)

    return (
        <ThemeContainer maxWidth={"lg"}>
            <Box>
                {
                    current && sectionId ?
                        <CourseNavbar
                            course={course}
                            currentLesson={current}
                            currentSectionId={sectionId}
                        /> : null
                }
            </Box>
            <Box sx={{mt:5}}>
                {
                    current ?
                        current.component
                        : null
                }
            </Box>
        </ThemeContainer>
    )
}