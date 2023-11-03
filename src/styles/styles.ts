import { SxProps } from "@mui/material"

export const defaultPadding = 2
export const defaultMargin = 1

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
        flexWrap : "wrap"
    }
    return sx
}

export const modalContainer = () => {
    const sx : SxProps = {
        maxWidth: "90vw",
        maxHeight: "90vh",
        ...Vcontainer(),
        alignItems: "center",
        p: 3
    }
    return sx
}
export const modal = () => {
    const sx : SxProps = {
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh"
    }
    return sx
}




