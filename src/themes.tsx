import { Container, CssBaseline, ThemeProvider, createTheme } from "@mui/material";
import { lightGreen, orange } from "@mui/material/colors";
import React from "react";
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary : {
            dark : lightGreen[900],
            main : lightGreen[400],
            light : lightGreen[100],
        },
        secondary : {
            dark : orange[900],
            main : orange[400],
            light : orange[100],
        }
    }
})

export default function ThemeContainer(props : {children : React.ReactNode}) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth="lg">
                {props.children}
            </Container>
        </ThemeProvider>
    )
}