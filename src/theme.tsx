import { Container, CssBaseline, PaletteColor, PaletteColorOptions, ThemeProvider, createTheme } from "@mui/material";
import { blue, lightGreen, orange, purple, yellow } from "@mui/material/colors";
import React from "react";

interface ColorSets {
    lightGreen : PaletteColor
    orange : PaletteColor
    yellow : PaletteColor
    purple : PaletteColor
    blue : PaletteColor
}

export const colorSets : ColorSets = {
    lightGreen : {
        dark : lightGreen[700],
        main : lightGreen[300],
        light : lightGreen[200],
        contrastText : lightGreen[900]
    },
    orange : {
        dark : orange[900],
        main : orange[300],
        light : orange[100],
        contrastText : orange[900]
    },
    yellow : {
        dark : yellow[900],
        main : yellow[300],
        light : yellow[100],
        contrastText : yellow[900]
    },
    purple : {
        dark : purple[900],
        main : purple[300],
        light : purple[100],
        contrastText : purple[900]
    },
    blue : {
        dark : blue[900],
        main : blue[300],
        light : blue[100],
        contrastText : blue[900]
    }
}
export const darkTheme = createTheme({
    palette: {
        mode: "dark",
        primary : colorSets.lightGreen,
        secondary : colorSets.orange
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