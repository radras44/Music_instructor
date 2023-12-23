import { Box, Stack, Pagination, AppBar, Button, Collapse, Drawer, List, ListItemButton, Typography, useTheme } from "@mui/material"
import { CSSProperties, useState } from "react"
import Link from "next/link"
import { LessonLayoutProps } from "./Lesson"
import { useLesson } from "@/hooks/useLesson"
import { Course, NavIconElement } from "@/interfaces/baseInterfaces"
import { getLessonRoute } from "@/utils/routerUtils"
import { Home, AutoStories, KeyboardArrowDown, KeyboardArrowRight } from "@mui/icons-material"
import { usePathname } from "next/navigation"

export function Layout({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{
            marginTop: 15,
            marginBottom: 15
        }}>
            {children}
        </Box>
    )
}

interface CourseNavbarProps {
    courseReg: Course
    additionalNavElements?: NavIconElement[]
}

function Navbar({ courseReg, additionalNavElements }: CourseNavbarProps) {
    const pathName = usePathname()
    const [showDrawer, setShowDrawer] = useState<boolean>(false)
    const { lessonName, lessonNumber, sectionNumber } = useLesson(pathName)
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
    const appBarStyles: CSSProperties = {
        minHeight: 60,
        display: "flex",
        alignItems: "center",
        flexDirection: "row",
        [theme.breakpoints.down("md")]: { minHeight: 50 }
    }
    const lessonNameStyle: CSSProperties = {
        whiteSpace: "nowrap",
        color: "text.secondary",
        [theme.breakpoints.down("lg")]: { fontSize: 15 },
        [theme.breakpoints.down("md")]: { display : "none",position:"absolute" },

    }

    const iconStyles = {
        fontSize: 25,
        [theme.breakpoints.down("md")]: { fontSize: 22 },
    }
    const DrawerLIStyles: CSSProperties = {
        display: "flex", gap: 1
    }

    return (
        <AppBar sx={appBarStyles}>
            <Box sx={{ flex: 1, display: "flex", flexDirection: "row", flexWrap: "nowrap" }}>
                <Link href={"/"}>
                    <Button color="inherit">
                        <Home sx={iconStyles} />
                    </Button>
                </Link>
                <Button onClick={openDrawer} color="secondary">
                    <AutoStories sx={iconStyles} />
                </Button>
                {additionalNavElements &&
                    additionalNavElements.map((element, index) => (
                        <Link key={index} href={element.href}>
                            <Button>
                                {element.icon}
                            </Button>
                        </Link>
                    ))
                }
            </Box>
            <Box sx={{ flex: 1 }}>
                <Typography
                    align="center"
                    variant="h6"
                    sx={lessonNameStyle}
                >{lessonName}</Typography>
            </Box>
            <Box sx={{
                flex: 1,
                [theme.breakpoints.down("sm")]: { flex: 0 }
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
                                    {collapses[index] ? <KeyboardArrowDown /> : <KeyboardArrowRight />}

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

export default { Layout, Navbar }