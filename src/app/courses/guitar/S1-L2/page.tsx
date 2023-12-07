"use client"
import Guitar from "@/components/Guitar"
import Lesson from "@/components/Lesson"
import NeckTest from "@/components/modals/NeckTest"
import { Alert, Box, Button, Link } from "@mui/material"
import { stringTestQuestions, fretTestQuestions } from "../S1-L1/GS1L1Q"
import useSound from "use-sound"
import { genSegments } from "@/utils/componentUtils"
import Text from "@/components/Text"
import Audio from "@/components/Audio"
import Container from "@/components/Container"
const segments = genSegments([Segment_1, Segment_2])

export default function GS1L1() {
    return <Lesson.Layout segments={segments} />
}

function Segment_1() {
    return (
        <Lesson.Segment>
            <Text.Title text="Afinacion de la guitarra" />
            <Text.P text="La afinacion de la guitarra es la siguiente" />
            <Guitar.NeckContainer>
                <Guitar.Neck
                    fretMarkers={[
                        { position: [1, 0], text: "Mi" },
                        { position: [2, 0], text: "Si" },
                        { position: [3, 0], text: "Sol" },
                        { position: [4, 0], text: "Re" },
                        { position: [5, 0], text: "La" },
                        { position: [6, 0], text: "Mi" },
                    ]}
                />
            </Guitar.NeckContainer>
            <Text.P highlight={true} text="Esta es la afinacion estandar de guitarra, asegurate de afinar tu guitarra antes de continuar, para ello puedes encontrar tanto aplicaciones de moviles como webs, aqui unas recomendaciones:"/>
            <Container.List gap={2}>
               <Text.SimpleLink 
               href="https://tuner-online.com/es/"
               text="Afinador en linea - Tuner-Online"
               />
               <Text.SimpleLink 
               text="Aplicacion movil - GuitarTuna"
               href="https://play.google.com/store/apps/details?id=com.ovelin.guitartuna&hl=en_US&pli=1"
               />
            </Container.List>
            <Text.P text="Si ya esta afinada, deberia sonar similar a esto:"/>
            <Audio.ListItem filename="Afinacion-estandar.mp3"/>
        </Lesson.Segment>
    )
}

function Segment_2() {
    return (
        <Lesson.Segment>
            <Text.Title text="Notas en la guitarra" />
            <Text.P text="Casi todas las estructuras como intervalos, acordes, escalas y demas, se basan en alguna nota como centro de referencia, por ejemplo" />
            <Container.List>
                <Text.ListItem highlight={true} text="Improvisa en la escala de 'Do' menor" />
                <Text.ListItem highlight={true} text="Esta cancion esta en tonalidad de 'Mi' mayor" />
                <Text.ListItem highlight={true} text="Toca un acorde de 'La' menor" />
                <Text.ListItem highlight={true} text="Toca un bajo en 'Si'" />
            </Container.List>
            <Text.P text="Si conoces escalas, conoces acordes y demas, pero no conoces donde estan las notas en la guitarra, es muy probable que no puedas cumplir ninguna de estas ordenes, Conocer las notas musicales es saber donde estas parado" />
            <Text.P text="Cada nota musical Aparece repetidas veces por toda la guitarra, no es necesario aprender donde estan todas, pero si ubicarlas en ciertos lugares estrategicos que seran muy utiles a la hora de interpretar alguna cancion, comunicarte efectivamente y entender muchas de las cosas que se veran en siguiente lecciones con una mayor eficiencia." />
            <Text.P highlight={true} text="Estaria bien primero conocer las cuerdas 5 y 6 al aire 'Mi' y 'La':" />
            <Guitar.NeckContainer>
                <Guitar.Neck
                    fretRange={{ min: 0, max: 5 }}
                    highlight={["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]}
                    rootNote={"Mi"}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" }
                    ]}
                />
                <Guitar.Neck
                    fretRange={{ min: 0, max: 5 }}
                    highlight={["La"]}
                    fretMarkers={[
                        { position: [5, 0], text: "La" }
                    ]}
                />
            </Guitar.NeckContainer>
            <Text.P text="Ahora mira esta lista de notas musicales y fijate en los siguiente puntos:" />
            <Lesson.CellReferencer listType="notes" highlight={["Mi"]} />
            <Container.List>
                <Text.ListItem highlight={true} text="La nota resaltada es 'Mi'" />
                <Text.ListItem highlight={true} text="La nota que sigue despues de Mi es 'Fa'" />
                <Text.ListItem highlight={true} text="saltando el sostenido tenemos un 'Sol'" />
                <Text.ListItem highlight={true} text="saltando el siguiente sostenido tenemos un 'La'" />
            </Container.List>
            <Lesson.CellReferencer listType="notes" highlight={["Mi", "Fa", "Sol", "La"]} />
            <Container.Divider/>
            <Text.P text="En el mastil se veria reflejado de la misma manera, es muy visual, aprende a reconocerlo a la vista" />
            <Guitar.NeckContainer>
                <Guitar.Neck
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 5], text: "La" }
                    ]}
                    highlight={["Mi", "Fa", "Sol", "La"]}
                />
            </Guitar.NeckContainer>
            <Audio.ListItem filename="Mi-Fa-Sol-La.mp3"/>
            <Container.Divider />
            <Text.P text="En el caso de la quinta cuerda, osea en 'la' ocurre exactamente lo mismo, las distancias son iguales, la similitud visual se hace muy obvia" />
            <Lesson.CellReferencer
                customList={["La", "La#", "Si", "Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La"]}
                highlight={["La", "Si", "Do", "Re"]} />
            <Guitar.NeckContainer>
                <Guitar.Neck
                    fretMarkers={[
                        { position: [5, 0], text: "La" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5, 5], text: "Re" }
                    ]}
                    highlight={["La", "Si", "Do", "Re"]}
                />
            </Guitar.NeckContainer>
            <Audio.ListItem filename="La-Si-Do-Re.mp3"/>
        </Lesson.Segment>
    )
}

function Segment_3 () {
    return (
        <Lesson.Segment>
            <Text.Title text="Semitonos y alteraciones"/>
        </Lesson.Segment>
    )
}

function Segment_4 () {
    return (
        <Lesson.Segment>
            <Text.Title text="Aclaraciones sobre la afinacion"/>
        </Lesson.Segment>
    )
}

