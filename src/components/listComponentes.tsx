import { TutorialSection } from "@/interfaces/baseInterfaces"
import Link from "next/link"
import { Box, Collapse, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, ToggleButton, ToggleButtonGroup, Typography } from "@mui/material"
import { useState } from "react"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
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

interface sideBarLessonListProps {
    lessonSections: TutorialSection[]
    setCurrentLesson: React.Dispatch<React.SetStateAction<any>>
    initialNameValue?: string
}

export function SideBarLessonList({ lessonSections, setCurrentLesson,initialNameValue }: sideBarLessonListProps) {
    const [openSection, setOpenSection] = useState<boolean[]>(Array(lessonSections.length).fill(true))
    const [currentSelect, setCurrentSelect] = useState<string>(initialNameValue||"")
    function handleOpenSection(index: number) {
        setOpenSection((prevState) => {
            const updateState = [...prevState]
            updateState[index] = !openSection[index]
            return updateState
        })
    }

    function handleSelect(event: React.MouseEvent<HTMLElement>, newAlignment: string) {
        setCurrentSelect(newAlignment);
    };
    return (
        <Box>
            {lessonSections.map((section, sectionIdx) => (
                <List key={sectionIdx}>
                    <ListItemButton onClick={() => { handleOpenSection(sectionIdx) }}>
                        {openSection[sectionIdx] ? <ExpandLess /> : <ExpandMore />}
                        <ListItemText primary={section.name} sx={{
                            fontSize: 25
                        }} />
                    </ListItemButton>
                    <Collapse in={openSection[sectionIdx]} timeout="auto" unmountOnExit>
                        {section.lessons.map((lesson, lessonIdx) => (
                            <ListItemButton
                                key={lessonIdx}
                                selected={currentSelect === lesson.name}
                                onClick={(e) => {
                                    setCurrentLesson(lesson)
                                    handleSelect(e, lesson.name)
                                }}
                                sx={{
                                    pl: 6,
                                    pt: 0,
                                    pb: 0,
                                }}
                            >
                                <ListItemText primary={lesson.name} sx={{
                                    fontSize: 10,
                                }} />
                            </ListItemButton>
                        ))}
                    </Collapse>
                </List>
            ))}
        </Box>
    )
}

