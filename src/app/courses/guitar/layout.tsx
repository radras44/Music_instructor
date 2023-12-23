"use client"

import ThemeContainer from "@/themes"
import register from "./Register"
import { AvTimer } from "@mui/icons-material"
import Course from "@/components/course"

export default function layout ({children} : {children : React.ReactNode}) {
    return (
        <ThemeContainer>
            {
            <Course.Navbar
            courseReg={register}
            />
            }
            {children}
        </ThemeContainer>
    )
}