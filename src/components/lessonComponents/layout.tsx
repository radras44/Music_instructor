import usePaginator, { Paginator } from "@/hooks/usePaginator"
import { NavigateBefore, NavigateNext } from "@mui/icons-material"
import { Box, Button, Typography } from "@mui/material"

export interface LessonLayoutProps {
    segments: JSX.Element[]
    title: string
}

export function LessonLayout({ segments, title }: LessonLayoutProps) {
    const paginator = usePaginator(segments)
    return (
        <>
            <Typography align="center" variant="h4" sx={{
                fontWeight: 400
            }}>{title}</Typography>
            {
                segments[paginator.current]
            }
            <LessonPaginatorButtons paginator={paginator} />
        </>
    )
}


function LessonPaginatorButtons({ paginator }: { paginator: Paginator }) {
    return (
        <Box sx={{
            display : "flex",
            flexDirection: "row",
            justifyContent : "center"
        }}>
            <Button
                startIcon={<NavigateBefore />}
                onClick={paginator.back}>Anterior</Button>
            <Button
                endIcon={<NavigateNext />}
                onClick={paginator.next}>Siguiente</Button>
        </Box>
    )
}