import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonContainer, LessonDivider, LessonParagraph, LessonBox, LessonSubtitle, LessonTitle, LessonAlert, LessonListItem } from "@/components/lessonComponents/widgets";
import QuestionModal, { QuestionModalButton, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box } from "@mui/material";
import { guitarS1L5Questions } from "../questions/guitarS1Questions";

export default function ({ title }: LessonComponent) {
    const { openQuestionModal, closeQuestionModal, showQuestionModal } = useQuestionModal()

    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="Estos son algunos ejemplo de como se reflejan los semitonos en la guitarra" />
                <LessonDivider>
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="1 semitonos desde Do"
                            fretMarkers={[
                                { position: [5, 3], text: "Do" },
                                { position: [5, 4], text: "Do#" }
                            ]}
                            highlight={["Do#"]}
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="2 semitonos desde Do"
                            fretMarkers={[
                                { position: [5, 3], text: "Do" },
                                { position: [5, 5], text: "Re" }
                            ]}
                            highlight={["Re"]}
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="3 semitonos desde Fa"
                            fretMarkers={[
                                { position: [6, 1], text: "Fa" },
                                { position: [6, 4], text: "Sol#" }
                            ]}
                            highlight={["Sol#"]}
                        />
                        <GuitarNeck
                            neckRange={[0, 5]}
                            label="5 semitonos desde Mi"
                            fretMarkers={[
                                { position: [6, 0], text: "Mi" },
                                { position: [6, 5], text: "La" }
                            ]}
                            highlight={["La"]}
                        />
                    </Box>
                </LessonDivider>
            </LessonBox>
            <LessonBox>
                <LessonSubtitle text="Usar las demas cuerdas" />
                <LessonAlert text="Es estrictamente necesario poder ubicar las notas en el mastil de la guitarra, almenos en los primeros trastes de cada cuerda" />
                <LessonParagraph text="para encontrar la mismas distancia pero en otra cuerda seguiremos unos cuantos pasos" />
                <LessonDivider>
                    <LessonListItem text="calcular la distancia (por ejemplo 5 semitonos desde la nota Mi)" />
                    <LessonListItem text="mirar a que nota corresponde el traste donde cayo el calculo (en este caso seria La)" />
                    <LessonListItem text="buscar esa nota pero en otra cuerda" />
                    <LessonSubtitle text="Ejemplos:" />
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            label="5 semitonos desde Mi"
                            neckRange={[0, 5]}
                            highlight={["La"]}
                            fretMarkers={[
                                { position: [6, 0], text: "Mi" },
                                { position: [6, 5], text: "La" }
                            ]}
                        />
                        <GuitarNeck
                            label="5 semitonos desde Mi pero en la cuerda 5"
                            neckRange={[0, 5]}
                            highlight={["La"]}
                            fretMarkers={[
                                { position: [6, 0], text: "Mi" },
                                { position: [5, 0], text: "La" }
                            ]}
                        />
                        <GuitarNeck
                            label="3 semitonos desde Fa#"
                            neckRange={[0, 5]}
                            highlight={["La"]}
                            fretMarkers={[
                                { position: [6, 2], text: "Fa#" },
                                { position: [6, 5], text: "La" }
                            ]}
                        />
                        <GuitarNeck
                            label="3 semitonos desde Fa# pero desde otra cuerda"
                            neckRange={[0, 5]}
                            highlight={["La"]}
                            fretMarkers={[
                                { position: [6, 2], text: "Fa#" },
                                { position: [5, 0], text: "La" }
                            ]}
                        />
                    </Box>
                </LessonDivider>
            </LessonBox>
            <LessonBox>
                <QuestionModal
                    open={showQuestionModal}
                    onClose={closeQuestionModal}
                    questions={guitarS1L5Questions}
                />
                <QuestionModalButton onClick={openQuestionModal}/>
            </LessonBox>
        </LessonContainer>
    )
}