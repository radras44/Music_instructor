import { CourseSection} from "@/interfaces/baseInterfaces"
import { saveLessonId, getLessonId } from "@/utils/lessonUtils"
import { ExpandLess, ExpandMore } from "@mui/icons-material"
import { Box, List, ListItemButton, ListItemText, Collapse, Typography } from "@mui/material"
import { useState } from "react"
interface sideBarLessonListProps {
    lessonSections:CourseSection[]
    setCurrentLesson: React.Dispatch<React.SetStateAction<any>>
    initialNameValue?: string
    courseName: "guitar" | "piano"
    onSelect? : Function
}

export function SideBarLessonList({ lessonSections, setCurrentLesson, initialNameValue, courseName,onSelect }: sideBarLessonListProps) {
    const [openSection, setOpenSection] = useState<boolean[]>(Array(lessonSections.length).fill(true))
    const [currentSelect, setCurrentSelect] = useState<string>(initialNameValue || "")
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
        <Box sx={{
            position: "sticky",
            top: 40,
            maxHeight : "90vh",
            overflow : "auto"
        }}>
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
                                    if(lesson.name !== currentSelect){
                                        saveLessonId(courseName, getLessonId(section.sectionNumber, lesson.lessonNumber))
                                        setCurrentLesson(lesson)
                                        handleSelect(e, lesson.name)
                                        window.scrollTo(0,0)
                                        if(onSelect){
                                            onSelect()
                                        }
                                    }
                                }}
                                sx={{
                                    pl: 6,
                                    pt: 0,
                                    pb: 0,
                                }}
                            >
                                <Typography variant="subtitle1" component="h6" sx={{
                                    fontSize: 14,
                                    m:1,
                                    color: currentSelect === lesson.name ? "text.primary" : "text.secondary"
                                }}>
                                    {lesson.name}
                                </Typography>
                            </ListItemButton>
                        ))}
                    </Collapse>
                </List>
            ))}
        </Box>
    )
}
