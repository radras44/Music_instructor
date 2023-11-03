import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonDivider,LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/widgets";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { LessonIndicator } from "@/components/lessonComponents/indicator";
import { Hcontainer } from "@/styles/styles";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";
import QuestionModal, { QuestionModalButton, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { guitarS2L5Questions } from "../questions/guitarS2Questions";

const notes = ["A","B","C","D","E","F","G"]
const notesInSpanish = ["La","Si","Do","Re","Mi","Fa","Sol"]
const questions = guitarS2L5Questions
export default function ({ title }: LessonComponent) {
    const questionModal = useQuestionModal()
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="Un acorde es una estructura que tiene que cumplir con los siguientes requisitos"/>
                <LessonListItem text="Debe contar con una fundamental (nota raíz)"/>
                <LessonListItem text="Debe tener al menos 2 notas distintas (el intervalo de octava no cuenta porque es la misma nota que la fundamental)"/>
                <LessonParagraph text="Según esta definición podríamos usar una fundamental y su quinta"/>
                <LessonIndicator align="center" customList={["1","5"]}/>
                <LessonParagraph text="Esto ya sería un acorde, puede que se parezca a lo mismo que antes, o sea, en este caso sería igual que tocar quintas, pero el enfoque es distinto, yo podría agregar más intervalos a esta fórmula y crear estructuras más complejas, pero por ahora lo haremos simple, para que la mente digiera la idea poco a poco. " />
                <LessonParagraph text="Una vez con nuestra fórmula, podemos armar el acorde de distintas maneras, por ejemplo:" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" }
                        ]}
                        rootNote="Do"
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" },
                            { position: [3, 5], text: "8" }
                        ]}
                        rootNote="Do"
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "5" },
                            { position: [5, 3], text: "Do" }
                        ]}
                        rootNote="Do"
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "5" },
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" }
                        ]}
                        rootNote="Do"
                    />
                </Box>
                <LessonParagraph text="Cada una de estas formas distintas de hacer el mismo acorde se denomina 'voicing'"/>
                <LessonParagraph text="Voicing viene de voces, ya que cada nota (da igual si se repite) es una voz, la guitarra tiene 6 cuerdas, por lo que podemos llegar a hacer acordes de hasta 6 voces, aunque en este caso solo hicimos voicings de 2 y 3 voces."/>
            </LessonBox>
            <LessonBox>
                <LessonSubtitle text="Cifrado Americano"/>
                <LessonParagraph text="El cifrado americano no es nada más que una forma estandarizada de cifrar los acordes, porque no es nada cómodo leer acordes en una canción si estos se llaman: 'Mi menor 7 con bajo en si' o nombres similares."/>
                <LessonParagraph text="Aunque esta es solo una introducción, algo que debes aprender ya, es a leer las notas en inglés, puesto que será lo que casi siempre te encontrarás. Cuando hacemos un acorde, este acorde comenzará con el nombre de su nota fundamental. En inglés, las notas se nombran de esta manera:"/>
                <LessonDivider>
                    <TableContainer sx={{ width: 500 }}>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell width={25}>Nota</TableCell>
                                    <TableCell width={25}>En cifrado americano</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {notes.map((note, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{notesInSpanish[index]}</TableCell>
                                        <TableCell>{note}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </LessonDivider>
                <QuestionModal
                open={questionModal.showQuestionModal}
                onClose={questionModal.closeQuestionModal}
                questions={questions}
                />
                <QuestionModalButton onClick={questionModal.openQuestionModal}>
                    Iniciar practica: Cifrado americano
                </QuestionModalButton>
            </LessonBox>
        </LessonContainer>
    )
    
}