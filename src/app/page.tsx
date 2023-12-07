"use client"

import { Course, CourseSection } from "@/interfaces/baseInterfaces";
import { Box, Button, Card, Popper, Typography } from "@mui/material";
import { Info } from "@mui/icons-material";
import ThemeContainer from "@/themes";
import guitarCourse from "./courses/guitar/Register";
import React, { CSSProperties } from "react";
import { SxProps, useTheme } from "@mui/material/styles"
import guitar from "public/guitar.jpg"
import Link from "next/link";
import { robotoMono } from "@/assets/fonts";
import { usePoper } from "@/hooks/useLesson";
const courses: Course[] = [
    guitarCourse
]

export default function App() {

    const infoPoper = usePoper("info-poper")

    const infoPoperStyles : CSSProperties = {
        padding : 2,maxWidth : 400,minWidth : 280
    }

    const titleStyles: CSSProperties = {
        fontWeight: 600,
        fontSize: 37
    }
    const containerStyles: CSSProperties = {
        display: "flex", flexDirection: "column", gap: 10,
        alignItems: "center", minHeight: "80vh", justifyContent: "center",
        padding: 5
    }

    const titleContainerStyles: CSSProperties = {
        display: "flex", flexDirection: "column", gap: 1,
        justifyContent : "center",alignItems : "center"
    }

    return (
        <ThemeContainer >
            <Box sx={containerStyles} component="main">
                {/* list of courses */}
                <Box sx={titleContainerStyles}>
                    <Typography className={robotoMono.className} sx={titleStyles} variant="h2" align="center" component="h1" color="primary">
                        Bienvenido
                    </Typography>
                    <Typography variant="subtitle1" component="h2">Cursos de teoria musical aplicada</Typography>
                    <Button color="secondary" onClick={infoPoper.toggle}>
                        <Info />
                    </Button>
                    <Popper id={infoPoper.id} open={infoPoper.open} anchorEl={infoPoper.anchorEl}>
                        <Card sx={infoPoperStyles}>
                            <Typography variant="body1">Esta pagina esta creada solo en base a mi conocimiento y lo que creo que es un buen camino a la hora de incorportar la teoria en cada instrumento musical, no es una guia formal ni un glosario riguroso</Typography>
                        </Card>
                    </Popper>
                </Box>
                {courses.map((course, courseIdx) => (
                    <CourseArticle key={courseIdx} course={course} />
                ))}
            </Box>
        </ThemeContainer>
    )
}

interface CourseArticleProps {
    course: Course
}

function CourseArticle(props: CourseArticleProps) {
    const theme = useTheme()
    const lessonNum = React.useMemo(() => {
        const sections = props.course.sections
        const result = sections.reduce((lessonNum: number, section: CourseSection) => {
            return section.lessons.length + lessonNum || lessonNum + 0
        }, 0)
        return result
    }, [])
    console.log(guitar)
    const containerStyles: SxProps = {
        backgroundImage: `linear-gradient(
            to right,
            rgba(0,0,0,1) 0%,
            rgba(0,0,0,0) 100%),
            url(${guitar.src})`,
        width: "48em", height: "24em",
        backgroundSize: "cover",
        display: "flex",
        flexDirection: "column",
        opacity: 0.8,
        transform: "scale(0.98)",
        gap: 2,
        alignItems: "start", justifyContent: "center",
        transition: "opacity 0.2s ease, transform 0.2s ease",
        [theme.breakpoints.down("lg")]: { fontSize: 12 },
        [theme.breakpoints.down("md")]: { fontSize: 10 },
        [theme.breakpoints.down("sm")]: { fontSize: 7 },
        "&:hover": {
            opacity: 1,
            transform: "scale(1)"
        }
    }
    const textContainerStyles = {
        width: "40%", display: "flex", gap: 2, flexDirection: "column", alignItems: "center",
        [theme.breakpoints.down("lg")]: { width: "60%" },
        [theme.breakpoints.down("md")]: { width: "80%" },
        [theme.breakpoints.down("sm")]: { width: "100%" }
    }
    const titleStyles: CSSProperties = {
        color: "primary.main",
        fontSize: 24
    }
    const subtitleContainerStyles: SxProps = {
        "& span": {
            fontSize: 14,
        },
        display: "flex", gap: 1
    }
    const buttonStyles: CSSProperties = {
        fontWeight: 600
    }
    return (
        <Box component="article" sx={containerStyles}>
            <Box sx={textContainerStyles}>
                <Typography sx={titleStyles}>{props.course.name}</Typography>
                <Box>
                    <Box sx={subtitleContainerStyles}>
                        <Typography sx={{ color: "text.secondary" }} component="span" >lecciones:</Typography>
                        <Typography sx={{ color: "secondary.main" }} component="span">{lessonNum}</Typography>
                    </Box>
                    <Box sx={subtitleContainerStyles}>
                        <Typography sx={{ color: "text.secondary" }} component="span" >secciones:</Typography>
                        <Typography sx={{ color: "secondary.main" }} component="span">{props.course.sections.length}</Typography>
                    </Box>
                </Box>
                <Link href={`${props.course.url + "/S1-L1"}`}>
                    <Button color="primary" sx={buttonStyles} variant="contained">Ir al curso</Button>
                </Link>
            </Box>
        </Box>
    )
}
