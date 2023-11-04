import { LabelImportant } from "@mui/icons-material";
import { Alert, AlertProps, Box, Fade, Typography } from "@mui/material";
import HighLighter from "./highlighter";

export function LSegment({ children }: { children: React.ReactNode }) {
    return (
        <Fade in={true} timeout={500} >
            <Box sx={{
                display : "flex",
                flexDirection : "column",
                gap : 3,
                padding : 3,
                mt : 5,
                mb : 5
            }}>
                {children}
            </Box>
        </Fade>
    )
}

//text-------------------------------------------------------->

export function LSubtitle({ text }: { text: string }) {
    return (
        <Typography variant="h5">{text}</Typography>
    )
}


export function LParagraph({ text }: { text: string }) {
    return (
        <Box>
            <Typography variant="subtitle1">
                <HighLighter text={text} />
            </Typography>
        </Box>
    )
}

interface LessonAlertProps extends AlertProps {
    text: string
}

export function LAlert({ text, severity = "warning" }: LessonAlertProps) {
    return (
        <Alert severity={severity}>
            {text}
        </Alert>
    )
}
//------------------------------------------------------->

interface LessonListItemProps {
    text: string
    keywords?: string[]
    listItemMargin?: boolean
    children?: React.ReactNode
}
export function LListItem({ children, text, listItemMargin = true }: LessonListItemProps) {
    return (
        <Box sx={{
            display: "flex",
            flexDirection: "column",
            ml: listItemMargin ? 5 : 0,
            p: 1
        }}>
            <Box sx={{
                display: "flex",
                flexDirection: "row",
                alignItems: "center",
            }}>
                <LabelImportant fontSize="small" sx={{
                    color: "success.light",
                    mr: 1
                }} />
                <Typography component="span" variant="body1">
                    <HighLighter text={text} />
                </Typography>
            </Box>
            {
                children ?
                    <Box sx={{
                        display: "flex",
                        flexDirection: "row",
                        alignItems: "center",
                        ml: 5,
                        mt: 1,
                        p: 2
                    }}>
                        {children}
                    </Box>
                    : null
            }
        </Box>
    )
}


