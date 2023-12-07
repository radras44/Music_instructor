"use client"
import { Course, CourseLesson, CourseSection } from "@/interfaces/baseInterfaces";
import { getLessonRoute } from "@/utils/routerUtils";
import { AutoStories, Home, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material";
import { AppBar, Box, Button, Collapse, Drawer, List, ListItem, ListItemButton, ListItemText, Toolbar, Typography } from "@mui/material";
import Link from "next/link";
import { CSSProperties, useState } from "react";
import {useTheme} from "@mui/material/styles"
import {useLesson} from "@/hooks/useLesson";
import { usePathname, useRouter } from "next/navigation";
interface CourseNavbarProps {
    courseReg: Course
}

export default function CourseNavbar({ courseReg}: CourseNavbarProps) {
    const pathName = usePathname()
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    const {lessonName,lessonNumber,sectionNumber} = useLesson(pathName)
    function openDrawer() { setShowDrawer(true) }
    function closeDrawer() { setShowDrawer(false) }

    const [collapses, setCollapses] = useState<boolean[]>(() => {
        const arr = new Array(courseReg.sections.length).fill(false)
        const currentSectionIdx = courseReg.sections.findIndex(section => section.id === sectionNumber)
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
    const theme = useTheme()
    const appBarStyles : CSSProperties = {
        minHeight : 60,
        display : "flex",
        alignItems : "center",
        flexDirection : "row",
        [theme.breakpoints.down("md")] : {minHeight : 50}
    }
    const lessonNameStyle : CSSProperties = {
        whiteSpace : "nowrap",
        color : "text.secondary",
        [theme.breakpoints.down("lg")] : {fontSize : 15},
        [theme.breakpoints.down("md")] : {fontSize : 14},
        [theme.breakpoints.down("sm")] : {fontSize : 13,marginRight : 3}
    }

    const iconStyles = {
        fontSize : 25,
        [theme.breakpoints.down("md")] : {fontSize : 22},
    }
    const DrawerLIStyles : CSSProperties = {
        display:"flex",gap:1
    }
    return (
        <AppBar sx={appBarStyles}>
            <Box sx={{flex:1,display : "flex",flexDirection : "row",flexWrap : "nowrap"}}>
                <Link href={"/"}>
                    <Button color="inherit">
                        <Home sx={iconStyles}/>
                    </Button>
                </Link>
                <Button onClick={openDrawer} color="secondary">
                    <AutoStories sx={iconStyles}/>
                </Button>
            </Box>
            <Box sx={{flex:1}}>
                <Typography 
                align="center" 
                variant="h6" 
                sx={lessonNameStyle}
                >{lessonName}</Typography>
            </Box>
            <Box sx={{
                flex : 1,
                [theme.breakpoints.down("sm")] : {flex : 0}
            }}>

            </Box>
            {/* drawer content */}
            <Drawer open={showDrawer} onClose={closeDrawer} anchor="left">
                <List>
                    {
                        courseReg.sections.map((section, index) => (
                            <Box key={index} >
                                <ListItemButton sx={DrawerLIStyles}
                                    onClick={() => {
                                        toggleCollapse(index)
                                    }}
                                >
                                    {collapses[index] ?  <KeyboardArrowDown/>: <KeyboardArrowRight/>}
                                   
                                    <Typography>{section.name}</Typography>
                                </ListItemButton>
                                <Collapse in={collapses[index]}>
                                    <List sx={{
                                        ml: 3
                                    }}>
                                        {section.lessons.map((lesson, lindex) => (
                                            <Box key={lindex}>
                                                <Link onClick={closeDrawer} href={getLessonRoute("guitar", section.id, lesson.id)}>
                                                    <ListItemButton selected={lesson.name === lessonName}>
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