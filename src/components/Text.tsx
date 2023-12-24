import { robotoMono } from "@/assets/fonts"
import { TextComponent } from "@/interfaces/baseInterfaces"
import { LabelImportant } from "@mui/icons-material"
import { Box, ListItemButton, ListItemIcon, SxProps, Typography, useTheme } from "@mui/material"
import { green, lightGreen } from "@mui/material/colors"
import Link from "next/link"
import { CSSProperties } from "react"
import MUILink from "@mui/material/Link"
import { darkTheme } from "@/theme"
function HighLighter({ text }: { text: string }) {
    const textArray: string[] = text.split("'")
    const textStyles: CSSProperties = {
        color: darkTheme.palette.primary.main,
        fontWeight: 400
    }
    return (
        <>
            {
                text.startsWith("'") ?
                    textArray.map((fragment, index) => (
                        index % 2 ?
                            <span style={textStyles} key={index}>{fragment}</span> :
                            <span key={index}>{fragment}</span>
                    ))
                    :
                    textArray.map((fragment, index) => (
                        index % 2 ?
                            <span style={textStyles} key={index}>{fragment}</span> :
                            <span key={index}>{fragment}</span>
                    ))
            }
        </>
    )
}

function P(props: TextComponent) {
    const theme = useTheme()
    const textStyles: CSSProperties = {
        color: "text.secondary",
        [theme.breakpoints.down("md")] : {fontSize : 13}
    }
    return (
        <Typography variant="body1" sx={textStyles}>
            {
                props.highlight ? <HighLighter text={props.text} />
                    : props.text
            }
        </Typography>
    )
}

function Title(props: TextComponent) {
    const textStyles: CSSProperties = { color: "primary.main" }
    return (
        <Typography variant="h5" className={robotoMono.className} sx={textStyles}>
            {
                props.highlight ? <HighLighter text={props.text} />
                    : props.text
            }
        </Typography>
    )
}

function SubTitle(props: TextComponent) {
    const textStyles: CSSProperties = {}
    return (
        <Typography variant="h6" sx={textStyles}>
            {
                props.highlight ? <HighLighter text={props.text} />
                    : props.text
            }
        </Typography>
    )
}

function ListItem(props: TextComponent) {
    const theme = useTheme()
    const containerStyles: CSSProperties = {
        display: "flex",
        flexDirection: "row",
        gap: 1,
        alignItems: "center",
        marginLeft: 5,
        [theme.breakpoints.down("lg")]: { marginLeft: 4 },
        [theme.breakpoints.down("md")]: { marginLeft: 2},
        [theme.breakpoints.down("sm")]: { marginLeft: 1 }
    }

    const textStyles :CSSProperties = {
        [theme.breakpoints.down("md")] : {fontSize : 13}
    }

    return (
        <Box sx={containerStyles}>
            <Typography component="span">-</Typography>
            <Typography sx={textStyles} component="span" variant="subtitle1">
                {
                    props.highlight ? <HighLighter text={props.text} />
                        : props.text
                }
            </Typography>
        </Box>
    )
}

interface OListItemProps {
    title: string
    icon?: JSX.Element
    link?: string
    description?: string
}
function DescLink({ title, link = "#", icon, description }: OListItemProps) {
    const listItemButtonStyles = {
        display: "flex",
        flexDirection: "row",
        alignItems: "center"
    }
    const textBoxStyles = {
        display: "flex",
        flexDirection: "column"
    }
    return (
        <Link href={link}>
            <ListItemButton sx={listItemButtonStyles}>
                <ListItemIcon>{icon}</ListItemIcon>
                <Box sx={textBoxStyles}>
                    <Typography variant="h6">{title}</Typography>
                    <Typography variant="subtitle2">{description}</Typography>
                </Box>
            </ListItemButton>
        </Link>
    )
}

function SimpleLink (props : {text : string,href : string}) {
    const theme = useTheme()

    const linkStyles : SxProps = {
        whiteSpace : "nowrap",
        [theme.breakpoints.down("md")] : {fontSize : 14},
        [theme.breakpoints.down("sm")] : {fontSize : 13}
    }

    return (
        <MUILink target="_blank" sx={linkStyles} href={props.href}>{props.text}</MUILink>
    )
}

export default { HighLighter, ListItem, DescLink, P, Title, SubTitle,SimpleLink }

