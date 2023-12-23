"use client"
import Guitar from "@/components/Guitar";
import { chartReadingTestQuestions, stringTestQuestions,fretTestQuestions } from "./questions";
import Lesson from "@/components/Lesson";
import { genSegments } from "@/utils/componentUtils";
import { Alert, Modal, Typography } from "@mui/material";
import Text from "@/components/Text";
import styles from "@/styles/styles"
import NeckTest from "@/components/modals/NeckTest";

const segments = genSegments([Segment_1, Segment_2,Segment_3])

export default function GS1L1() {
    return <Lesson.Layout segments={segments} />
}

function Segment_1() {
    const stringTest = NeckTest.useModal(stringTestQuestions)
    return (
        <Lesson.Segment>
            <Text.Title text="Cuerdas"/>
            <Text.P text="La lectura de diagrama es util para poder replicar acordes, melodias, escalas y otras estructuras musicales en la guitarra, para poder leer un diagrama correctamente deben tenerse en cuenta estos puntos:" />
            <Text.ListItem highlight={true} text="mientras mas fina es una Cuerda, mas 'agudo/alto' sera su sonido, 'mientras mas gruesa' es una Cuerda, mas 'grave/bajo' sera su sonido" />
            <Text.ListItem highlight={true} text="'Las Cuerdas se cuentan desde abajo hacia arriba', de las mas aguda a la mas grave" />
            <Text.P text="Aqui hay una plantilla de diagrama de guitarra con las indicaciones del numero de cada Cuerda:" />
            <Guitar.NeckContainer fontSize={10}>
                <Guitar.Neck
                    hiddeFretNumbers={true}
                    fretMarkers={[
                        { position: [6, 0], text: "6" },
                        { position: [5, 0], text: "5" },
                        { position: [4, 0], text: "4" },
                        { position: [3, 0], text: "3" },
                        { position: [2, 0], text: "2" },
                        { position: [1, 0], text: "1" },
                    ]}
                />
            </Guitar.NeckContainer>
            <NeckTest.Modal
                useObj={stringTest}
                title="Cuerdas"
                description="Reconocer e indicar la Cuerda segun el numero correspondiente"
            />
        </Lesson.Segment>
    )
}

function Segment_2 () {
    const fretTest = NeckTest.useModal(fretTestQuestions)
    return (
        <Lesson.Segment>
            <Text.Title text={"Trastes"}/>
            <Text.P text="Los trastes son los espacios o huecos entre barras que hay en el mastil, dependiendo la guitarra estas pueden tener en promedio de 20 a 24 trastes:"/>
            <Alert severity="info">Enrealidad un traste es la barra entre espacio y espacio, pero es mas util pensar en ellos como el espacio antes de la barra</Alert>
            <Text.ListItem highlight={true} text="Los trastes se numeran de izquierda a derecha"/>
            <Text.ListItem highlight={true} text="si no se presiona ningun traste se denomina como 'Cuerda al aire' o de manera mas informal, un 'traste 0'."/>
            <Guitar.NeckContainer>
                <Guitar.Neck/>
            </Guitar.NeckContainer>
            <NeckTest.Modal 
            hiddeFretNumbers={true}
            useObj={fretTest}
            title="Trastes"
            description="Ubicar los trastes segun un numero dado"
            />
        </Lesson.Segment>
    )
}

function Segment_3 () {
    const chartReadingTest = NeckTest.useModal(chartReadingTestQuestions)
    return (
        <Lesson.Segment>
            <Text.Title text="Lectura de cuarda y traste"/>
            <Text.P text="Al conocer como indicar Cuerdas y trastes puedes ubicar una interseccion entre estos dos, por ejemplo:"/>
            <Guitar.NeckContainer fontSize={9}>
                <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[1,2]}
                ]}
                name = "Cuerda 1 traste 2"
                />
                <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[1,1]}
                ]}
                name = "Cuerda 1 traste 1"
                />
                <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[1,0]}
                ]}
                name = "Cuerda 1 al aire"
                />
                      <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[6,0]}
                ]}
                name = "cuerda 6 al aire"
                />
                <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[6,5]}
                ]}
                name = "Cuerda 6 traste 5"
                />
                <Guitar.Neck
                fretRange={{min:0,max:5}}
                fretMarkers={[
                    {position:[5,5]}
                ]}
                name = "Cuerda 5 traste 5"
                />
            </Guitar.NeckContainer>
            <NeckTest.Modal
            useObj={chartReadingTest}
            title="Lectura de diagramas"
            description="Identificar tanto la cuarda como el traste"
            />
        </Lesson.Segment>
    )
}

