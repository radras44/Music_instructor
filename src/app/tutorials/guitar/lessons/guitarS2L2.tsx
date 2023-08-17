import { GuitarNeck } from "@/components/guitar";
import { LessonBox, LessonContainer, LessonDivider, LessonParagraph, LessonTitle } from "@/components/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box, Divider } from "@mui/material";

export default function GuitarS2L2({ title }: LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="El intervalo de quinta justa cuenta con una distancia de 7 semitonos, este puede encontrarse en la siguiente ubicacion en el mastil:" />
                <LessonDivider>
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="5ta en Do"
                            rootNote="Do"
                            fretMarkers={[
                                { string: 5, fret: 3, text: "Do" },
                                { string: 4, fret: 5, text: "5" },
                            ]}
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="5ta en Mi"
                            rootNote="Mi"
                            fretMarkers={[
                                { string: 6, fret: 0, text: "Mi" },
                                { string: 5, fret: 2, text: "5" },
                            ]}
                        />
                    </Box>
                </LessonDivider>
            </LessonBox>
        </LessonContainer>
    )
}