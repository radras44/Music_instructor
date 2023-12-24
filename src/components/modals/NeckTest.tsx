import { neckTestQuestion, FretMarker } from "@/interfaces/baseInterfaces"
import MuiModal from "@mui/material/Modal"
import { CheckCircle, HorizontalRule, Check, Clear, Book } from "@mui/icons-material"
import { ButtonProps, Box, Paper, Button, Typography, Fade, Card, Pagination } from "@mui/material"
import { useState, useEffect, CSSProperties, useRef } from "react"
import Guitar from "../Guitar"
import styles from "@/styles/styles"
import { SxProps, useTheme } from "@mui/material/styles"

interface TestModalButtonProps extends ButtonProps {
    title: string
    questionNum: number
    description: string
}

function TestButton({ onClick, title, questionNum, description }: TestModalButtonProps) {
    const theme = useTheme()
    const styles: {[key: string]: SxProps } = {
        titleBox: {
            display: "flex", alignItems: "center", gap: 1
        },
        title: {
            color: "primary.main",
            [theme.breakpoints.down("md")]: { fontSize: 14 }
        },
        description: {
            color: "text.secondary",
            [theme.breakpoints.down("md")]: { fontSize: 12 }
        },
        itemNumber: {
            color: "grey.400",
            fontSize: 12,
            [theme.breakpoints.down("md")]: { fontSize: 10 }
        },
        button: {
            flex: 1, display: "flex", flexDirection: "column", alignItems: "start",
            p: 3, textTransform: "lowercase", gap: 1, width: "100%", color: "primary.main",
            borderLeft: 1, backgroundColor: "rgba(255,255,255,0.05)"
        }
    }


    return (
        <Button onClick={onClick} variant="text" color="primary" sx={styles.button}>
            <Box sx={styles.titleBox}>
                <Book />
                <Typography variant="h6" sx={styles.title}>{title}</Typography>
            </Box>
            <Typography variant="subtitle1" sx={styles.description}>{description}</Typography>
            <Typography sx={styles.itemNumber}variant="caption">{questionNum} Items</Typography>
        </Button>
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
    hiddeFretNumbers?: boolean
}

function Modal({ useObj, title, description, hiddeFretNumbers }: QuestionModalProps) {
    const [testParams, setTestParams] = useState<QuestionParams>({
        checkResult: null,
        questionNumber: 0,
        finalized: false
    })
    const neckContainerRef = useRef<HTMLDivElement>(null)
    const [currentQuestion, setCurrentQuestion] = useState<neckTestQuestion>(useObj.questions[0])
    const [selectedFrets, setSelectedFrets] = useState<FretMarker[]>([])

    //fades
    const [iconFade, setIconFade] = useState<boolean>(true)
    const [contentFade, setContentFade] = useState<boolean>(true)

    function nextQuestion() {
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

    function check() {
        const selectedFretString = JSON.stringify(selectedFrets)

        let result = null
        //aplicar metodo de verificacion
        if (currentQuestion.verificationMethod) {
            result = currentQuestion.verificationMethod(selectedFrets, currentQuestion.solutions)
        } else {
            result = currentQuestion.solutions.some((solution: FretMarker[]) => {
                return selectedFretString === JSON.stringify(solution);
            });
        }

        //aplicar animacion para cambiar a la siguiente pregunta en caso de estar corracta => useEffect
        setTestParams({
            ...testParams,
            checkResult: result,
        });
    }

    useEffect(() => {
        if (testParams.checkResult === true) {
            const animateTransition = async () => {
                await new Promise((resolve) => setTimeout(resolve, 200))
                setContentFade(false);
                await new Promise((resolve) => setTimeout(resolve, contentFadeTime));
                nextQuestion();
                await new Promise((resolve) => setTimeout(resolve, 100));
                setContentFade(true);
            };

            animateTransition();
        }
    }, [testParams.checkResult]);

    const evalButtonStyles: SxProps = {
        fontSize: 15,
        pl: 4,
        pr: 4,
    }

    const panelBoxStyles: SxProps = {
        display: "flex",
        flexWrap: "nowrap",
        gap: 4,
        justifyContent: "center",
        alignItems: "center",
        width: "100%",
    }

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
                                            <Button onClick={() => {
                                                useObj.close({}, "backdropClick")
                                            }}>Cerrar</Button>
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
                                                    color="primary"
                                                />
                                                <Typography variant="body1">{currentQuestion.question}</Typography>
                                                {/* mastil */}
                                                <Box component="div" ref={neckContainerRef}>
                                                    <Guitar.NeckContainer>
                                                        <Guitar.Neck
                                                            hiddeFretNumbers={
                                                                hiddeFretNumbers ? hiddeFretNumbers : false
                                                            }
                                                            allowAddMarkers={true}
                                                            setWhenAddMarker={setSelectedFrets}
                                                            cleanWhenChange={currentQuestion}
                                                            fretMarkers={
                                                                currentQuestion.defaultMarkers ?
                                                                    currentQuestion.defaultMarkers : []
                                                            }
                                                        />
                                                    </Guitar.NeckContainer>
                                                </Box>
                                                {/* panel */}
                                                <Box sx={panelBoxStyles}>
                                                    <Button
                                                        sx={evalButtonStyles}
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



export default { Modal, useModal }

