import { Box, Fade, Pagination, Stack } from "@mui/material";
import { CSSProperties, useState } from "react";
import indicatorStyles from "../styles/indicator.module.css"

export interface LessonLayoutProps {
    segments: JSX.Element[]
}

export function Layout({ segments }: LessonLayoutProps) {
    const [page, setPage] = useState<number>(1)
    function changePage(e: React.ChangeEvent<any>, value: number) {
        setPage(value)
        window.scrollTo(0, 0)
    }
    return (
        <Box sx={{
            mt:15,
            mb: 15
        }}>
            <Box>{segments[page - 1]}</Box>
            <Box sx={{
                display: "flex", flexDirection: "row", justifyContent: "center"
            }}>
                <Stack spacing={2}>
                    <Pagination
                        size="large"
                        count={segments.length}
                        page={page}
                        onChange={changePage}
                    />
                </Stack>
            </Box>
        </Box>
    )
}

export function Segment({ children }: { children: React.ReactNode }) {
    return (
        <Fade in={true} timeout={500} >
            <Box sx={{
                display : "flex",
                flexDirection : "column",
                gap : 3,
                mt : 5,
                mb : 5
            }}>
                {children}
            </Box>
        </Fade>
    )
}


interface LessonIndicatorProps {
    listType?: "notes" | "intervals",
    indicators?: string[],
    customList?: string[]
    limit?: number
    label?: string
    altType? : "b" | "#"
    align? : "center" | "start" | "end"
}
export function Indicator ({ label, indicators = [],altType = "#", listType = "notes", customList = [], limit = 12,align = "start" }: LessonIndicatorProps) {
    const lists = {
        notes: ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do"],
        intervals: ["1", "b2", "2", "b3", "3", "4", "#4", "5", "b6", "6", "b7", "7", "8"],
        customList: customList
    }

    if(altType === "b"){
        lists.notes = ["Do", "Reb", "Re", "Mib", "Mi", "Fa", "Solb", "Sol", "Lab", "La", "Sib", "Si", "Do"]
    }

    if (customList.length > 0) {
        lists[listType] = customList
    }

    return (
        <div className={indicatorStyles.container}>
            {
                label ?
                    <h4 className={indicatorStyles.label}>{label}</h4>
                    : null
            }
            <div className={indicatorStyles["indicator-container"]} style={{
                justifyContent : align
            }}>
                {lists[listType].slice(0, limit).map((note : string, index) => (
                    indicators.includes(note) ?
                        <div key={index} className={`${indicatorStyles.indicator} ${indicatorStyles["indicator--active"]}`}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                        :
                        <div key={index} className={indicatorStyles.indicator}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}

export default {Segment,Indicator,Layout}