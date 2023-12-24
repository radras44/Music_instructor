import ThemeContainer from "../../theme";

export default function MainLayout ({children} : {children : React.ReactNode}) {
    return (
        <>
        <ThemeContainer>
            {children}
        </ThemeContainer>
        </>
    )
}