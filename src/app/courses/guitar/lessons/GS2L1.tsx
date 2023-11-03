import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonListItem, LessonParagraph, LessonTitle } from "@/components/lessonComponents/widgets";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box } from "@mui/material";

export default function ({ title }: LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonListItem text="Existen 12 intervalos musicales principales" />
                <LessonListItem text="cada intervalo equivale a un numero de semitonos" />
                <LessonListItem text="a diferencia de calcular distancia con semitonos, el intervalo describe la relacion entre dos notas" />
                <LessonParagraph text="Esto ultimo es lo mas importante y puede ser un poco complicado de entender, por lo que aqui va un ejemplo:" />
                <LessonParagraph text="si calculamos 3 semitonos desde la nota Mi obtendremos este resultado:" />
                <GuitarNeck
                    neckRange={[0, 5]}
                    highlight={["Sol"]}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 3], text: "Sol" }
                    ]}
                />
                <LessonParagraph text="Ahora bien, existe un intervalo musical llamado '3ra menor' el cual tambien equivale a 3 semitonos, por lo que de la misma manera, caera en Sol." />
                <GuitarNeck
                    label="3ra menor de mi"
                    neckRange={[0, 5]}
                    highlight={["Sol"]}
                    fretMarkers={[
                        { position: [6, 0], text: "Mi" },
                        { position: [6, 3], text: "Sol" },
                    ]}
                />
                <LessonParagraph text="Pero a diferencia de simplemente calcular semitonos, esto describe la relacion entre Mi como nota fundamental y Sol como la tercera menor de Mi." />
                <LessonAlert severity="info" text="Nota fundamental es lo mismo que decir, nota base, nota raiz o 
                tonica"/>
                <LessonParagraph text="Entonces, ¿que significa esto en terminos practicos?, pues significa que:" />
                <LessonListItem text="Puedo usar cualquier Mi y Sol que quiera" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [3, 0], text: "Sol" },
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [4, 2], text: "Mi" },
                            { position: [3, 0], text: "Sol" },
                        ]}
                    />
                </Box>
                <LessonListItem text="No importa la distancia a la que estén o si el 'Sol' es más grave que el 'Mi'" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [4, 5], text: "Sol" },
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [1, 0], text: "Mi" },
                            { position: [3, 0], text: "Sol" },
                        ]}
                    />
                </Box>
                <LessonListItem text="Tampoco importa si la fundamental (Mi) o la tercera menor (Sol) se repiten" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [3, 0], text: "Sol" },
                            { position: [4, 2], text: "Mi" },
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["Sol"]}
                        fretMarkers={[
                            { position: [1, 0], text: "Mi" },
                            { position: [3, 0], text: "Sol" },
                            { position: [6, 3], text: "Sol" },
                        ]}
                    />
                </Box>
                <LessonParagraph text="Incluso puedo hacer aberraciones intocables como esta:" />
                <GuitarNeck
                    label="3ra menor de mi"
                    neckRange={[0, 5]}
                    highlight={["Sol"]}
                    fretMarkers={[
                        { position: [1, 0], text: "Mi" },
                        { position: [2, 5], text: "Mi" },
                        { position: [3, 0], text: "Sol" },
                        { position: [6, 3], text: "Sol" },
                        { position: [4, 2], text: "Mi" },
                    ]}
                />
                <LessonParagraph text="Y seguiría siendo una 3ra menor de Mi, porque el intervalo se sigue manteniendo" />
            </LessonBox>
            <LessonBox>
                <LessonParagraph text="Todo esto está muy bien, pero cuando hablamos de intervalos, cuando hablamos de la relación entre las notas, es más correcto usar la nomenclatura de los intervalos, aquí hay un ejemplo" />
                <LessonAlert severity="info" text="La nomenclatura de los intervalos se irá trabajando en las siguientes lecciones"/>
                <LessonListItem text="La 3ra menor se simboliza como 'b3'" />
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [6, 3], text: "b3" },
                        ]}
                    />
                    <GuitarNeck
                        label="3ra menor de mi"
                        neckRange={[0, 5]}
                        highlight={["b3"]}
                        fretMarkers={[
                            { position: [6, 0], text: "Mi" },
                            { position: [4, 0], text: "b3" },
                        ]}
                    />
                </Box>
            </LessonBox>
        </LessonContainer>
    );
    
}