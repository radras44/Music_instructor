import { Container, ContainerProps, CssBaseline, ThemeProvider, createTheme } from "@mui/material";

export const darkTheme = createTheme({
    palette: {
        mode: "dark"
    }
})

interface ThemeContainerProps extends ContainerProps {}

export default function ThemeContainer ({children,maxWidth,sx} : ThemeContainerProps) {
    return (
        <ThemeProvider theme={darkTheme}>
            <CssBaseline/>
            <Container maxWidth={maxWidth} sx={sx}>
                {children}
            </Container>
        </ThemeProvider>
    )
}