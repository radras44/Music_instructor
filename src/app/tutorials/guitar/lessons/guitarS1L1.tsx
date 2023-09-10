import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonBox, LessonContainer, LessonDivider, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import QuestionModal, { QuestionModalButton, neckQuestion, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box } from "@mui/material";
import { guitarS1L1Questions } from "./questions/guitarS1Questions";

const questions : neckQuestion[] = guitarS1L1Questions

export default function GuitarS1L1({ title }: LessonComponent) {
    const questionModal = useQuestionModal()
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="Lectura de diagramas" />
                <LessonParagraph text="La guitarrra convencionalmente tiene 6 cuerdas y de 20 a 24 trastes, hay que tener varias cosas claras antes de intentar interpretar cualquier diagrama de mastil:" />

                <LessonListItem text="Las cuerdas se cuentan desde la mas aguda a la mas grave, no alrrevez, osea que la cuerda mas fina es la numero 1, y la cuerda mas grave es numero 6" />
                <LessonListItem text="Los trastes se enumeran de izquierda a derecha" />

                <LessonParagraph text="Aqui tienes una plantilla de diagrama donde se indican las cuerdas y trastes para que quede mas claro:" />
                <GuitarNeck
                    fretMarkers={[
                        { position: [6, 0], text: "6" },
                        { position: [5, 0], text: "5" },
                        { position: [4, 0], text: "4" },
                        { position: [3, 0], text: "3" },
                        { position: [2, 0], text: "2" },
                        { position: [1, 0], text: "1" },
                    ]}
                />
                <LessonDivider>
                    <LessonListItem text="Al hacer indicaciones sobre alguna posicion, uno tiene que mencionar tanto la cuerda como el traste en cuestion" />
                    <LessonParagraph text="Ejemplos:" />
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            label="cuerda 6 traste 3"
                            neckRange={[0, 5]}
                            fretMarkers={[{position:[6,3]}]}
                        />
                        <GuitarNeck
                            label="cuerda 1 traste 2"
                            neckRange={[0, 5]}
                            fretMarkers={[{position:[1,2]}]}
                        />
                    </Box>
                </LessonDivider>
                <LessonDivider>
                    <LessonListItem text="En caso de tocar la cuerda sin presionar ningun traste, se dice que esta siendo tocada al aire" />
                    <LessonParagraph text="Ejemplos:" />
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            label="cuerda 6 al aire"
                            neckRange={[0, 5]}
                            fretMarkers={[{position:[6,0]}]}
                        />
                        <GuitarNeck
                            label="cuerda 5 al aire"
                            neckRange={[0, 5]}
                            fretMarkers={[{position:[5,0]}]}
                        />
                    </Box>
                </LessonDivider>
                <LessonDivider>
                    <LessonListItem text="Siempre debes fijarte en el rango de trastes que esta representando el diagrama, en caso contrario podrias estar interpretando todo mal:" />
                    <Box sx={{ ...Hcontainer() }}>
                        <GuitarNeck
                            label="diagrama con trastes del 1 al 5"
                            neckRange={[0, 5]}
                        />
                        <GuitarNeck
                            label="diagrama con trastes del 4 al 9"
                            neckRange={[4, 9]}
                        />
                    </Box>
                </LessonDivider>
                <QuestionModal 
                questions={questions} 
                open={questionModal.showQuestionModal} 
                onClose={questionModal.closeQuestionModal}/>
                <QuestionModalButton onClick={questionModal.openQuestionModal}>
                    Iniciar practica : Señalar en el mastil
                </QuestionModalButton>
            </LessonBox>
        </LessonContainer>
    )
}