import { Box } from "@mui/material"
import { CSSProperties } from "react"

function List(props : {children : React.ReactNode,gap? : number}){
    const boxStyles : CSSProperties = {
        display : "flex",flexDirection : "column",gap : props.gap || 1
    }
    return (
        <Box sx={boxStyles}>
            {props.children}
        </Box>
    )
}

function Divider (props : {margin? : number}) {
    return (
        <div style={{marginBottom : props.margin ? props.margin : 10}}/>
    )
}

export default {List,Divider}