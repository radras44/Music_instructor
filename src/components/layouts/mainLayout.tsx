import ThemeContainer from "../themes";

export default function MainLayout ({children} : {children : React.ReactNode}) {
    return (
        <>
        <ThemeContainer>
            {children}
        </ThemeContainer>
        </>
    )
}