import { GuitarNeck } from "@/components/guitar";
import { LessonContainer, LessonDivider, LessonParagraph, LessonBox, LessonSubtitle, LessonTitle } from "@/components/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box } from "@mui/material";

export default function GuitarS1L2({ title }: LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="Estos son algunos ejemplo de calcular semitonos pero en la guitarra" />
                <LessonDivider>
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="1 semitonos desde Do"
                            fretMarkers={[
                                { string: 5, fret: 3, text: "Do" },
                                { string: 5, fret: 4, text: "Do#" }
                            ]}
                            rootNote="Do"
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="2 semitonos desde Do"
                            fretMarkers={[
                                { string: 5, fret: 3, text: "Do" },
                                { string: 5, fret: 5, text: "Re" }
                            ]}
                            rootNote="Do"
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="3 semitonos desde Fa"
                            fretMarkers={[
                                { string: 6, fret: 1, text: "Fa" },
                                { string: 6, fret: 4, text: "Sol#" }
                            ]}
                            rootNote="Fa"
                        />

                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="5 semitonos desde Mi"
                            fretMarkers={[
                                { string: 6, fret: 0, text: "Mi" },
                                { string: 6, fret: 5, text: "La" }
                            ]}
                            rootNote="1"
                        />
                    </Box>

                </LessonDivider>
            </LessonBox>
        </LessonContainer>
    )
}