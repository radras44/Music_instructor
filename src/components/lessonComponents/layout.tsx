import { Course, CourseLesson } from "@/interfaces/baseInterfaces"
import { Box, Pagination, Stack, Typography } from "@mui/material"
import { FunctionComponent, useState } from "react"
import CourseNavbar from "../nav/courseNavbar"
export interface LessonLayoutProps {
    segments: JSX.Element[]
}

export function LessonLayout({ segments }: LessonLayoutProps) {
    const [page, setPage] = useState<number>(1)
    function changePage(e: React.ChangeEvent<any>, value: number) {
        setPage(value)
        window.scrollTo(0, 0)
    }
    return (
        <Box sx={{
            p: 2,
            mb: 15
        }}>
            <Box>{segments[page - 1]}</Box>
            <Box sx={{
                display: "flex", flexDirection: "row", justifyContent: "center"
            }}>
                <Stack spacing={2}>
                    <Pagination
                        size="large"
                        count={segments.length}
                        page={page}
                        onChange={changePage}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

