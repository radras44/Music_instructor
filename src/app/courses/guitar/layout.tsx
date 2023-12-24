"use client"

import ThemeContainer, { colorSets, darkTheme } from "@/theme"
import register from "./Register"
import { AvTimer } from "@mui/icons-material"
import Course from "@/components/course"
import { yellow } from "@mui/material/colors"

darkTheme.palette.primary = colorSets.yellow
darkTheme.palette.secondary = colorSets.lightGreen
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