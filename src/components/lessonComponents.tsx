import { Vcontainer } from "@/styles/styles";
import { Label, OpenInFull, Warning } from "@mui/icons-material";
import { Box, Button, ButtonProps, Card, Modal, Paper, Typography } from "@mui/material";
import indicatorStyles from "../styles/indicator.module.css"
import { useState } from "react";

const defaultPadding = 2
const defaultMargin = 1
export function LessonContainer({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{
            ...Vcontainer(),
            p: defaultPadding,
            pb: 15
        }}>
            {children}
        </Box>
    )
}

export function LessonBox({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{
            pt: defaultPadding,
            pb: defaultPadding,
            mt: defaultMargin,
            mb: defaultMargin,
            BorderBottom: 1
        }}>
            {children}
        </Box>
    )
}

export function LessonDivider({ children }: { children: React.ReactNode }) {
    return (
        <Box sx={{
            pt: defaultPadding,
            pb: defaultPadding,
            mt: defaultMargin,
            mb: defaultMargin
        }}>
            {children}
        </Box>
    )
}

export function LessonTitle({ title }: { title: String }) {
    return (
        <Box sx={{
            p: defaultPadding,
            m: defaultMargin
        }}>
            <Typography variant="h4" sx={{
                fontWeight: 400
            }}>{title}</Typography>
        </Box>
    )
}
export function LessonSubtitle({ text }: { text: string }) {
    return (
        <Typography variant="h5" sx={{
            p: defaultPadding,
            m: defaultMargin
        }}>{text}</Typography>
    )
}


export function LessonParagraph({ text }: { text: string }) {
    return (
        <Paper elevation={4} sx={{
            p: defaultPadding,
            m: defaultMargin
        }}>
            <Typography variant="body1" sx={{
                color: "text.secondary"
            }}>{text}</Typography>
        </Paper>
    )
}

export function LessonWarning ({text} : {text : string}) {
    return (
        <Paper elevation={4} sx={{
            p: defaultPadding,
            m: defaultMargin,
            backgroundColor : "error.dark"
        }}>
            <Warning/>
            <Typography variant="h5">{text}</Typography>
        </Paper>
    )
}

interface LessonListItemProps {
    text: string
    keywords?: string[]
}


export function LessonListItem({ text }: LessonListItemProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "row",
            alignItems: "center",
            ml: 5,
            p: 1
        }}>
            <Label fontSize="small" sx={{
                color: "success.light",
                mr: 1
            }} />
            <Typography variant="subtitle2">
                {text}
            </Typography>
        </Box>
    )
}


interface LessonIndicatorProps {
    listType?: "notes" | "intervals",
    indicators?: string[],
    customList?: string[]
    limit?: number
    label?: string
}
export function LessonIndicator({ label, indicators = [], listType = "notes", customList = [], limit = 12 }: LessonIndicatorProps) {
    const lists = {
        notes: ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do"],
        intervals: ["1", "b2", "2", "b3", "3", "4", "#4", "5", "b6", "6", "b7", "7", "8"],
        customList: customList
    }

    if (customList.length > 0) {
        lists[listType] = customList
    }

    return (
        <div className={indicatorStyles.container}>
            {
                label ?
                    <h4 className={indicatorStyles.label}>{label}</h4>
                    : null
            }
            <div className={indicatorStyles["indicator-container"]}>
                {lists[listType].slice(0, limit).map((note, index) => (
                    indicators.includes(note) ?
                        <div key={index} className={`${indicatorStyles.indicator} ${indicatorStyles["indicator--active"]}`}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                        :
                        <div key={index} className={indicatorStyles.indicator}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}

interface Statement {
    statement: string
    correction: JSX.Element | string
}

interface CorrectionsModalProps {
    open: boolean
    onClose: (event: {}, reason: "backdropClick" | "escapeKeyDown") => void
    statements: Statement[]
}

export function useCorrectionsModal() {
    const [showCorrections, setShowCorrections] = useState<boolean>(false)
    function openCorrections() { setShowCorrections(true) }
    function closeCorrections() { setShowCorrections(false) }
    return { showCorrections, openCorrections, closeCorrections }
}

export function CorrectionsModal({ open, onClose, statements }: CorrectionsModalProps) {
    return (
        <Modal open={open} onClose={onClose}>
            <Card elevation={4} sx={{
                position: "fixed",
                top: 0,
                left: 0,
                maxHeight:"100%",
                overflow:"auto"
            }}>
                <LessonContainer>
                    {statements.map((statement, index) => (
                        <LessonDivider key={index}>
                            <LessonSubtitle text={statement.statement} />
                            {
                                typeof (statement.correction) == "string" ?
                                    <LessonParagraph text={statement.correction} />
                                    :
                                    statement.correction
                            }
                        </LessonDivider>
                    ))}
                </LessonContainer>
            </Card>
        </Modal>
    )
}

export function CorrectionsButton({children,onClick} : ButtonProps){
    return(
        <Box sx={{
            display:"flex",
            justifyContent:"center",
            flexDirection:"row",
            mt:defaultMargin,
            mb:defaultMargin
        }}>
            <Button startIcon={<OpenInFull/>} onClick={onClick} variant="text" color="success" sx={{
                fontWeight:600,
            }}>{children}</Button>
        </Box>
    )
}
