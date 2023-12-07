import { Box, Fade, Pagination, Stack } from "@mui/material";
import { CSSProperties, useEffect, useRef, useState } from "react";
import cellReferencerStyles from "../styles/cellReferencer.module.css"
import { useTheme } from "@mui/material/styles"
import { grey, lightGreen, orange } from "@mui/material/colors";
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
            mt: 15,
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
                display: "flex",
                flexDirection: "column",
                gap: 3,
                mt: 5,
                mb: 5
            }}>
                {children}
            </Box>
        </Fade>
    )
}

interface LessonCellProps {
    listType?: "notes" | "intervals",
    highlight?: string[],
    customList?: string[]
    limit?: number
    label?: string
    root?: string
    altType?: "b" | "#"
    align?: "center" | "start" | "end"
}
export function CellReferencer({
    label,
    highlight = [],
    altType = "#",
    listType = "notes",
    customList = [],
    limit = 12,
    root,
    align = "start" }: LessonCellProps) {
    const lists = {
        notes: ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do"],
        intervals: ["1", "b2", "2", "b3", "3", "4", "#4", "5", "b6", "6", "b7", "7", "8"],
        customList: customList
    }

    
    if (altType === "b") {
        lists.notes = ["Do", "Reb", "Re", "Mib", "Mi", "Fa", "Solb", "Sol", "Lab", "La", "Sib", "Si", "Do"]
    }
    
    if (customList.length > 0) {
        lists[listType] = customList
    }
    
    const containerRef = useRef<HTMLDivElement>(null)

    useEffect(()=>{
        if(containerRef.current){
            const containerEl = containerRef.current
            const cells : HTMLDivElement[] = Array.from(containerEl.querySelectorAll(`.${cellReferencerStyles["cell"]}`)) || []
            if(cells.length > 0){
                cells.forEach((cell)=>{
                    const child : ChildNode | null = cell.firstChild
                    if(child && child.textContent){
                        if(highlight.includes(child.textContent)){
                            cell.style.background = `${lightGreen[400]}`
                            cell.style.color = `black`
                        }
                        else if(root == child.textContent){
                            cell.style.background = `${orange[400]}`
                            cell.style.color = `black`
                        }
                        else{
                            cell.style.border = `1px solid ${grey[700]}`
                        }
                    }
                })
            }
        }
    },[])
 
    return (
            <div ref={containerRef} className={cellReferencerStyles["cellReferencer-container"]}>
                {lists[listType].slice(0, limit).map((text: string, index) => (
                    <div key={index} className={`${cellReferencerStyles["cell"]}`}>
                        <span className={cellReferencerStyles["cell-text"]}>{text}</span>
                    </div>
                ))}
            </div>
   
    )
}

export default { Segment, CellReferencer, Layout }