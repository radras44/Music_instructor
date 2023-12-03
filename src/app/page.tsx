"use client"

import { Course, CourseSection } from "@/interfaces/baseInterfaces";
import { Box, Collapse, Grid, List, ListItemButton, Typography } from "@mui/material";
import { Book } from "@mui/icons-material";
import ThemeContainer from "@/components/themes";
import guitarCourse from "./courses/guitar/Register";
import { CSSProperties, useEffect, useState } from "react";
import { getLessonRoute } from "@/utils/routerUtils";
import Text from "@/components/Text";



const courses: Course[] = [
    guitarCourse
]

export default function App() {
    //generate a boolean array to control the collapses (expandable content
    const [collapses, setCollapses] = useState<any[]>(() => {
        //course collapse controls
        return courses.map((course: Course) => {
            return {
                collapse: false,
                //section collapse controls
                sections: course.sections.map(section => {
                    return {
                        collapse: false,
                        //lesson collapse controls 
                        lessons: section.lessons.map(lesson => {
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

    const titleStyles: CSSProperties = {
        fontWeight: 600
    }
    const containerStyles: CSSProperties = {
        display: "flex", flexDirection: "column", gap: 10,
        alignItems: "center", minHeight: "80vh", justifyContent: "center"
    }

    const titleContainerStyles: CSSProperties = {
        display: "flex", flexDirection: "column", gap: 2,
    }

    return (
        <ThemeContainer >
            <Box sx={containerStyles} component="main">
                {/* list of courses */}
                <Box sx={{ titleContainerStyles }}>
                    <Typography sx={titleStyles} variant="h2" align="center" component="h1" color="primary">
                        Bienvenido
                    </Typography>
                    <Typography variant="h6" component="h2">Cursos de teoria musical aplicada</Typography>
                </Box>
                <Box>
                    <Typography sx={{color : "primary.main"}} variant="h5">Cursos Disponibles</Typography>
                    <List>
                        {courses.map((course, courseIdx) => (
                            <Box key={courseIdx} component="article">
                                <ListItemButton onClick={() => {
                                    setCourseCollapse(courseIdx)
                                }}>
                                    <Typography>{course.name}</Typography>
                                </ListItemButton>
                                {/*list of sections */}
                                <Collapse in={collapses[courseIdx].collapse === true}>
                                    {
                                        course.sections.map((section, sectionIdx) => (
                                            <Box
                                                key={sectionIdx}
                                                sx={{ ml: 3 }}
                                            >
                                                <ListItemButton onClick={() => {
                                                    setSectionCollapse(courseIdx, sectionIdx)
                                                }}>
                                                    <Typography>{section.name}</Typography>
                                                </ListItemButton>
                                                {/*list of lessons */}
                                                <LessonCollapse
                                                    course={course}
                                                    section={section}
                                                    collapseState={collapses[courseIdx].sections[sectionIdx].collapse}
                                                />
                                            </Box>
                                        ))
                                    }
                                </Collapse>
                            </Box>
                        ))}
                    </List>
                </Box>
            </Box>
        </ThemeContainer>
    )
}

function LessonCollapse({ section, collapseState, course }: { section: CourseSection, collapseState: boolean, course: Course }) {
    return (
        <Collapse in={collapseState === true}>
            {
                section.lessons.map((lesson, lessonIdx) => (
                    <Box
                        key={lessonIdx}
                        sx={{ ml: 3 }}
                    >
                        <Text.DescLink
                            icon={<Book />}
                            link={getLessonRoute(course.pathName, section.id, lesson.id)}
                            title={lesson.name}
                            description={lesson.description}
                        />
                    </Box>
                ))
            }
        </Collapse>
    )
}