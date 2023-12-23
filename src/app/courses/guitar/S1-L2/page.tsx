"use client"
import Guitar from "@/components/Guitar"
import Lesson from "@/components/Lesson"
import NeckTest from "@/components/modals/NeckTest"
import { Alert, Box, Button, Link } from "@mui/material"
import { stringTestQuestions, fretTestQuestions } from "../S1-L1/questions"
import useSound from "use-sound"
import { genSegments } from "@/utils/componentUtils"
import Text from "@/components/Text"
import Audio from "@/components/Audio"
import Container from "@/components/Container"
import { noteTest1Q,noteTest2Q } from "./questions"
const segments = genSegments([Segment_1, Segment_2, Segment_3])

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
            <Text.P highlight={true} text="Esta es la afinacion estandar de guitarra, asegurate de afinar tu guitarra antes de continuar, para ello puedes encontrar tanto aplicaciones de moviles como webs, aqui unas recomendaciones:" />
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
            <Text.P text="Si ya esta afinada, deberia sonar similar a esto:" />
            <Audio.ListItem filename="Afinacion-estandar.mp3" />
        </Lesson.Segment>
    )
}

function Segment_2() {
    const noteTest_1 = NeckTest.useModal(noteTest1Q)
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
            <Text.P text="Si conoces escalas, acordes y demás, pero no sabes dónde están las notas en la guitarra, es muy probable que no puedas cumplir ninguna de estas órdenes. Conocer las notas musicales es saber dónde estás parado.
Cada nota musical aparece repetidas veces por toda la guitarra. No es necesario aprender dónde están todas, pero sí ubicarlas en ciertos lugares estratégicos que serán muy útiles a la hora de interpretar alguna canción, comunicarte efectivamente y entender muchas de las cosas que se verán en las siguientes lecciones con una mayor eficiencia.
Estaría bien primero conocer las cuerdas 5 y 6 al aire 'Mi' y 'La'." />
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
            <Container.Divider />
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
            <Audio.ListItem filename="Mi-Fa-Sol-La.mp3" />
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
            <Audio.ListItem filename="La-Si-Do-Re.mp3" />
            <Text.P text="Finalmente estas son las posiciones que te recomiendo memorizar en un inicio para no tener problemas, pero lo ideal seria memorizarla en todo el mastil, aunque ya veras que gracias a otros recursos es muy facil calcular donde se encuentra una nota en cualquier lugar del mastil solo conociendo estas posiciones:"/>
            <Guitar.NeckContainer>
            <Guitar.Neck
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 5], text: "La" },
                        { position: [5, 0], text: "La" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5, 5], text: "Re" },
                        { position: [4, 2], text: "Mi" }
                    ]}
                />
            </Guitar.NeckContainer>
            <NeckTest.Modal
            useObj={noteTest_1}
            title="Notas en la guitarra 1"
            description="Identificar las notas en la guitarra tomando en cuenta solo las 7 notas con un nombre propio [do, re ,mi, fa, sol, la, si]"
            />
        </Lesson.Segment>
    )
}

