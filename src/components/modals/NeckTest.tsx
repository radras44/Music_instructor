import { neckTestQuestion, FretMarker } from "@/interfaces/baseInterfaces"
import MuiModal from "@mui/material/Modal"
import { CheckCircle, HorizontalRule, Check, Clear } from "@mui/icons-material"
import { ButtonProps, Box, Paper, Button, Typography, Fade, Card, Pagination } from "@mui/material"
import { useState, useEffect, CSSProperties } from "react"
import Guitar from "../Guitar"
import styles from "@/styles/styles"
import {useTheme} from "@mui/material/styles"

interface TestModalButtonProps extends ButtonProps {
    title: string
    questionNum: number
    description: string
}

function TestButton({ onClick, title, questionNum, description }: TestModalButtonProps) {
    const theme = useTheme()
    const titleStyles: CSSProperties = {
        color : "success.main",
        [theme.breakpoints.down("md")] : {fontSize : 14}
    }
    const DescStyles: CSSProperties = {
        color : "text.secondary",
        [theme.breakpoints.down("md")] : {fontSize : 12}
    }
    const itemNumberStyles: CSSProperties = {
        color : "grey.400",
        fontSize : 12,
        [theme.breakpoints.down("md")] : {fontSize : 10}
    } 
    const buttonStyles = {
        flex: 1, display: "flex", flexDirection: "column", alignItems: "center",
        p: 3, textTransform: "lowercase", gap: 1, width: "100%"
    }
    return (
        <Box sx={{
            display: "flex", flexDirection: "column", alignItems: "center"
        }}>
            <Paper elevation={4} sx={{
                width: "70%"
            }}>
                <Button onClick={onClick} variant="text" color="success" sx={buttonStyles}>
                    <Typography variant="h6" sx={titleStyles}>{title}</Typography>
                    <Typography variant="subtitle1" sx={DescStyles}>{description}</Typography>
                    <Typography
                        sx={itemNumberStyles}
                        variant="caption"
                    >{questionNum} Items</Typography>

                </Button>

            </Paper>
        </Box>
    )
}

interface useQuestionModalReturn {
    show: boolean
    open: () => void
    close: ((event: {}, reason: "backdropClick" | "escapeKeyDown") => void)
    questions: neckTestQuestion[]
}

function useModal(questions: neckTestQuestion[]): useQuestionModalReturn {
    const [show, setShow] = useState<boolean>(false)
    function open() { setShow(true) }
    function close() { setShow(false) }
    return { show, open, close, questions }
}




interface QuestionParams {
    checkResult: boolean | null
    questionNumber: number
    finalized: boolean
}

const contentFadeTime = 300
interface QuestionModalProps {
    title: string
    description: string
    useObj: useQuestionModalReturn
    hiddeFretNumbers? : boolean
}

function Modal({ useObj, title, description,hiddeFretNumbers }: QuestionModalProps) {
    const [testParams, setTestParams] = useState<QuestionParams>({
        checkResult: null,
        questionNumber: 0,
        finalized: false
    })
    const [currentQuestion, setCurrentQuestion] = useState<neckTestQuestion>(useObj.questions[0])
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

    return (
        <Box>
            <TestButton
                description={description}
                questionNum={useObj.questions.length}
                onClick={useObj.open}
                title={title}
            />
            <MuiModal open={useObj.show} onClose={useObj.close} >
                {
                    useObj.questions.length > 0 ?
                        <Box>
                            <Fade in={contentFade} timeout={contentFadeTime}>
                                {
                                    testParams.finalized === true ?
                                        <Card
                                            elevation={5}
                                            sx={{ ...styles.modalContent, minWidth: 600 }}>
                                            <CheckCircle color="success" fontSize="large" />
                                            <Typography variant="h6">Practica finalizada</Typography>
                                            <Button onClick={() => { useObj.close({}, "backdropClick") }}>Cerrar</Button>
                                        </Card>
                                        :
                                        // renderizar cuestionario
                                        <Card elevation={5} sx={styles.modalContent}>
                                            <Box sx={{
                                                display: "flex", flexDirection: "column", alignItems: "center", gap: 2
                                            }}>
                                                <Pagination
                                                    count={useObj.questions.length}
                                                    page={testParams.questionNumber + 1}
                                                    hideNextButton hidePrevButton
                                                    color="success"
                                                />
                                                <Typography variant="body1">{currentQuestion.question}</Typography>
                                                {/* mastil */}
                                                {
                                                    showNeck ?
                                                        <Guitar.NeckContainer>
                                                            <Guitar.Neck
                                                            hiddeFretNumbers={
                                                                hiddeFretNumbers ? hiddeFretNumbers : false
                                                            }
                                                                allowAdd={true}
                                                                setWhenAddMarker={setSelectedFrets}
                                                                fretMarkers={
                                                                    currentQuestion.defaultMarkers ?
                                                                        currentQuestion.defaultMarkers : []
                                                                }
                                                            />
                                                        </Guitar.NeckContainer>
                                                        : null
                                                }
                                                {/* panel */}
                                                <Box sx={{
                                                    ...styles.Hcontainer,
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
                        : <Box></Box>
                }

            </MuiModal >
        </Box>
    )
}

export default { Modal, useModal, TestButton }

