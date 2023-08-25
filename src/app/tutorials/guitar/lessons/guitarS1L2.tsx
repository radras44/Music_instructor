import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonDivider, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { LessonIndicator } from "@/components/lessonComponents/lessonIndicator";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function GuitarS1L2({ title }: LessonComponent) {
    const alts = [
        {
            symbol: "#",
            name: "sostenido",
            casualMeaning: "Lo que esta justo delante algo.",
            formalMeaning: "Lo que esta un semitono mas alto que una nota o algo que represente una nota."
        },
        {
            symbol: "b",
            name: "bemol",
            casualMeaning: "Lo que está justo detras de algo.",
            formalMeaning: "Lo que esta un semitono mas bajo que una nota o algo que represente una nota."
        },
        {
            symbol: "♮",
            name : "becuadro",
            casualMeaning : "es mas que nada un recurso usado en las partituras, pero fuera de eso no lo veras casi nunca, por lo que en estas guias/lecciones no se usará.",
            formalMeaning : "Su funcion es eliminar una alteracion causadas por una armadura o nota antecesora, esto se aplica tanto en la nota en la que se usó el becuadro como en las demas que le siguen."
        }
    ]
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="Las notas musicales" />
                <LessonParagraph text="Las notas musicales con un nombre propio son las siguientes:" />
                <LessonIndicator customList={["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]} />
                <LessonParagraph text="son las que a casi todo el mundo les enseñan en el colegio, quiza conozcas otras, pero estas 7 son las que tienen un nombre propio. Ahora bien, ¿en que parte de la guitarra se encuentran estas notas?, eso depende de la afinacion" />
                <LessonSubtitle text="Afinacion" />
                <LessonParagraph text="La afinacion vendria a ser las notas en las que fijamos cada cuerda de nuestro instrumento al ser tocadas al aire, esto se hace tensando o la cuerda con las clavijas de la guitarra hasta que alcance la nota deseada, almenos en los instrumentos de cuerda." />
                <LessonParagraph text="Segun lo anterior, hay cientas de afinaciones distintas para cada instrumento, pero para no hacernos un lio casi siempre habra una afinacion estandar para cada instrumento, osea, un concenso de que todos usaremos la misma afinacion para no tener complicaciones y esta afinacion estara basada en la comodidad, aspectos teoricos o de utilidad para el musico, cuando decimos que hay que 'afinar la guitarra', nos referimos a afinarla con la 'afinacion estandar de guitarra', porque como ya dije, afinaciones hay tantas como combinaciones de notas y cuerdas haya." />
                <GuitarNeck
                    label="Afinacion estandar de la guitarra"
                    fretMarkers={[
                        { position: [1, 0], text: "Mi" },
                        { position: [2, 0], text: "Si" },
                        { position: [3, 0], text: "Sol" },
                        { position: [4, 0], text: "Re" },
                        { position: [5, 0], text: "La" },
                        { position: [6, 0], text: "Mi" },
                    ]}
                />
                <LessonAlert text={"Si quieres afinar tu guitarra puedes descargar un afinador desde tu movil o hacerlo a oido si es que tienes la capacidad para hacerlo"} severity="info" />
            </LessonBox>
            <LessonBox>
                <LessonSubtitle text="Alteraciones" />
                <LessonAlert text="Lo que se explicara a continuacion es de suma importancia, ignorarlo puede resultar en la incapacidad de comprender ciertos conceptos rapidamente y generar confusiones entre estos." />
                <LessonParagraph text="Seguro puede que te suenen notas como Do sostenido, o Mi bemol, quizas puedas preguntarte por que no las mencione antes puesto que tambien son notas musicales." />
                <LessonParagraph text="Si bien son notas musicales, estas no tienen un nombre propio, por lo tanto se usa una alteracion para poder señalarlas, do sostenido no es el nombre de una nota, Do sostenido es como decir 'algo que esta delante de Do', ni mas ni menos, es como si envez de que te llamaran por tu nombre te dijiera algo como : 'El que esta delante de juan' o 'el que esta parado al lado de la guitarra'" />
                <LessonParagraph text="En la siguiente tabla se mostrara la simbologia y definicion de los 3 tipos de alteraciones que existen como unidad" />
                <LessonDivider>
                    <TableContainer>
                        <Table>
                            <TableHead>
                                <TableRow>
                                    <TableCell>Nombre de alteracion</TableCell>
                                    <TableCell>Simbolo</TableCell>
                                    <TableCell>Definicion casual</TableCell>
                                    <TableCell width={300}>Definicion formal</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {alts.map((alt, index) => (
                                    <TableRow key={index}>
                                        <TableCell>{alt.name}</TableCell>
                                        <TableCell>{alt.symbol}</TableCell>
                                        <TableCell>{alt.casualMeaning}</TableCell>
                                        <TableCell>{alt.formalMeaning}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </LessonDivider>
                <LessonParagraph text="Los sostenidos y bemoles pueden apilarse entre si, son su propia unidad, se usan para indicar y nada mas, no hay que cometer el error de atribuirle otras reglas"/>
                <LessonAlert severity="info" text="El semitono es un concepto que se vera en la siguiente leccion" />
                <LessonParagraph text="Vale, entonces, para que nos sirve esto?, pues hay algunos sonidos entre las notas nombradas que no tienen un nombre propio" />
                <LessonIndicator
                    customList={["Do", " ", "Re", " ", "Mi", "Fa", " ", "Sol", " ", "La", " ", "Si", "Do"]}
                    limit={13}
                />
                <LessonParagraph text="Estos espacios en blanco son sonidos que estan entre ambas notas que podemos señalar haciendo uso del sostenido '#' y el bemol 'b'." />
                <LessonParagraph text="¿pero como se si puedo usar sostenido o bemol?, eso en un principio depende de cada uno, esto es un lenguaje, se usa el que tu sientas que es mejor para expresarte correctamente." />
                <LessonIndicator
                    label="indicando con sostenidos"
                    listType="notes"
                    limit={13}
                    indicators={["Do#", "Re#", "Fa#", "Sol#", "La#"]}
                />
                <LessonIndicator
                    label="indicando con bemoles"
                    listType="notes"
                    limit={13}
                    altType="b"
                    indicators={["Reb", "Mib", "Solb", "Lab", "Sib"]}
                />
            </LessonBox>
            <LessonBox>
                <LessonParagraph text="Si realmente has comprendido la funcion de una alteracion, deberias poder entender puntos como los siguientes que puedes sonar contradictorios para otras personas que mezclan esto con otros conceptos o practicas atribuyendole caracteristicas y reglas que las alteraciones no tienen"/>
                <LessonListItem text="las notas Mi# Si# Dob y Fab si existen, solo que no se suelen usar porque ya existen notas con un nombre propio en esas posiciones"/>
                <LessonListItem text="cosas como Labbb o Do## existen"/>
                <LessonListItem text="Otra forma de nombrar la nota Do seria La###, obviamente nunca hariamos eso por el mismo motivo que mencione en el punto uno"/>
                <LessonAlert severity="info" text="Aqui pondre nuevamente un diagrama con las notas musicales para que puedas razonar estos puntos que acabo de mencionar."/>
                <LessonIndicator
                    listType="notes"
                    limit={13}
                />
            </LessonBox>
        </LessonContainer>
    )
}