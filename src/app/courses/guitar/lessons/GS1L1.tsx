import Guitar from "@/components/Guitar";
import { chartReadingTestQuestions, stringTestQuestions,fretTestQuestions } from "./GS1L1Q";
import Lesson from "@/components/Lesson";
import { genSegments } from "@/utils/componentUtils";
import { Alert, Typography } from "@mui/material";
import Text from "@/components/Text";
import styles from "@/styles/styles"
import NeckTest from "@/components/modals/NeckTest";

const segments = genSegments([Segment_1, Segment_2])

export default function GS1L1() {
    return <Lesson.Layout segments={segments} />
}

function Segment_1() {
    const stringTest = NeckTest.useModal(stringTestQuestions)
    return (
        <Lesson.Segment>
            <Text.Title text="Lectura de diagramas"/>
            <Text.SubTitle text="Cuerdas"/>
            <Text.P text="La lectura de diagrama es util para poder replicar acordes, melodias, escalas y otras estructuras musicales en la guitarra, para poder leer un diagrama correctamente deben tenerse en cuenta estos puntos:" />
            <Text.ListItem highlight={true} text="mientras mas fina es una cuerda, mas 'agudo/alto' sera su sonido, 'mientras mas gruesa' es una cuerda, mas 'grave/bajo' sera su sonido" />
            <Text.ListItem highlight={true} text="'Las cuerdas se cuentan desde abajo hacia arriba', de las mas aguda a la mas grave" />
            <Text.P text="Aqui hay una plantilla de diagrama de guitarra con las indicaciones del numero de cada cuerda:" />
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
                description="Reconocer e indicar la cuerda segun el numero correspondiente"
            />
        </Lesson.Segment>
    )
}

function Segment_2 () {
    const fretTest = NeckTest.useModal(fretTestQuestions)
    return (
        <Lesson.Segment>
            <Text.SubTitle text={"Trastes"}/>
            <Text.P text="Los trastes son los espacios o huecos entre barras que hay en el mastil, dependiendo la guitarra estas pueden tener en promedio de 20 a 24 trastes:"/>
            <Alert severity="info">Enrealidad un traste es la barra entre espacio y espacio, pero es mas util pensar en ellos como el espacio antes de la barra</Alert>
            <Text.ListItem highlight={true} text="Los trastes se numeran de izquierda a derecha"/>
            <Text.ListItem highlight={true} text="si no se presiona ningun traste se denomina como 'cuerda al aire' o de manera mas informal, un 'traste 0'."/>
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

