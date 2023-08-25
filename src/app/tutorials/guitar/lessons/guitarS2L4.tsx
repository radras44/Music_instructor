import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonBox, LessonContainer, LessonDivider, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box, Table, TableBody, TableCell, TableHead, TableRow } from "@mui/material";

export default function GuitarS2L4({ title }: LessonComponent) {
    const intervals = [
        { strings: "6ta cuerda => 5ta cuerda", notes: "Mi => La", semitones: 5 },
        { strings: "5ta cuerda => 4ta cuerda", notes: "La => Re", semitones: 5 },
        { strings: "4ta cuerda => 3ra cuerda", notes: "Re => Sol", semitones: 5 },
        { strings: "3ra cuerda => 2da cuerda", notes: "Sol => Si", semitones: 4 },
        { strings: "2da cuerda => 1ra cuerda", notes: "Si => Mi", semitones: 5 },
    ]
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="¿Recuerda la afinación estándar de la guitarra? Entre cada nota de cada cuerda hay una distancia en semitonos, se disponen de esta manera:" />
                <LessonDivider>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>número de cuerdas</TableCell>
                                <TableCell>notas</TableCell>
                                <TableCell>distancia en semitonos</TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {intervals.map((interval, index) => (
                                <TableRow key={index}>
                                    <TableCell>{interval.strings}</TableCell>
                                    <TableCell>{interval.notes}</TableCell>
                                    <TableCell>{interval.semitones}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </LessonDivider>
                <LessonParagraph text="Como puedes apreciar, lo ideal sería que todas tuvieran 5 semitonos entre cada cuerda, pero no, entre la 3ra y 2da cuerda hay 4" />
                <LessonParagraph text="¿En qué afecta esto?" />
                <LessonParagraph text="Afecta en que las posiciones de los intervalos, acordes, escalas o cualquier tipo de estructura que pase entre la cuerda 2 y 3, va a modificarse un semitono hacia adelante" />
                <LessonParagraph text="Sueno complicado, asique aquí unos ejemplos con octavas para que te acostumbres" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Fa"
                        fretMarkers={[
                            { position: [6, 1], text: "Fa" },
                            { position: [4, 3], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Si"
                        fretMarkers={[
                            { position: [5, 2], text: "Si" },
                            { position: [3, 4], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Mi"
                        fretMarkers={[
                            { position: [4, 2], text: "Mi" },
                            { position: [2, 5], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="La"
                        fretMarkers={[
                            { position: [3, 2], text: "La" },
                            { position: [1, 5], text: "8" }
                        ]}
                    />
                </Box>
                <LessonParagraph text="Como ves, cuando alguna nota pasa por debajo de la cuerda 3, se mueve un traste hacia adelante" />
                <LessonParagraph text="Si ambas notas pasaran por debajo de la cuerda 3, entonces no habría problema, ambas se moverían un traste hacia adelante y quedarían en la misma posición que antes, esto se puede ver mejor en el caso de las quintas." />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Do"
                        fretMarkers={[
                            { position: [5, 3], text: "Do" },
                            { position: [4, 5], text: "5" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Si"
                        fretMarkers={[
                            { position: [4, 2], text: "Si" },
                            { position: [3, 4], text: "5" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Mi"
                        fretMarkers={[
                            { position: [3, 2], text: "Mi" },
                            { position: [2, 5], text: "8" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Do"
                        fretMarkers={[
                            { position: [2, 1], text: "Do" },
                            { position: [1, 3], text: "8" }
                        ]}
                    />
                </Box>
                <LessonParagraph text="Como ves, en el último caso la posición no se ve alterada, ya que ambas cuerdas están por debajo de la cuerda 3"/>
                <LessonSubtitle text="Práctica"/>
            </LessonBox>
        </LessonContainer>
    )    
}