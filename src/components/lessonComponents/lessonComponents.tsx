import { Statement } from "@/interfaces/baseInterfaces";
import { Vcontainer } from "@/styles/styles";
import { ArrowRight, Label, LabelImportant, OpenInFull, Report, Warning } from "@mui/icons-material";
import { Alert, AlertProps, Box, Button, ButtonProps, Card, Fade, Modal, Paper, Typography } from "@mui/material";
import { useState } from "react";
import { defaultMargin, defaultPadding } from "@/styles/styles";
export function LessonContainer({ children }: { children: React.ReactNode }) {
    return (
        <Fade in={true} >
            <Box sx={{
                ...Vcontainer(),
                p: defaultPadding,
                pb: 15
            }}>
                {children}
            </Box>
        </Fade>
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
        <Box sx={{
            p: defaultPadding,
            m: defaultMargin,
        }}>
            <Typography variant="body1" sx={{
                color: "text.secondary"
            }}>{text}</Typography>
        </Box>
    )
}

interface LessonWarningProps extends AlertProps {
    text: string
}

export function LessonAlert({ text, severity = "warning" }: LessonWarningProps) {
    return (
        <Alert severity={severity} sx={{
            p: defaultPadding,
            m: defaultMargin
        }}>
            {text}
        </Alert>
    )
}

interface LessonListItemProps {
    text: string
    keywords?: string[]
    listItemMargin?: boolean
    children?: React.ReactNode
}


export function LessonListItem({ children, text, listItemMargin = true }: LessonListItemProps) {
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
                <Typography component="span" variant="subtitle2">
                    {text}
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


