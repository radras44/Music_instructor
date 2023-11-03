import Link from "next/link"
import { Box, ListItemButton, ListItemIcon, Typography } from "@mui/material"


interface OListItemProps {
    title: string
    icon?: JSX.Element
    link?: string
    description?: string
}
export function LessonLink({
    title,
    link = "#",
    icon,
    description
}: OListItemProps) {
    return (
        <Link href={link}>
            <ListItemButton
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


