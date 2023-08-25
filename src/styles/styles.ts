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
        flexWrap:"wrap"
    }
    return sx
}

export const modalContainer = () => {
    const sx : SxProps = {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%'
    }
    return sx
}



