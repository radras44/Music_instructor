import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonDivider, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import { LessonIndicator } from "@/components/lessonComponents/lessonIndicator";
import QuestionModal, { QuestionModalButton, useQuestionModal } from "@/components/lessonComponents/questionModal";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material";
import { guitarS2L6Questions_triads } from "./questions/guitarS2Questions";

export default function GuitarS2L6({ title }: LessonComponent) {
    const questionModal_triads = useQuestionModal()
    const intervals = [
        { name: "Tercera mayor", semitones: 4, nomenclature: "3" },
        { name: "Tercera menor", semitones: 3, nomenclature: "b3" }
    ]
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="Intervalos de tercera" />
                <LessonDivider>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Intervalo</TableCell>
                                    <TableCell>Semitonos</TableCell>
                                    <TableCell>Nomenclatura</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {intervals.map((interval, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{interval.name}</TableCell>
                                        <TableCell>{interval.semitones}</TableCell>
                                        <TableCell>{interval.nomenclature}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </LessonDivider>
                <LessonParagraph text="En todos los intervalos del estilo 'mayor-menor', no es necesario que memorices el intervalo menor como tal, porque con conocer el intervalo mayor ya puedes ubicar el menor, después de todo, está solo a un semitono mas grave." />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra mayor en Do"
                        neckRange={[0, 5]}
                        highlight={["3"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 2], text: "3" }
                        ]}
                    />
                    <GuitarNeck
                        label="3ra mayor en Lab"
                        neckRange={[0, 5]}
                        highlight={["3"]}
                        fretMarkers={[
                            { position: [6, 4], text: "Lab" },
                            { position: [5, 3], text: "3" }
                        ]}
                    />
                </Box>
                <LessonParagraph text="Otra posición podría ser usar una 3ra mayor pero más aguda" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra mayor en Do"
                        neckRange={[0, 5]}
                        highlight={["3"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [2, 5], text: "3" }
                        ]}
                    />
                    <GuitarNeck
                        label="3ra mayor en Lab"
                        neckRange={[0, 5]}
                        highlight={["3"]}
                        fretMarkers={[
                            { position: [6, 4], text: "Lab" },
                            { position: [3, 5], text: "3" }
                        ]}
                    />
                </Box>
                <LessonAlert severity="warning" text="Ten en cuenta que en este ultimo ejemplo varía un poco la disposicion debido a la imperfección entre la afinación de las cuerdas 2 y 3, para más información vuelve a visitar la lección anterior." />
    
                <LessonParagraph text="Para encontrar la 3ra menor solo hay que bajar un semitono una tercera mayor, basandose en las posiciones mostradas anteiorment, estos serian los resultados:" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor en Do"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 1], text: "b3" }
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor en Lab"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [6, 4], text: "Lab" },
                            { position: [5, 2], text: "b3" }
                        ]}
                    />
                </Box>
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor en Do"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [2, 4], text: "b3" }
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor en Lab"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [6, 4], text: "Lab" },
                            { position: [3, 4], text: "b3" }
                        ]}
                    />
                </Box>
            </LessonBox>
    
            <LessonBox>
                <LessonSubtitle text="Acordes Triada" />
                <LessonParagraph text="Los acordes triada se refieren a acordes formados por 3 notas distintas. Con la adición de las terceras podemos formar dos tipos de acordes triada" />
                <LessonSubtitle text="Acordes mayores" />
                <LessonListItem text="Se cifran simplemente poniendo la fundamental">
                    <Typography color="text.secondary">{"Por ejemplo => C - G - Eb - F#..."}</Typography>
                </LessonListItem>
                <LessonListItem text="Se llaman así debido a que poseen una 3ra mayor en su estructura" />
                <LessonIndicator customList={["1", "3", "5"]} align="center" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="C"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" },
                            { position: [2, 5], text: "3" }
                        ]}
                        rootNote="Do"
                    />
                    <GuitarNeck
                        label="G"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "Sol" },
                            { position: [5, 5], text: "5" },
                            { position: [3, 4], text: "3" }
                        ]}
                        rootNote="Sol"
                    />
                    <GuitarNeck
                        label="Bb"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 1], text: "5" },
                            { position: [5, 1], text: "Sib" },
                            { position: [4, 0], text: "3" }
                        ]}
                        rootNote="Sib"
                    />
                    <GuitarNeck
                        label="C"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "5" },
                            { position: [5, 3], text: "Do" },
                            { position: [4, 2], text: "3" }
                        ]}
                        rootNote="Do"
                    />
                </Box>
    
                <LessonSubtitle text="Acordes menores" />
                <LessonListItem text="Se cifran simplemente anotando su fundamental y una 'm' delante">
                    <Typography color="text.secondary">{"Por ejemplo => Cm - Gm - Ebm - F#m..."}</Typography>
                </LessonListItem>
                <LessonListItem text="Se llaman así debido a que poseen una 3ra menor en su estructura" />
                <LessonIndicator customList={["1", "b3", "5"]} align="center" />
                <LessonAlert severity="info" text="En este caso son exactamente los mismos voicings, solo que la tercera se baja un semitono, porque es b3"/>
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="C"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" },
                            { position: [2, 4], text: "b3" }
                        ]}
                        rootNote="Do"
                    />
                    <GuitarNeck
                        label="G"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "Sol" },
                            { position: [5, 5], text: "5" },
                            { position: [3, 3], text: "b3" }
                        ]}
                        rootNote="Sol"
                    />
                    <GuitarNeck
                        label="B"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 2], text: "5" },
                            { position: [5, 2], text: "Si" },
                            { position: [4, 0], text: "b3" }
                        ]}
                        rootNote="Si"
                    />
                    <GuitarNeck
                        label="C"
                        neckRange={[0, 5]}
                        fretMarkers={[
                            { position: [6, 3], text: "5" },
                            { position: [5, 3], text: "Do" },
                            { position: [4, 1], text: "b3" }
                        ]}
                        rootNote="Do"
                    />
                </Box>
                <QuestionModal
                    open={questionModal_triads.showQuestionModal}
                    onClose={questionModal_triads.closeQuestionModal}
                    questions={guitarS2L6Questions_triads}
                />
                <QuestionModalButton
                onClick={questionModal_triads.openQuestionModal}
                >
                    Iniciar practica: Triadas menor y mayores 
                </QuestionModalButton>
            </LessonBox>
        </LessonContainer>
    )    
}