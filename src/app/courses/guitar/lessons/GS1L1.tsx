import { GuitarNeck } from "@/components/lessonComponents/guitarNeck";
import { LListItem, LParagraph, LSegment, LSubtitle } from "@/components/lessonComponents/widgets";
import { useNeckQuestionModal, NeckQuestionModal } from "@/components/lessonComponents/NeckquestionModal";
import { LessonLayout } from "@/components/lessonComponents/layout";
import { questions_1, questions_2,questions_3 } from "./GS1L1Q";
import LNeckContainer from "@/components/lessonComponents/containers";
import {createElement} from "react"
import { genSegments } from "@/utils/componentUtils";

const segments = genSegments([Segment_1,Segment_2,Segment_3])

export default function GS1L1 () {
    return <LessonLayout segments={segments}/>
}

function Segment_1() {
    const questionModal_1 = useNeckQuestionModal(questions_1)
    return (
        <LSegment>
            <LSubtitle text="Lectura de diagramas" />
            <LParagraph text="La lectura de diagrama es util para poder replicar acordes, melodias, escalas y otras estructuras musicales en la guitarra, para poder leer un diagrama correctamente deben tenerse en cuenta estos puntos:" />
            <LListItem text="'mientras mas fina' es una cuerda, 'mas agudo/alto' sera su sonido, 'mientras mas gruesa' es una cuerda, 'mas grave/bajo' sera su sonido" />
            <LListItem text="'Las cuerdas se cuentan desde la mas aguda a la mas grave', osea que la cuerda mas fina es la numero 1, y la cuerda mas grave es numero 6" />
            <LParagraph text="Aqui hay una plantilla de diagrama de guitarra con las indicaciones del numero de cada cuerda:" />
            <GuitarNeck
                showFretLabels={false}
                fretMarkers={[
                    { position: [6, 0], text: "6" },
                    { position: [5, 0], text: "5" },
                    { position: [4, 0], text: "4" },
                    { position: [3, 0], text: "3" },
                    { position: [2, 0], text: "2" },
                    { position: [1, 0], text: "1" },
                ]}
            />
            <NeckQuestionModal
            useObj={questionModal_1}
            title="Cuerdas"
            description="Reconocer e indicar la cuerda segun el numero correspondiente"
            />
        </LSegment>
    )
}

function Segment_2() {
    return (
        <LSegment>
            <LParagraph text="Para indicar una posicion en el diagrama tenemos que indicar tanto la cuerda como el traste especifico, aqui hay algunos ejemplos:" />
            <LNeckContainer>
                <GuitarNeck
                    label="cuerda 6 traste 3"
                    neckRange={[0, 5]}
                    fretMarkers={[{ position: [6, 3] }]}
                />
                <GuitarNeck
                    label="cuerda 1 traste 2"
                    neckRange={[0, 5]}
                    fretMarkers={[{ position: [1, 2] }]}
                />
            </LNeckContainer>


            <LParagraph text="En caso de tocar la cuerda sin presionar ningun traste, se dice que esta siendo tocada al aire:" />
            <LNeckContainer>
                <GuitarNeck
                    label="cuerda 6 al aire"
                    neckRange={[0, 5]}
                    fretMarkers={[{ position: [6, 0] }]}
                />
                <GuitarNeck
                    label="cuerda 5 al aire"
                    neckRange={[0, 5]}
                    fretMarkers={[{ position: [5, 0] }]}
                />
            </LNeckContainer>

            <LParagraph text="Siempre es recomendable fijarse en el rango de trastes que esta representando el diagrama para no interpretar todo de forma desplazada:" />
            <LNeckContainer>
                <GuitarNeck
                    label="diagrama con trastes del 1 al 5"
                    neckRange={[0, 5]}
                />
                <GuitarNeck
                    label="diagrama con trastes del 4 al 9"
                    neckRange={[4, 9]}
                />
            </LNeckContainer>
        </LSegment>
    )
}

function Segment_3() {
    const questionModal_3 = useNeckQuestionModal(questions_3)
    return (
        <LSegment>
            <NeckQuestionModal
            useObj={questionModal_3}
            title="Lectura de diagramas"
            description="indicar en el mastil segun un numero de cuerda y traste"
            />
        </LSegment>
    )
}