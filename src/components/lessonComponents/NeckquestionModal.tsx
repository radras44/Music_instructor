import { Box, Button, ButtonProps, Card, Fade, Modal, Pagination, Paper, Typography } from "@mui/material";
import { ReactNode, useEffect, useState } from "react";
import { GuitarNeck } from "./guitarNeck";
import { Check, CheckCircle, Clear, HorizontalRule, OpenInFull } from "@mui/icons-material";
import { Hcontainer, defaultMargin, modal, modalContainer } from "@/styles/styles";
import { LParagraph, LSubtitle } from "./widgets";
import { neckQuestion, FretMarker } from "@/interfaces/baseInterfaces";

interface QuestionModalButtonProps extends ButtonProps {
    title: string
    questionNum: number
    description: string
}

export function QuestionModalButton({ onClick, title, questionNum, description }: QuestionModalButtonProps) {
    return (
        <Box sx={{
            display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Paper elevation={4} sx={{
                width: "70%"
            }}>
                <Button onClick={onClick} variant="text" color="success" sx={{
                    flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
                    p: 3, textTransform: "lowercase", gap: 1, width: "100%"
                }}>
                    <Typography variant="h6" sx={{ color: "success.main" }}>{title}</Typography>
                    <Typography variant="subtitle1" sx={{ color: "grey.300" }}>{description}</Typography>
                    <Typography
                        sx={{ fontSize: 12, color: "grey.400" }}
                        variant="caption"
                    >{questionNum} Items</Typography>

                </Button>

            </Paper>
        </Box>
    )
}

interface useQuestionModalReturn {
    showQuestionModal: boolean
    openQuestionModal: () => void
    closeQuestionModal: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    questions: neckQuestion[]
}

export function useNeckQuestionModal(questions: neckQuestion[]): useQuestionModalReturn {
    const [showQuestionModal, setShowQuestionModal] = useState<boolean>(false)
    function openQuestionModal() { setShowQuestionModal(true) }
    function closeQuestionModal() { setShowQuestionModal(false) }
    return { showQuestionModal, openQuestionModal, closeQuestionModal, questions }
}



interface QuestionModalProps {
    title: string
    description: string
    useObj: useQuestionModalReturn
}

interface QuestionParams {
    checkResult: boolean | null
    questionNumber: number
    finalized: boolean
}

const contentFadeTime = 300

export function NeckQuestionModal({ useObj, title, description }: QuestionModalProps) {
    const [testParams, setTestParams] = useState<QuestionParams>({
        checkResult: null,
        questionNumber: 0,
        finalized: false
    })
    const [currentQuestion, setCurrentQuestion] = useState<neckQuestion>(useObj.questions[0])
    const [selectedFrets, setSelectedFrets] = useState<FretMarker[]>([])
    const [showNeck, setShowNeck] = useState<boolean>(true)

    //fades
    const [iconFade, setIconFade] = useState<boolean>(true)
    const [contentFade, setContentFade] = useState<boolean>(true)

    function nextQuestion() {
        if (testParams.checkResult === true) {
            if (testParams.questionNumber < (useObj.questions.length - 1)) {
                let newQuestionNumber = testParams.questionNumber + 1
                setTestParams(prevParams => ({
                    ...prevParams,
                    questionNumber: newQuestionNumber,
                    checkResult: null,
                }));
                //ejecutar fade
                setCurrentQuestion(useObj.questions[newQuestionNumber])
                setSelectedFrets([])
            } else {
                setTestParams(prevState => ({ ...prevState, finalized: true }))
            }
        }
    }

    function check() {
        const selectedFretString = JSON.stringify(selectedFrets)

        //aplicar metodo de verificacion
        let result = currentQuestion.solutions.some((solution: FretMarker[]) => {
            return selectedFretString === JSON.stringify(solution);
        });
        if (currentQuestion.verificationMethod) {
            result = currentQuestion.verificationMethod(selectedFrets, currentQuestion.solutions)
        }

        //aplicar animacion para cambiar a la siguiente pregunta en caso de estar corracta
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

    if (useObj.questions.length > 0) {
        return (
            <Box>

                <QuestionModalButton
                    description={description}
                    questionNum={useObj.questions.length}
                    onClick={useObj.openQuestionModal}
                    title={title}
                />
                <Modal open={useObj.showQuestionModal} onClose={useObj.closeQuestionModal} sx={{ ...modal() }}>
                    <Box>
                        <Fade in={contentFade} timeout={contentFadeTime}>
                            {
                                testParams.finalized === true ?
                                    <Card
                                        elevation={5}
                                        sx={{ ...modalContainer(), minWidth: 600 }}>
                                        <CheckCircle color="success" fontSize="large" />
                                        <LSubtitle text={"Practica finalizada"} />
                                        <Button onClick={() => { useObj.closeQuestionModal({}, "backdropClick") }}>Cerrar</Button>
                                    </Card>
                                    :
                                    // renderizar cuestionario
                                    <Card elevation={5} sx={{ ...modalContainer() }}>
                                        <Box sx={{
                                            display: "flex", flexDirection: "column", alignItems: "center", gap: 2
                                        }}>
                                            <Pagination
                                                count={useObj.questions.length}
                                                page={testParams.questionNumber + 1}
                                                hideNextButton hidePrevButton
                                                color="success"
                                            />
                                            <LParagraph text={currentQuestion.question}/>
                                            {/* mastil */}
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
                                            {/* panel */}
                                            <Box sx={{
                                                ...Hcontainer(),
                                                gap: 4,
                                                justifyContent: "center",
                                                alignItems: "center",
                                                width: "100%",
                                            }}>
                                                <Button
                                                    sx={{
                                                        fontSize: 15,
                                                        pl: 4,
                                                        pr: 4,
                                                    }}
                                                    color={
                                                        testParams.checkResult === null ? "inherit" :
                                                            testParams.checkResult === true ? "success" : "error"
                                                    }
                                                    variant="contained"
                                                    onClick={check}>
                                                    Evaluar
                                                </Button>
                                                {/* check State icon */}
                                                <Fade in={iconFade} timeout={500}>
                                                    {
                                                        testParams.checkResult === null ? <HorizontalRule fontSize="medium" /> :
                                                            testParams.checkResult === true ? <Check fontSize="large" color="success" /> :
                                                                <Clear fontSize="large" color="error" />
                                                    }
                                                </Fade>
                                            </Box>
                                        </Box>
                                    </Card>
                            }
                        </Fade>
                    </Box >
                </Modal >
            </Box>
        )
    } else {
        return null
    }

}

