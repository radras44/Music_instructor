import { GuitarNeck } from "@/components/lessonComponents/guitar";
import { LessonAlert, LessonBox, LessonContainer, LessonDivider, LessonListItem, LessonParagraph, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/widgets";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { LessonIndicator } from "@/components/lessonComponents/indicator";
import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from "@mui/material";

export default function ({ title }: LessonComponent) {
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
            name: "becuadro",
            casualMeaning: "es mas que nada un recurso usado en las partituras, pero fuera de eso no lo veras casi nunca, por lo que en estas guias/lecciones no se usará.",
            formalMeaning: "Su funcion es eliminar una alteracion causadas por una armadura o nota antecesora, esto se aplica tanto en la nota en la que se usó el becuadro como en las demas que le siguen."
        }
    ]
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonSubtitle text="Notas musicales" />
                <LessonParagraph text="Hay dos tipos de notas musicales, las que tienen nombre propio, y las que no" />
                <LessonParagraph text="Las notas musicales con un nombre propio son las siguientes:" />
                <LessonIndicator customList={["Do", "Re", "Mi", "Fa", "Sol", "La", "Si"]} />
                <LessonParagraph text="Aparte de estas tambien se encuentras las notas que no tienen un nombre y por lo tanto deben señalarse usando alteraciones:" />
                <LessonSubtitle text="Alteraciones" />
                <LessonAlert text="Lo que se explicara a continuacion es de suma importancia, ignorarlo puede resultar en la incapacidad de comprender ciertos conceptos rapidamente y generar confusiones entre estos." />
                <LessonParagraph text="Seguro puede que notas como Do sostenido, o Si bemol suenen conocidas para algunas personas, como se puede apreciar, estas son notas nombradas acompañadas de 'bemol' o 'sostenido', estos son dos tipos de alteraciones que modifican la altura de la nota, sostenido significa señalar la nota que esta justo delante, mientras que bemol se usa para señalar la nota justo detras" />
                <LessonParagraph text="Una analogia simple para entenderlo mejor es pensar en una fila de personas, si quiero señalas a un amigo, seguro puedo llamarlo por su nombre, por ejemeplo: 'juan', pero si quisiera señalar a la persona delante de juan, no se su nombre, por lo cual tengo que decir 'la persona que esta delante de juan', lo mismo ocurre con las notas y las alteraciones." />
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
                <LessonAlert severity="info" text="El semitono es un concepto que se vera en la siguiente leccion" />
                <LessonParagraph text="Los sostenidos y bemoles 'pueden apilarse' entre si, son su propia unidad, se usan para indicar y nada mas, no hay que cometer el error de atribuirle otras reglas" />
                <LessonParagraph text="¿Donde puede resultar util el señalar con alteraciones alguna nota?, pues hay algunos sonidos entre las 12 notas musicales que no tienen un nombre propio, estos se disponen de la siguiente forma:" />
                <LessonIndicator
                    customList={["Do", " ", "Re", " ", "Mi", "Fa", " ", "Sol", " ", "La", " ", "Si", "Do"]}
                    limit={13}
                />
                <LessonParagraph text="podemos señalar estos espacios vacios haciendo uso del sostenido '#' y el bemol 'b'." />
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
                <LessonParagraph text="'¿Cuando debo señalar con bemol y cuando debo señalar con sostenido?': Eso depende de cada uno, esto es parte de un lenguaje, hay varias formas de decir lo mismo, todo depende del criterio de cada uno, a medida que uno estudia musica va adquiriendo el criterio necesario para porder entender bien el contexto y saber cual de los dos es mejor usar en cada situacion." />
                <LessonParagraph text="Si realmente has comprendido la funcion de una alteracion, deberias poder entender los siguientes puntos, en caso contrario puede ser que tuvieras algun conocimiento previo pero incompleto sobre sostenido o bemoles y lo has mezclado con las definiciones ya expuestas, cosa que como ya dije, no deberias hacer:" />
                <LessonListItem text="las notas Mi# Si# Dob y Fab si existen, solo que no se suelen usar porque ya existen notas con un nombre propio en esas posiciones" />
                <LessonListItem text="notas como Labbb o Do## tambien existen" />
                <LessonListItem text="Otra forma de nombrar la nota Do seria La###, obviamente nunca se hace porque ya tiene un nombre propio." />
                <LessonAlert severity="info" text="Aqui pondre nuevamente un diagrama con las notas musicales para que puedas razonar estos puntos que acabo de mencionar." />
                <LessonIndicator
                    listType="notes"
                    limit={13}
                />
            </LessonBox>
            <LessonBox>
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
        </LessonContainer>
    )
}