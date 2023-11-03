import { Course} from "@/interfaces/baseInterfaces";
import GS1L1 from "./lessons/GS1L1";
import GS1L2 from "./lessons/GS1L2";
import GS1L3 from "./lessons/GS1L3";
import GS1L4 from "./lessons/GS1L4";
import GS1L5 from "./lessons/GS1L5";
import GS2L1 from "./lessons/GS2L1";
import GS2L2 from "./lessons/GS2L2";
import GS2L3 from "./lessons/GS2L3";
import GS2L4 from "./lessons/GS2L4";
import GS2L5 from "./lessons/GS2L5";
import GS2L6 from "./lessons/GS2L6";
import GS2L7 from "./lessons/GS2L7";

const guitarCourse : Course = {
    name : "Curso de guitarra",
    pathName : "guitar",
    sections : [
        {
            name : "Conceptos teoricos iniciales",
            id : 1,
            lessons: [
                {
                    name : "Conceptos indispensables",
                    id : 1,
                    description : "repaso de algunos conceptos obligatorios que debes saber antes de continuar con las siguientes lecciones",
                    component : <GS1L1 title={"Conceptos indispensables"}/>
                },
                {
                    name : "notas musicales, alteraciones y afinacion",
                    description : "Explicacion de las notas musicales con nombre propio, alteraciones, afinacion y como se representan en la guitarra",
                    id : 2,
                    component : <GS1L2 title={"notas musicales, alteraciones y afinacion"}/>
                },
                {
                    name : "El semitono y el concepto de intervalo",
                    description : "definicion y conceptualizacion del semitono como unidad de medida en la musica",
                    id : 3,
                    component : <GS1L3 title={"El semitono y el concepto de intervalo"}/>,
                },
                {
                    name : "Notas aplicadas a la guitarra",
                    description : "Mapa de notas en la guitarra, aplicar sostenidos bemoles y ",
                    id : 4,
                    component : <GS1L4 title={"Notas aplicadas a la guitarra"}/>
                },
                {
                    name : "Semitonos aplicados a la guitarra",
                    description : "ejemplos de como se reflejan los semitonos en el mastil de la guitarra",
                    id : 5,
                    component : <GS1L5 title={"Semitonos aplicados a la guitarra"}/>
                },
            ]
        },
        {
            name : "Intervalos y acordes",
            id: 2,
            lessons : [
                {
                    name : "Introduccion a los intervalos",
                    description : "Explicacion de que es un intervalo y su utilidad comparada a la de usar simplemente semitonos",
                    id : 1,
                    component : <GS2L1 title={"Introduccion a los intervalos"}/>
                },
                {
                    name : "intervalos musicales",
                    description : "una lista de intervalos musicales y algunas aclaraciones sobre ellos",
                    id : 2,
                    component : <GS2L2 title={"intervalos musicales"}/>
                },
                {
                    name : "5tas, 8vas justas",
                    description : "Introduccion de intervalos de 8va justa y 5ta justa, algunas caracteristicas y ejemplos de acordes que estos pueden formar",
                    id : 3,
                    component : <GS2L3 title={"5tas, 8vas y power chords"}/>
                },
                {
                    name : "Imperfeccion en la afinacion estandar",
                    description: "Importante explicacion y practica de como lidiar con la inperfeccion intervalica en la afinacion de la guitarra",
                    id : 4,
                    component : <GS2L4 title={"Imperfeccion en cuerdas 4 y 5"}/>
                },
                {
                    name : "Construccion de acordes y cifrado americano",
                    description : "Explicacion y ejemplificacion de como se construye un acorde haciendo uso de los intervalos ya aprendidos",
                    id : 5,
                    component : <GS2L5 title={"Construccion de acordes"}/>
                },
                {
                    name : "3ras y acordes triada",
                    description : "Introduccion de los intervalos de 3ras y los acordes que derivan de ellos",
                    id : 6,
                    component : <GS2L6 title={"3ras y acordes triaada"}/>
                },
                {
                    name : "Progreiones armonicas",
                    description : "Descripcion y ejemplo",
                    id : 7,
                    component : <GS2L7 title={"Progresiones armonicas"}/>
                }
            ]   
        },
        {
            name : "escalas y introduccion a la armonia funcional",
            id : 3,
            lessons : []
        }
    ]
}

export default guitarCourse