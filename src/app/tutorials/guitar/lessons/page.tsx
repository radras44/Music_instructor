"use client"
import { SideBarLessonList } from "@/components/lessonComponents/sideBarLessonList";
import { TutorialLesson, TutorialSection } from "@/interfaces/baseInterfaces";
import { Grid } from "@mui/material";
import { useEffect, useMemo, useState } from "react";
import { guitarSections } from "./guitarLessons";
import { getSavedLesson } from "@/utils/lessonUtils";
import ThemeContainer from "@/components/themes";


const lessonSections: TutorialSection[] = guitarSections

export default function GuitarLessons() {
    const [currentLesson, setCurrentLesson] = useState<TutorialLesson | null>(null)

    useEffect(() => {
        const initialLesson = getSavedLesson("guitar", lessonSections)
        if (initialLesson.status) {
            setCurrentLesson(initialLesson.result)
        }
    }, [])
    return (
        <ThemeContainer maxWidth="xl">
            <Grid container>
                <Grid item xs={3}>
                    {
                        currentLesson ?
                            <SideBarLessonList
                                courseName="guitar"
                                lessonSections={guitarSections}
                                setCurrentLesson={setCurrentLesson}
                                initialNameValue={currentLesson?.name}
                            /> : null
                    }
                </Grid>
                <Grid item xs={7}>
                    {currentLesson?.component}
                </Grid>
            </Grid>
        </ThemeContainer>
    )
}