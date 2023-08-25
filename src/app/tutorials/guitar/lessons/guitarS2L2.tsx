import { LessonContainer, LessonDivider, LessonParagraph, LessonBox, LessonTitle, LessonAlert } from "@/components/lessonComponents/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export const intervals = [
    {name : "2da menor",semitone : "1",nomenclature : "b2"},
    {name : "2da mayor",semitone : "2",nomenclature : "2"},
    {name : "3ra menor",semitone : "3",nomenclature : "b3"},
    {name : "3ra mayor",semitone : "4",nomenclature : "3"},
    {name : "4ta justa",semitone : "5",nomenclature : "4"},
    {name : "4ta aumentada o 5ta disminuida",semitone : "6",nomenclature : "#4/b5"},
    {name : "5ta justa",semitone : "7",nomenclature : "5"},
    {name : "6ta menor",semitone : "8",nomenclature : "b6"},
    {name : "6ta mayor",semitone : "9",nomenclature : "6"},
    {name : "7ma menor",semitone : "10",nomenclature : "b7"},
    {name : "7ma mayor",semitone : "11",nomenclature : "7"},
    {name : "8va justa (distancia entre fundamental y fundamental)",semitone : "12",nomenclature : "8"},
]
export default function GuitarS2L2 ({title} : LessonComponent) {
    return(
        <LessonContainer>
            <LessonTitle title={title}/>
            <LessonBox>
                <LessonParagraph text="Devido a que existen 7 notas con un nombre propios y a otras razones teoricas los intervalos se dividen en numeros del 1 al 7, a contiaucion se presentara una tabla que muestra cada intervalo y cuantos semitonos de distancia representa, esto es solo para referencia, no es absolutamente necesario memorizarlo de momento."/>
                <LessonAlert severity="warning" text="Recuerda la funcion de '#' y 'b', aqui se usan de la misma forma, si un intervalalo vale 5 semitonos entonces con un bemol vale 4 y con un sostenido vale 6, es importante entender la nomenclatura ya que es lo que se usará en las lecciones posteriores."/>
                <LessonDivider>
                <TableContainer>
                    <Table>
                        <TableHead>
                            <TableCell>Intervalo</TableCell>
                            <TableCell>Semitonos</TableCell>
                            <TableCell>Nomenclatura</TableCell>
                        </TableHead>
                        <TableBody>
                            {intervals.map((interval,index)=>(
                                <TableRow key={index}>
                                    <TableCell>{interval.name}</TableCell>
                                    <TableCell>{interval.semitone}</TableCell>
                                    <TableCell>{interval.nomenclature}</TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </TableContainer>
                </LessonDivider>
            </LessonBox>
        </LessonContainer>
    )
}