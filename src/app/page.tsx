"use client"
import { OListItem } from "@/components/listComponentes";
import { Course } from "@/interfaces/baseInterfaces";
import { Box, Collapse, Grid, List, ListItemButton, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";
import { getLessonId } from "@/utils/lessonUtils";
import ThemeContainer from "@/components/themes";
import { guitarSections } from "./tutorials/guitar/lessons/guitarSections";
import { useState } from "react";
import { SubItemSx } from "@/styles/styles";

const courses: Course[] = [
    guitarSections
]

export default function GuitarTutorials() {

    const [collapses, setCollapses] = useState<any[]>(() => {
        return courses.map(course => {
            return {
                collapse: false, sections: course.sections.map(section => {
                    return {
                        collapse: false, lessons: section.lessons.map(lesson => {
                            return { collapse: false }
                        })
                    }
                })
            }
        })
    })

    function setCourseCollapse(course: number) {
        setCollapses(prevState => {
            const updatedState = [...prevState]
            updatedState[course].collapse = !prevState[course].collapse
            return updatedState
        }
        )
    }

    function setSectionCollapse(course: number, section: number) {
        setCollapses(prevState => {
            const updatedState = [...prevState]
            updatedState[course].sections[section].collapse = !prevState[course].sections[section].collapse
            return updatedState
        }
        )
    }

    return (
        <ThemeContainer maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    <List>
                        {courses.map((course, courseIdx) => (
                            <Box key={courseIdx}>
                                <ListItemButton onClick={() => {
                                    setCourseCollapse(courseIdx)
                                }}>
                                    <Typography>{course.name}</Typography>
                                </ListItemButton>
                                <Collapse in={collapses[courseIdx].collapse === true}>
                                    {
                                        course.sections.map((section, sectionIdx) => (
                                            <Box
                                                key={sectionIdx}
                                                sx={{ ...SubItemSx() }}
                                            >
                                                <ListItemButton onClick={() => {
                                                    setSectionCollapse(courseIdx, sectionIdx)
                                                }}>
                                                    <Typography>{section.name}</Typography>
                                                </ListItemButton>
                                                <Collapse in={collapses[courseIdx].sections[sectionIdx].collapse === true}>
                                                    {
                                                        section.lessons.map((lesson, lessonIdx) => (
                                                            <Box
                                                                key={lessonIdx}
                                                                sx={{ ...SubItemSx() }}
                                                            >
                                                                <OListItem
                                                                    lessonId={{ course: "guitar", lessonId: getLessonId(section.sectionNumber, lesson.lessonNumber) }}
                                                                    icon={<Book />}
                                                                    link={`/tutorials/guitar/lessons`}
                                                                    title={lesson.name}
                                                                    description={lesson.description}
                                                                />
                                                            </Box>
                                                        ))
                                                    }
                                                </Collapse>
                                            </Box>
                                        ))
                                    }
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Grid>
            </Grid>
        </ThemeContainer>
    )
}