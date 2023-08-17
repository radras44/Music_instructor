import { SxProps } from "@mui/material"

export const Vcontainer = () => {
    const sx : SxProps = {
        display:"flex",
        flexDirection : "column"
    }
    return sx
}

export const Hcontainer = () => {
    const sx : SxProps = {
        display:"flex",
        flexDirection : "row",
        alignItems:"center",
        flexWrap:"wrap"
    }
    return sx
}



