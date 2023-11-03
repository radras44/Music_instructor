import { Box, Button, ButtonProps, Card, Fade, Modal, Typography } from "@mui/material";
import { useEffect, useState } from "react";
import { FretMarkerPosition, GuitarNeck } from "./guitar";
import { Check, CheckBoxOutlineBlank, CheckBoxSharp, CheckCircle, CheckCircleOutline, Clear, HorizontalRule, OpenInFull } from "@mui/icons-material";
import { Hcontainer, defaultMargin, modal, modalContainer } from "@/styles/styles";
import { LessonParagraph, LessonSubtitle } from "./widgets";

export function QuestionModalButton({ onClick,children }: ButtonProps) {
    return (
        <Box sx={{
            display: "flex",
            justifyContent: "center",
            flexDirection: "row",
            mt: defaultMargin,
            mb: defaultMargin,
            width: "100%",
        }}>
            <Button startIcon={<OpenInFull />} onClick={onClick} variant="text" color="success" sx={{
                fontWeight: 600,
                minWidth: "100%",
                p: 2
            }}>{
                children ? children : "Inicar practica"
            }</Button>
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
    solutions: FretMarkerPosition[][],
    defaultMarkers?: FretMarkerPosition[]
    verificationMethod? : (response : FretMarkerPosition[] ,solutions : FretMarkerPosition[][]) => boolean
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

const contentFadeTime = 300

export default function QuestionModal({ open, onClose, questions }: QuestionModalProps) {
    const [testParams, setTestParams] = useState<QuestionParams>({
        checkResult: null,
        questionNumber: 0,
        finalized: false
    })
    const [currentQuestion, setCurrentQuestion] = useState<neckQuestion>(questions[0])
    const [selectedFrets, setSelectedFrets] = useState<FretMarkerPosition[]>([])
    const [showNeck, setShowNeck] = useState<boolean>(true)

    //fades
    const [iconFade, setIconFade] = useState<boolean>(true)
    const [contentFade, setContentFade] = useState<boolean>(true)

    function nextQuestion() {
        if (testParams.checkResult === true) {
            if (testParams.questionNumber < (questions.length - 1)) {
                let newQuestionNumber = testParams.questionNumber + 1
                setTestParams(prevParams => ({
                    ...prevParams,
                    questionNumber: newQuestionNumber,
                    checkResult: null,
                }));
                //ejecutar fade
                setCurrentQuestion(questions[newQuestionNumber])
                setSelectedFrets([])
            } else {
                setTestParams(prevState => ({ ...prevState, finalized: true }))
            }
        }
    }

    function check() {
        const selectedFretString = JSON.stringify(selectedFrets);

        let result = currentQuestion.solutions.some((solution: FretMarkerPosition[]) => {
            return selectedFretString === JSON.stringify(solution);
        });
        if(currentQuestion.verificationMethod){
            result = currentQuestion.verificationMethod(selectedFrets,currentQuestion.solutions)
        }

        setIconFade(false);
        setTimeout(() => {
            setIconFade(true);
        }, 10);

        setTestParams({
            ...testParams,
            checkResult: result,
        });
    }

    useEffect(() => {
        if (testParams.checkResult === true) {
            const animateTransition = async () => {
                await new Promise((resolve) => setTimeout(resolve, 400))
                setContentFade(false);

                await new Promise((resolve) => setTimeout(resolve, contentFadeTime));

                setShowNeck(false);
                nextQuestion();

                await new Promise((resolve) => setTimeout(resolve, 100));

                setShowNeck(true);
                setContentFade(true);
            };

            animateTransition();
        }
    }, [testParams.checkResult]);

    if (questions.length > 0) {
        return (
            <Modal open={open} onClose={onClose} sx={{ ...modal() }}>
                <Box>
                    <Fade in={contentFade} timeout={contentFadeTime}>
                        {

                            testParams.finalized === true ?
                                <Card
                                    elevation={5}
                                    sx={{ ...modalContainer(), minWidth : 600 }}>
                                        <CheckCircle color="success" fontSize="large"/>
                                    <LessonSubtitle text={"Practica finalizada"} />
                                    <Button onClick={() => { onClose({}, "backdropClick") }}>Cerrar</Button>
                                </Card>
                                :
                                // renderizar cuestionario
                                <Card elevation={5}
                                    sx={{ ...modalContainer() }}
                                >
                                    <Box
                                    sx={{m:2}}
                                    >
                                        <Typography variant="h6">{currentQuestion.question}</Typography>
                                    </Box>
                                    <Box>
                                        {
                                            showNeck ?

                                                <GuitarNeck
                                                    allowAdd={true}
                                                    setWhenAddMarker={setSelectedFrets}
                                                    fretMarkers={
                                                        currentQuestion.defaultMarkers ?
                                                            currentQuestion.defaultMarkers : []
                                                    }
                                                />

                                                : null
                                        }
                                    </Box>
                                    <Box sx={{
                                        ...Hcontainer(),
                                        justifyContent: "center",
                                        alignItems: "center",
                                        width: "100%",
                                    }}>
                                        <Button
                                            sx={{
                                                m: 1,
                                                fontSize: 18,
                                                pl: 4,
                                                pr: 4,
                                            }}
                                            color={
                                                testParams.checkResult === null ? "primary" :
                                                    testParams.checkResult === true ? "success" : "error"
                                            }
                                            variant="text"
                                            onClick={check}>
                                            Evaluar
                                        </Button>
                                        {/* check State icon */}
                                        <Fade in={iconFade} timeout={500}>
                                            {
                                                testParams.checkResult === null ? <HorizontalRule fontSize="large" /> :
                                                    testParams.checkResult === true ? <Check fontSize="large" color="success" /> :
                                                        <Clear fontSize="large" color="error" />
                                            }
                                        </Fade>
                                    </Box>
                                </Card>
                        }
                    </Fade>
                </Box >
            </Modal >
        )
    } else {
        return null
    }

}

