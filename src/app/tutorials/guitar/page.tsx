"use client"
import { OListItem } from "@/components/listComponentes";
import { TutorialSection } from "@/interfaces/baseInterfaces";
import { Grid, Box, List, ThemeProvider } from "@mui/material";
import { Book } from "@mui/icons-material";
import { getLessonId } from "@/utils/lessonUtils";
import { guitarSections } from "./lessons/guitarLessons";
import ThemeContainer from "@/components/themes";


export default function GuitarTutorials() {
    const lessonSections: TutorialSection[] = guitarSections

    return (
        <ThemeContainer maxWidth="lg">
            <Grid container>
                <Grid item xs={12}>
                    {lessonSections.map((section, index) => (
                        <List key={index}>
                            {section.lessons.map((lesson, index) => (
                                <OListItem
                                    lessonId={{ course: "guitar", lessonId: getLessonId(section.sectionNumber, lesson.lessonNumber) }}
                                    icon={<Book />}
                                    key={index}
                                    link={`/tutorials/guitar/lessons`}
                                    title={lesson.name}
                                    description={lesson.description}
                                />
                            ))}
                        </List>
                    ))}
                </Grid>
            </Grid>
        </ThemeContainer>
    )
}