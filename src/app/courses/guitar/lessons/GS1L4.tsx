import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonBox, LessonContainer, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/widgets";
import QuestionModal, { QuestionModalButton, neckQuestion, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { guitarS1L4Questions, guitarS1L4Questions_2 } from "../questions/guitarS1Questions";

export default function ({ title }: LessonComponent) {
    const questionModal = useQuestionModal()
    const questionModal2 = useQuestionModal()
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="Notas musicales en el mastil" />
                <LessonParagraph text="En un inicio es recomendable poder ubicar las notas en las cuerdas al aire y por lo menos la mayoria de los primeros trastes, en especial en las cuerdas graves, algo asi:" />
                <GuitarNeck
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 5], text: "La" },
                        { position: [6, 7], text: "Si" },
                        { position: [6, 8], text: "Do" },
                        { position: [5, 0], text: "La" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5, 5], text: "Re" },
                        { position: [5, 7], text: "Mi" },
                        { position: [4, 0], text: "Re" },
                        { position: [4, 2], text: "Mi" },
                        { position: [3, 0], text: "Sol" },
                        { position: [3, 2], text: "La" },
                        { position: [2, 0], text: "Si" },
                        { position: [2, 1], text: "Do" },
                        { position: [1, 0], text: "MI" },
                        { position: [1, 1], text: "Fa" },
                        { position: [1, 3], text: "Sol" },
                        { position: [1, 5], text: "La" },
                        { position: [1, 7], text: "Si" },
                        { position: [1, 8], text: "Do" },
                    ]}
                />
                <LessonParagraph text="No es necesario gastar memoria en memorizar todo, aqui algunos consejos:" />
                <LessonListItem text="Fijate que las notas de la ultima cuerda son las mismas que las de la primera cuerda" />
                <LessonListItem text="Si conoces al menos una nota de una cuerda, ya deberia poder conocer el resto, aparecen en orden, solo recuerda que entre cada nota hay 2 semitonos excepto entre Mi-Fa y Si-Do " />
                <LessonParagraph text="Si entendiste las lecciones anteriores deberias saber que los espacios pueden señalarse con sostenidos o bemoles, como quieras:" />
                <GuitarNeck
                    highlight={["Solb", "Lab", "Sib"]}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 2], text: "Solb" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 4], text: "Lab" },
                        { position: [6, 5], text: "La" },
                        { position: [6, 6], text: "Sib" },
                        { position: [6, 7], text: "Si" },
                        { position: [6, 8], text: "Do" },
                    ]}
                />
            </LessonBox>
            <LessonBox>
                <QuestionModal
                    open={questionModal2.showQuestionModal}
                    onClose={questionModal2.closeQuestionModal}
                    questions={guitarS1L4Questions_2}
                />
                <QuestionModalButton onClick={questionModal2.openQuestionModal}>
                    Inciar practica : Encontrar notas en el mastil
                </QuestionModalButton>
                <QuestionModal
                    open={questionModal.showQuestionModal}
                    onClose={questionModal.closeQuestionModal}
                    questions={guitarS1L4Questions} />
                <QuestionModalButton onClick={questionModal.openQuestionModal}>
                    Inciar Practica : Encontrar notas a partir de otras
                </QuestionModalButton>
            </LessonBox>
        </LessonContainer>
    )
}