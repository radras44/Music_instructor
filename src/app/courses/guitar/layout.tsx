"use client"

import CourseNavbar from "@/components/nav/courseNavbar"
import ThemeContainer from "@/components/themes"
import register from "./Register"

export default function layout ({children} : {children : React.ReactNode}) {
    return (
        <ThemeContainer>
            {
            <CourseNavbar
            courseReg={register}
            />
            }
            {children}
        </ThemeContainer>
    )
}