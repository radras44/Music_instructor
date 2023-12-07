import { AudioFile } from "@mui/icons-material"
import { Box, SxProps, Typography } from "@mui/material"
import { forwardRef, useRef } from "react"
import Button from "@mui/material/Button"
import { robotoMono } from "@/assets/fonts"
import {useTheme} from "@mui/material/styles"
function ListItem(props: { filename: string, name?: string }) {
    const theme = useTheme()
    const audioRef = useRef<HTMLAudioElement>(null)
    function play() {
        if (audioRef.current && audioRef.current.paused == true) {
            audioRef.current.play()
        }
    }
    const buttonStyles: SxProps = {
        display: "flex", gap: 2, alignItems: "center",width : "100%",justifyContent:"start",
        "& *" : {textTransform : "none"}
    }

    const nameStyles : SxProps = {
        whiteSpace : "nowrap",
        color : "text.secondary",
        [theme.breakpoints.down("lg")] : {fontSize : 14},
        [theme.breakpoints.down("md")] : {fontSize : 13},
        [theme.breakpoints.down("sm")] : {fontSize : 12},
    }
    return (
            <Button color="error" onClick={play} sx={buttonStyles}>
            <audio ref={audioRef} src={`/sounds/${props.filename}`}/>
                <AudioFile />
                <Typography className={robotoMono.className} sx={nameStyles} variant="subtitle1" component="h5">{props.name ? props.name : props.filename}</Typography>
            </Button>
    )
}

export default { ListItem }
