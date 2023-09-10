"use client"
import { SideBarLessonList } from "@/components/lessonComponents/sideBarLessonList";
import { CourseLesson, CourseSection } from "@/interfaces/baseInterfaces";
import { Box, Button, Drawer, Grid, Hidden, ListItemButton } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { guitarSections } from "./guitarSections";
import { getSavedLesson } from "@/utils/lessonUtils";
import ThemeContainer from "@/components/themes";
import { ArrowRight, ArrowRightAlt, ArrowRightAltRounded, KeyboardArrowRight, OpenInFull } from "@mui/icons-material";
import { Vcontainer } from "@/styles/styles";


const courseSections: CourseSection[] = guitarSections.sections

export default function GuitarLessons() {
    const [currentLesson, setCurrentLesson] = useState<CourseLesson | null>(null)

    useEffect(() => {
        const initialLesson = getSavedLesson("guitar", courseSections)
        if (initialLesson.status) {
            setCurrentLesson(initialLesson.result)
        }
    }, [])

    const [showSectionDrawer,setShowSectionDrawer] = useState<boolean>(false)
    function openSectionDrawer () {setShowSectionDrawer(true)}
    function closeSectionDrawer () {setShowSectionDrawer(false)}

    return (
        <ThemeContainer maxWidth="xl">
            <Grid container>
                <Grid item lg={3} xs={.2}>
                    {
                        currentLesson ?
                            <Box sx={{
                                position : "sticky",
                                height: "100vh",
                                ...Vcontainer(),
                                justifyContent: "center",
                                alignItems:"center"
                            }}>
                                <Hidden lgDown>
                                    <SideBarLessonList
                                        courseName="guitar"
                                        lessonSections={courseSections}
                                        setCurrentLesson={setCurrentLesson}
                                        initialNameValue={currentLesson?.name}
                                    />
                                </Hidden>
                                <Hidden lgUp>
                                    <ListItemButton onClick={openSectionDrawer} sx={{
                                        padding : 0,
                                        width : "100%",
                                        display : "flex",
                                        justifyContent : "center",
                                        alignItems : "center"
                                    }}>
                                        <KeyboardArrowRight fontSize="large" />
                                    </ListItemButton>
                                </Hidden>
                                <Drawer 
                                open={showSectionDrawer} 
                                onClose={closeSectionDrawer}
                                anchor="left"
                                >
                                    <SideBarLessonList
                                        courseName="guitar"
                                        lessonSections={courseSections}
                                        setCurrentLesson={setCurrentLesson}
                                        initialNameValue={currentLesson?.name}
                                        onSelect={closeSectionDrawer}
                                    />
                                </Drawer>
                            </Box>
                            : null
                    }
                </Grid>
                <Grid item lg={9} xs={11.8}>
                    <Box sx={{ marginLeft: 2 }}>
                        {currentLesson?.component}
                    </Box>
                </Grid>
            </Grid>
        </ThemeContainer>
    )
}