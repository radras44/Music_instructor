import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LListItem, LParagraph, LSegment, LSubtitle } from "@/components/lessonComponents/widgets";
import QuestionModal, { QuestionModalButton, useQuestionModal } from "@/components/lessonComponents/questionModal";
import {LessonLayout} from "@/components/lessonComponents/layout";
import { questions_1 } from "./GS1L1Q";
import LNeckContainer from "@/components/lessonComponents/containers";

const segments : JSX.Element[] = [<Segment_1/>,<Segment_2/>,<Segment_3/>]

export default function () {
    return (
        <LessonLayout
            segments={segments}
        />
    )
}


function Segment_1() {
    return (
        <LSegment>
            <LSubtitle text="Lectura de diagramas" />
            <LParagraph text="La guitarrra convencionalmente tiene 6 cuerdas, cada una de estas cuerdas se encuentra en un mastil de madera, este mastil se separa en varios espacios los cuales tienen que ser presionados para marcar notas especificas, a estos espacios se les llama 'trastes':" />
            <LParagraph text="Tanto las cuerdas como los trastes se pueden representar en un 'Diagrama de mastil' el cual servira ejemplificar muchas estructuras o elementos de la musica aplicadas a la guitarra, como acordes, intervalos, escalas, ideas musicales, entre otros, devido a esto es importante saber 'interpretar/leer' cualquier diagrama que te pongan enfrente." />
            <LListItem text="Las cuerdas se cuentan desde la 'mas aguda a la mas grave', no alrrevez, osea que la cuerda mas fina es la numero 1, y la cuerda mas grave es numero 6" />
            <LListItem text="Los trastes se enumeran de izquierda a derecha" />
            <LParagraph text="Aqui hay una plantilla de diagrama de guitarra como ejemplo:" />
            <GuitarNeck
                fretMarkers={[
                    { position: [6, 0], text: "6" },
                    { position: [5, 0], text: "5" },
                    { position: [4, 0], text: "4" },
                    { position: [3, 0], text: "3" },
                    { position: [2, 0], text: "2" },
                    { position: [1, 0], text: "1" },
                ]}
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
    const questionModal = useQuestionModal()
    return (
        <LSegment>
            <QuestionModal
                questions={questions_1}
                open={questionModal.showQuestionModal}
                onClose={questionModal.closeQuestionModal} />
            <QuestionModalButton onClick={questionModal.openQuestionModal}>
                Iniciar practica : Diagrama de mastil
            </QuestionModalButton>
        </LSegment>
    )
}