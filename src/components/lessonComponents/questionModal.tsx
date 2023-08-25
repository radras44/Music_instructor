import { Box, Button, ButtonProps, Card, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FretMarkerPosition, GuitarNeck } from "./guitar";
import { NextPlan, OpenInFull, Widgets } from "@mui/icons-material";
import { defaultMargin } from "@/styles/styles";
import { LessonSubtitle, LessonTitle } from "./lessonComponents";

export function QuestionModalButton({ children, onClick }: ButtonProps) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            mt: defaultMargin,
            mb: defaultMargin
        }}>
            <Button startIcon={<OpenInFull />} onClick={onClick} variant="text" color="success" sx={{
                fontWeight: 600,
            }}>{children}</Button>
        </Box>
    )
}

export function useQuestionModal() {
    const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false)
    function openQuestionModal() { setShowQuestionModal(true) }
    function closeQuestionModal() { setShowQuestionModal(false) }
    return { showQuestionModal, openQuestionModal, closeQuestionModal }
}

export interface neckQuestion {
    question: string,
    solutions: FretMarkerPosition[][]
}

interface QuestionModalProps {
    open: boolean
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
    questions: neckQuestion[]
}

interface QuestionParams {
    checkResult: boolean | null
    questionNumber: number
    finalized: boolean
}

export default function QuestionModal({ open, onClose, questions }: QuestionModalProps) {
    const [testParams, setTestParams] = useState<QuestionParams>({
        checkResult: null,
        questionNumber: 0,
        finalized: false
    })
    const [currentQuestion, setCurrentQuestion] = useState<neckQuestion>(questions[0])
    const [selectedFrets, setSelectedFrets] = useState<FretMarkerPosition[]>([])

    function nextQuestion() {
        if (testParams.checkResult === true) {
            if (testParams.questionNumber < (questions.length - 1)) {
                let newQuestionNumber = testParams.questionNumber + 1
                setTestParams(prevParams => ({
                    ...prevParams,
                    questionNumber: newQuestionNumber,
                    checkResult: null,
                }));
                setCurrentQuestion(questions[newQuestionNumber])
                setSelectedFrets([])
            } else {
                setTestParams(prevState => ({ ...prevState, finalized: true }))
            }
        }
    }

    function check() {
        if (selectedFrets.length === 0) {
            // No hacer nada si no hay elementos
            return;
        }
    
        const selectedFretString = JSON.stringify(selectedFrets);
    
        const result = currentQuestion.solutions.some((solution: FretMarkerPosition[]) => {
            return selectedFretString === JSON.stringify(solution);
        });
    
        setTestParams({
            ...testParams,
            checkResult: result,
        });
    }

    return (
        <Modal open={open} onClose={onClose} sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            height: "100vh"
        }}>
            {
                testParams.finalized === true ?
                    //renderizar mensaje de finalizacion
                    <Card
                        elevation={5}
                        sx={{
                            maxWidth: "90vw",
                            maxHeight: "90vh",
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "center",
                            p: 3
                        }}>
                        <LessonTitle title={"Cuestionario finalizado"} />
                        <Button onClick={() => { onClose({}, "backdropClick") }}>Cerrar</Button>
                    </Card>
                    :
                    // renderizar cuestionario
                    <Card sx={{
                        maxWidth: "90vw",
                        maxHeight: "90vh",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        p: 2
                    }}>
                        {
                            <Box>
                                <LessonSubtitle text={currentQuestion.question} />
                            </Box>
                        }
                        <Box>
                            <GuitarNeck
                                allowAdd={true}
                                setWhenAddMarker={setSelectedFrets}
                                resetEmit={currentQuestion}
                            />
                        </Box>
                        <Box>
                            <Button
                            sx={{
                                m:defaultMargin,
                                fontSize : 18,
                                pl :4,
                                pr : 4
                                
                            }}
                            color={
                                testParams.checkResult === null ?
                                "primary" :
                                testParams.checkResult === true ?
                                "success" :
                                "error"
                            }
                                variant="outlined"
                                onClick={check}>
                                Evaluar
                            </Button>
                            <Button
                            color="success"
                                 sx={{
                                    m:defaultMargin,
                                    fontSize : 18,
                                    pl :4,
                                    pr : 4,
                                    fontWeight : 600,
                                    backgroundColor : "success.main"
                                }}
                                startIcon ={<NextPlan/>}
                                variant="contained"
                                disabled={testParams.checkResult === true ? false : true}
                                onClick={nextQuestion}>
                                Siguiente
                            </Button>
                        </Box>
                    </Card>
            }
        </Modal>
    )
}

