import { SxProps } from "@mui/material"

export const defaultPadding = 2
export const defaultMargin = 1

export const Vcontainer ={
    display: "flex",
    flexDirection: "column"
}

export const Hcontainer = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    flexWrap: "wrap"
}

export const modalContent = {
    position: 'absolute' as 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
  };

export default {
    modalContent ,Hcontainer,Vcontainer
}




