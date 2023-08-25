import { LessonContainer, LessonParagraph, LessonTitle, LessonBox, LessonSubtitle, LessonAlert } from "@/components/lessonComponents/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { LessonIndicator } from "@/components/lessonComponents/lessonIndicator";

export default function GuitarS1L3({ title }: LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="El semitono" />
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
                <LessonParagraph text="Esto es independiente de la nota en la que comience, el punto de referencia podria ser Re# y seria lo mismo" />
                <LessonIndicator
                    label="dos semitonos desde Re#"
                    listType="notes"
                    indicators={["Re#", "Fa"]}
                />
                <LessonIndicator
                    label="tres semitonos desde Re#"
                    listType="notes"
                    indicators={["Re#", "Fa#"]}
                />
                <LessonParagraph text="Tambien existe el tono, que es una unidad que vale 2 semitonos" />
                <LessonIndicator
                    label="un tono desde Do (2 semitonos)"
                    listType="notes"
                    indicators={["Do", "Re"]}
                />
                <LessonIndicator
                    label="dos tonos desde Do (4 semitonos)"
                    listType="notes"
                    indicators={["Do", "Mi"]}
                />
                <LessonParagraph text="Cuanto recorrer 12 semitonos llegaras a la misma nota con la que partiste solo que mas aguda, si contaras 12 semitonos hacia atras llegaria tambien a la misma nota, pero mas grave."/>
                <LessonAlert severity="info" text="A esto tambien se le llama 'Octava', en este caso '1 octava mas aguda', este es un intervalo musical, tema que se trata en lecciones posteriores."/>
                <LessonIndicator
                limit={13}
                indicators={["Do"]}
                />
            </LessonBox>
        </LessonContainer>
    )
}