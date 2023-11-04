import { Course, CourseLesson, CourseSection } from "@/interfaces/baseInterfaces";
import { getLessonRoute } from "@/utils/routerUtils";
import { AutoStories, Home } from "@mui/icons-material";
import { AppBar, Box, Button, Collapse, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { useState } from "react";

interface CourseNavbarProps {
    course: Course
    currentLesson: CourseLesson
    currentSectionId: number
}

export default function CourseNavbar({ course, currentLesson, currentSectionId }: CourseNavbarProps) {
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    function openDrawer() { setShowDrawer(true) }
    function closeDrawer() { setShowDrawer(false) }

    const [collapses, setCollapses] = useState<boolean[]>(() => {
        const arr = new Array(course.sections.length).fill(false)
        const currentSectionIdx = course.sections.findIndex(section => section.id === currentSectionId)
        if (currentSectionIdx !== undefined) {
            arr[currentSectionIdx] = true
        }
        return arr
    }
    )

    function toggleCollapse(i: number) {
        setCollapses(prevState => {
            const updated = [...prevState]
            updated[i] = !updated[i]
            return updated
        })
    }
    return (
        <AppBar sx={{
            minHeight : 60,
            display : "flex",
            alignItems : "center",
            flexDirection : "row"
        }}>
            <Box sx={{flex:1}}>
                <Link href={"/"}>
                    <Button color="inherit">
                        <Home fontSize="medium" />
                    </Button>
                </Link>
                <Button onClick={openDrawer} color="success">
                    <AutoStories fontSize="medium" />
                </Button>
            </Box>
            <Box sx={{flex:1}}>
                <Typography 
                align="center" 
                variant="h6" 
                sx={{color: "grey.400"}}
                >{currentLesson.name}</Typography>
            </Box>
            <Box sx={{flex :1}}>

            </Box>
            {/* drawer content */}
            <Drawer open={showDrawer} onClose={closeDrawer} anchor="left">
                <List>
                    {
                        course.sections.map((section, index) => (
                            <Box key={index}>
                                <ListItemButton
                                    onClick={() => {
                                        toggleCollapse(index)
                                    }}
                                >
                                    <Typography>{section.name}</Typography>
                                </ListItemButton>
                                <Collapse in={collapses[index]}>
                                    <List sx={{
                                        ml: 3
                                    }}>
                                        {section.lessons.map((lesson, lindex) => (
                                            <Box key={lindex}>
                                                <Link href={getLessonRoute("guitar", section.id, lesson.id)}>
                                                    <ListItemButton selected={lesson.name === currentLesson.name}>
                                                        <Typography variant="subtitle2">{lesson.name}</Typography>
                                                    </ListItemButton>
                                                </Link>
                                            </Box>
                                        ))}
                                    </List>
                                </Collapse>
                            </Box>
                        ))
                    }
                </List>
            </Drawer>
        </AppBar>
    )
}