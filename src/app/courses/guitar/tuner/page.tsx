"use client"
import Course from "@/components/course";
import { Box, Button } from "@mui/material";
import { CSSProperties, useEffect, useRef, useState } from "react"

export default function Tuner() {
    const mainBoxStyles: CSSProperties = {
        display: "flex", flexDirection: "column", gap: 2, alignItems: "center"
    }
    const [isRecord, setIsRecord] = useState<boolean>(false)
    const recorder = useRef<MediaRecorder | null>(null)
    const fileReader = useRef<FileReader | null>(null)

    function startEvent() {
        setIsRecord(true)
    }
    function stopEvent() {
        setIsRecord(false)
    }
    function fileReaderLoadEvent () {
        if(!fileReader.current) return
        let buffer = fileReader.current.result
        if(!buffer || !(buffer instanceof ArrayBuffer)){return}
        if(buffer.byteLength % 2 !== 0){
            buffer = buffer.slice(1,buffer.byteLength)
        }
        console.log(buffer.byteLength)
        const signal = new Int16Array(buffer)
        console.log(signal.length)
    }
    async function dataavailableEvent(e: BlobEvent) {
        if(!e.data) return
        if(!fileReader || !fileReader.current){
            fileReader.current = new FileReader()
            fileReader.current.addEventListener("load",fileReaderLoadEvent)
        }
        fileReader.current.readAsArrayBuffer(e.data)
    }

    function start() {
        navigator.mediaDevices.getUserMedia({ audio: true })
            .then((stream: MediaStream) => {
                if (!recorder || !recorder.current) {
                    recorder.current = new MediaRecorder(stream)
                    recorder.current.addEventListener("start", startEvent)
                    recorder.current.addEventListener("stop", stopEvent)
                    recorder.current.addEventListener("dataavailable", dataavailableEvent)
                }
                recorder.current.start(500)
            })
            .catch((err) => { console.log(err) })
    }

    function stop() {
        if (recorder.current) {
            recorder.current.stop()
        }
    }

    useEffect(() => {
        return () => {
            if (recorder.current) {
                recorder.current.addEventListener("start", startEvent)
                recorder.current.addEventListener("stop", stopEvent)
                recorder.current.addEventListener("dataavailable", dataavailableEvent)
                console.log("listeners cleared.")
            }
        }
    }, [])

    return (
        <Course.Layout>
            <Box sx={mainBoxStyles}>
                {
                    isRecord ?
                        <Button onClick={stop} variant="contained" sx={{ fontWeight: 600 }}>Detener</Button> :
                        <Button onClick={start} variant="contained" sx={{ fontWeight: 600 }}>Afinar</Button>
                }
            </Box>
        </Course.Layout>
    )
}