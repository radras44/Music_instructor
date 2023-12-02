import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import React from "react";
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary : {
            dark : "#33691e ",
            main : "#9ccc65",
            light : "#c5e1a5"
        }
    }
})

export default function ThemeContainer(props : {children : React.ReactNode}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="lg" >
                {props.children}
            </Container>
        </ThemeProvider>
    )
}