function Segment_3() {
    const noteTest_2 = NeckTest.useModal(noteTest2Q)
    return (
        <Lesson.Segment>
            <Text.Title text="Semitonos y alteraciones" />
            <Text.P text="Las alteraciones se usar para indicar un semitono adelante o atras de una nota" />
            <Text.ListItem highlight={true} text="'Bemol': Su simbolo es 'b', significa: 'un semitono por detras de ..., o, lo que esta atras de ...'" />
            <Text.ListItem highlight={true} text="'Sostenido': Su simbolo es '#', significa: 'un semitono por encima de ..., o, lo que esta delante de ...'" />
            <Text.P highlight text="Debes recordar que, en el fondo, estas son sus únicas funciones, nada más. Las alteraciones se aplican en distintos contextos como la melodía, armonía, escalas, algunas nomenclaturas y en la lectura musical. Esto hace que a veces parezca que tienen otra función o que están limitadas a ciertas reglas. Esto, igual, depende de quien te lo enseñe; le dará un enfoque distinto. Por lo tanto, lo único que tienes que recordar siempre que veas '♭' o '#' es que: 'sostenido es sumar un semitono y bemol es restar'." />
            <Text.P text="Eh visto a mucha gente darle mas complejidad o restriccion al tema de las alteraciones por lo que dare unos cuantos ejemplos para que quede bien clara su funcion" />
            <Container.Divider margin={50} />
            <Lesson.CellReferencer
                customList={["Do", "?", "Re"]}
            />
            <Text.P text="Entre Do y Re al igual que entre otras notas, hay espacio vacio, hay una nota ahi, pero no tiene nombre, para señalar esa nota sin nombre usamos el sostenido o el bemol" />
            <Lesson.CellReferencer
                customList={["Do", "Do#", "Re"]}
                highlight={["Do#"]}
            />
            <Text.P text="o podria usar bemol para señalarlo, haciendo referencia a lo que esta detras de Re" />
            <Lesson.CellReferencer
                customList={["Do", "Reb", "Re"]}
                highlight={["Reb"]}
            />
            <Text.P highlight={true} text="Entonces podrías preguntar: '¿Y cómo sé cuándo usar sostenido y cuándo usar bemol?' Eso depende de tu criterio. La música es un lenguaje; tienes que usar lo que crees que es más entendible y acorde a la situación. Irás desarrollando ese criterio con el tiempo, pero cualquiera de los dos sirve en todos los casos. 'Es como usar adjetivos', significan lo mismo. Solo que, en algunas ocasiones, es más adecuado usar uno en vez del otro. Como dije, eso lo desarrollarás con el tiempo." />
            <Container.Divider margin={50} />

            <Lesson.CellReferencer
                customList={["La", "-", "Si", "Do"]}
            />
            <Text.P text="En este caso de muestran las notas que estan detras de Do, En este caso la nota detras es Si, tiene un nombre propio por lo que no hace falta usar nada mas que su nombre para señalarla, pero supongamos que tuviera que señalarla de otra forma" />
            <Lesson.CellReferencer
                customList={["La", "-", "Dob", "Do"]}
                highlight={["Dob"]}
            />
            <Text.P text="¿Puedo hacer esto?, pues claro que si, se señala lo que esta detras de Do, claro que no es conveniente porque esta nota ya tiene un nombre propio (Si) asique es un poco inutil usar esto, pero es solo un ejemplo" />
            <Text.P text="Ahora imagina que hay que señalar lo que esta 'detras, de la nota detras de Do', osea, atras atras de Do, ¿como lo hago?" />
            <Lesson.CellReferencer
                customList={["La", "Dobb", "Dob", "Do"]}
                highlight={["Dobb"]}
            />
            <Text.P text="y ya está, son apilables, podria indicar el La como 'Dobbb', nada de esto es conveniente obviamente, pero esto es para que sepas que se puede hacer, y que quede bien en claro que el efecto de una alteracion siempre será el que es" />
            <Container.Divider margin={50} />
            <Text.SubTitle text="Finalmente" />
            <Text.P text="Pasando a las notas en la guitarra" />
            <Guitar.NeckContainer>
                <Guitar.Neck
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 5], text: "La" },
                        { position: [5, 0], text: "La" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5, 5], text: "Re" }
                    ]}
                />
            </Guitar.NeckContainer>
            <Text.P text="Despues de esta explicacion un poco redundante deberias saber como encontrar los sostenidos/bemoles de cada nota, no tienes que memorizarlos, simplemente es buscar una nota y señalar atras o adelante"/>
            <Guitar.NeckContainer>
                <Guitar.Neck
                name="Con sostenidos"
                fretRange={{min : 0,max : 7}}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 2], text: "Fa#" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 4], text: "Sol#" },
                        { position: [6, 5], text: "La" },
                        { position: [6,6], text: "La#" },
                        { position: [5, 0], text: "La" },
                        { position: [5,1], text: "La#" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5,4], text: "Do#" },
                        { position: [5, 5], text: "Re" },
                        { position: [5,6], text: "Re#" },
                    ]}
                />
                <Guitar.Neck
                name="Con bemoles"
                fretRange={{min : 0,max : 7}}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 1], text: "Fa" },
                        { position: [6, 2], text: "Solb" },
                        { position: [6, 3], text: "Sol" },
                        { position: [6, 4], text: "Lab" },
                        { position: [6, 5], text: "La" },
                        { position: [5, 0], text: "La" },
                        { position: [5,1], text: "Sib" },
                        { position: [5, 2], text: "Si" },
                        { position: [5, 3], text: "Do" },
                        { position: [5,4], text: "Reb" },
                        { position: [5, 5], text: "Re" },
                    ]}
                />
            </Guitar.NeckContainer>
            <NeckTest.Modal
            useObj={noteTest_2}
            title="Notas en la guitarra 2"
            description="Identificar las 12 notas musicales en la guitarra"
            />
        </Lesson.Segment>
    )
}