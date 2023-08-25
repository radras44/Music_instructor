import Link from "next/link"
import { Box, ListItemButton, ListItemIcon, Typography } from "@mui/material"
import { saveLessonId } from "@/utils/lessonUtils"

interface OListItemProps {
    title: string
    icon?: JSX.Element
    link?: string
    description?: string
    lessonId?: { course: string, lessonId: string }
}
export function OListItem({
    title,
    link = "#",
    icon,
    description,
    lessonId
}: OListItemProps) {
    return (
        <Link href={link}>
            <ListItemButton
                onClick={() => {
                    if (lessonId) {
                        saveLessonId(lessonId.course, lessonId.lessonId)
                    }
                }}
                sx={{
                    display: "flex",
                    flexDirection: "row",
                    alignItems: "center"
                }}
            >
                <ListItemIcon>
                    {icon}
                </ListItemIcon>
                <Box
                    sx={{
                        display: "flex",
                        flexDirection: "column"
                    }}
                >
                    <Typography variant="h5">{title}</Typography>
                    <Typography variant="body1">{description}</Typography>
                </Box>
            </ListItemButton>
        </Link>
    )
}


