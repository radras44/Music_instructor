import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import QuestionModal, { QuestionModalButton, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer, Vcontainer } from "@/styles/styles";
import { Box } from "@mui/material";
import { guitarS2L3Questions_5, guitarS2L3Questions_8 } from "./questions/guitarS2Questions";

export default function GuitarS2L3({ title }: LessonComponent) {
    const questionModal8 = useQuestionModal()
    const questionmodal5 = useQuestionModal()
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="8va justa" />
                <LessonListItem text="Su nomenclatura es '8'" />
                <LessonListItem text="Vale 12 semitonos" />
                <LessonListItem text="Lo anterior hace que caiga en la misma nota que la fundamental" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Fa"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [6, 1], text: "Fa" },
                            { position: [4, 3], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Si"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [5, 2], text: "Si" },
                            { position: [3, 4], text: "8" }
                        ]}
                    />
                </Box>
                <LessonParagraph text="Al ser la misma nota, podemos aplicar esta misma figura, pero al revés" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Fa"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [6, 1], text: "8" },
                            { position: [4, 3], text: "Fa" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Si"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [5, 2], text: "8" },
                            { position: [3, 4], text: "Si" }
                        ]}
                    />
                </Box>
                <LessonAlert severity="info" text="Debes quedarte con cómo se siente y cómo se ve el intervalo en la guitarra, ya que como puedes apreciar, es la misma figura da igual donde lo hagas, al menos en las primeras 4 cuerdas" />
                <LessonParagraph text="Si miramos la afinación estándar de la guitarra, veremos que hay un Mi tanto en la primera cuerda como en la sexta, por lo que ahí también hay una octava" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Mi"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [1, 0], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="8va en Sol"
                        highlight={["8"]}
                        fretMarkers={[
                            { position: [6, 3], text: "Sol" },
                            { position: [1, 3], text: "8" }
                        ]}
                    />
                </Box>
                <QuestionModal
                open={questionModal8.showQuestionModal}
                onClose={questionModal8.closeQuestionModal}
                questions={guitarS2L3Questions_8}
                />
                <QuestionModalButton 
                onClick={questionModal8.openQuestionModal}
                >Iniciar practica de octavas</QuestionModalButton>
            </LessonBox>
            <LessonBox>
                <LessonSubtitle text="5ta justa" />
                <LessonListItem text="Su nomenclatura es '5'" />
                <LessonListItem text="Vale 7 semitonos" />
                <LessonParagraph text="La posición más básica de una quinta justa es muy similar a la posición más básica de una octava:" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="5ta en La"
                        highlight={["5"]}
                        fretMarkers={[
                            { position: [5, 0], text: "La" },
                            { position: [4, 2], text: "5" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="5ta en Sol"
                        highlight={["5"]}
                        fretMarkers={[
                            { position: [6, 3], text: "Sol" },
                            { position: [5, 5], text: "5" }
                        ]}
                    />
                </Box>
                <LessonParagraph text="Ahora bien, antes de seguir me gustaría explicarte una forma de encontrar otras posiciones de un mismo intervalo sin necesidad de fijarte en las notas ni nada" />
                <LessonParagraph text="Para esto usaremos la el intervalo de octava, pero se lo aplicaremos a la quinta (pero sirve también para cualquier otro intervalo)" />
                <Box sx={{ ...Hcontainer(), flexWrap: "nowrap" }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="5ta en Do"
                        highlight={["5"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" },
                            { position: [6, 3], text: "5" }
                        ]}
                    />
                    <Box sx={{ ...Vcontainer() }}>
                        <LessonListItem text="Fíjate que hemos hecho una quinta desde Do" />
                        <LessonListItem text="Luego hemos hecho una octava DESDE LA QUINTA de Do" />
                        <LessonListItem text="Entonces obtuvimos una nueva quinta, ya que al hacer la octava desde la quinta de Do obtendremos lo mismo, osea, otra quinta de Do" />
                    </Box>
                </Box>
                <LessonParagraph text="Esta nueva posición es incluso más sencilla de hacer y recordar que la anterior" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="5ta en Do"
                        highlight={["5"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [6, 3], text: "5" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        label="5ta en Si"
                        highlight={["5"]}
                        fretMarkers={[
                            { position: [5, 2], text: "Si" },
                            { position: [6, 2], text: "5" },
                        ]}
                    />
                </Box>
                <QuestionModal
                open={questionmodal5.showQuestionModal}
                onClose={questionmodal5.closeQuestionModal}
                questions={guitarS2L3Questions_5}
                />
                <QuestionModalButton
                onClick={questionmodal5.openQuestionModal}
                >Iniciar practica de quintas</QuestionModalButton>
            </LessonBox>
        </LessonContainer>
    );    
}