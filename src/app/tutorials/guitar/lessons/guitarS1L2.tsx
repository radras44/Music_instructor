import { GuitarNeck } from "@/components/guitar";
import { LessonContainer, LessonIndicator, LessonListItem, LessonParagraph, LessonTitle, LessonSubtitle, LessonBox, LessonDivider } from "@/components/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Box, List, ListItem } from "@mui/material";

export default function GuitarS1L2({ title }: LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="Un intervalo se referiere a una distancia, para poder medir esta distancia se utilizan unidades de medida, por ejemplo:" />
                <LessonDivider>
                    <LessonListItem
                        text="el metro como unidad para medir la distancia entre un punto del espacio y otro"
                    />
                    <LessonListItem
                        text="el segundo como unidad para pedir la distancia entre un punto del timepo y otro"
                    />
                    <LessonListItem
                        text="el semitono como unidad para medir la distancia entre una nota musical y otra"
                    />
                </LessonDivider>
            </LessonBox>
            <LessonBox>
                <LessonParagraph text="el semitono vendria a ser la unidad minima de distancia entre una nota y otra, o porlomenos entre las notas que conocemos y usamos de forma estandarizada, aqui hay unos ejemplos usando la nota Do como punto de referencia para calcular los semitonos." />
                <LessonIndicator
                    label="un semitono"
                    listType="notes"
                    indicators={["Do", "Do#"]}
                />
                <LessonIndicator
                    label="dos semitonos"
                    listType="notes"
                    indicators={["Do", "Re"]}
                />
                <LessonIndicator
                    label="tres semitonos"
                    listType="notes"
                    indicators={["Do", "Re#"]}
                />
            </LessonBox>
            <LessonBox>
                <LessonParagraph text="Esto es independiente de la nota en la que comience, esto serian 3 semitonos pero partiendo desde la nota Re, es importante siempre recordas la nota desde la cual estamos calculando:" />
                <LessonIndicator
                    label="tres semitonos desde Re"
                    listType="notes"
                    indicators={["Re", "Fa"]}
                />
            </LessonBox>
            <LessonBox>
                <LessonParagraph text="Al igual que en las unidades de medida del tiempo, donde 60 segundos forman un minuto, que es una unidad de medida para tiempos mas largos, en musica tambien existe el tono, 1 tono es igual a 2 semitonos, pero en lo que nos concierte usaremos el semitono, ya que es mas practico en casi todas las ocasciones, pero no esta demas apuntarse esto:" />
                <LessonIndicator
                    label="un tono desde Re (2 semitonos)"
                    listType="notes"
                    indicators={["Do", "Re"]}
                />
                <LessonIndicator
                    label="dos tonos desde Do (4 semitonos)"
                    listType="notes"
                    indicators={["Do", "Mi"]}
                />
                <LessonIndicator
                    label="tres tonos desde Do (6 semitonos)"
                    listType="notes"
                    indicators={["Do", "Fa#"]}
                />
                <LessonIndicator
                    label="tres tonos desde Re# (6 semitonos)"
                    listType="notes"
                    indicators={["Re#", "Si"]}
                />
            </LessonBox>
        </LessonContainer>
    )
}