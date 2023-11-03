import {Box, Container, ContainerProps, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

interface ThemeContainerProps extends ContainerProps { }

export default function ThemeContainer({ children,maxWidth}: ThemeContainerProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline />
            <Container maxWidth={maxWidth}>
                {children}
            </Container>
        </ThemeProvider>
    )
}