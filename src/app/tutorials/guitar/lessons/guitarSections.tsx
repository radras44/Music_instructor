import { Course} from "@/interfaces/baseInterfaces";
import GuitarS1L1 from "./guitarS1L1";
import GuitarS1L2 from "./guitarS1L2";
import GuitarS1L3 from "./guitarS1L3";
import GuitarS1L4 from "./guitarS1L4";
import GuitarS1L5 from "./guitarS1L5";
import GuitarS2L1 from "./guitarS2L1";
import GuitarS2L2 from "./guitarS2L2";
import GuitarS2L3 from "./guitarS2L3";
import GuitarS2L5 from "./guitarS2L5";
import GuitarS2L4 from "./guitarS2L4";
import GuitarS2L6 from "./guitarS2L6";
import GuitarS2L7 from "./guitarS2L7";

export const guitarSections : Course = {
    name : "Curso de guitarra",
    sections : [
        {
            name : "Conceptos teoricos iniciales",
            sectionNumber : 1,
            lessons: [
                {
                    name : "Conceptos indispensables",
                    description : "repaso de algunos conceptos obligatorios que debes saber antes de continuar con las siguientes lecciones",
                    lessonNumber : 1,
                    component : <GuitarS1L1 title={"Conceptos indispensables"}/>
                },
                {
                    name : "notas musicales, alteraciones y afinacion",
                    description : "Explicacion de las notas musicales con nombre propio, alteraciones, afinacion y como se representan en la guitarra",
                    lessonNumber : 2,
                    component : <GuitarS1L2 title={"notas musicales, alteraciones y afinacion"}/>
                },
                {
                    name : "El semitono y el concepto de intervalo",
                    description : "definicion y conceptualizacion del semitono como unidad de medida en la musica",
                    lessonNumber : 3,
                    component : <GuitarS1L3 title={"El semitono y el concepto de intervalo"}/>,
                },
                {
                    name : "Notas aplicadas a la guitarra",
                    description : "Mapa de notas en la guitarra, aplicar sostenidos bemoles y ",
                    lessonNumber : 4,
                    component : <GuitarS1L4 title={"Notas aplicadas a la guitarra"}/>
                },
                {
                    name : "Semitonos aplicados a la guitarra",
                    description : "ejemplos de como se reflejan los semitonos en el mastil de la guitarra",
                    lessonNumber : 5,
                    component : <GuitarS1L5 title={"Semitonos aplicados a la guitarra"}/>
                },
            ]
        },
        {
            name : "Intervalos y acordes",
            sectionNumber: 2,
            lessons : [
                {
                    name : "Introduccion a los intervalos",
                    description : "Explicacion de que es un intervalo y su utilidad comparada a la de usar simplemente semitonos",
                    lessonNumber : 1,
                    component : <GuitarS2L1 title={"Introduccion a los intervalos"}/>
                },
                {
                    name : "intervalos musicales",
                    description : "una lista de intervalos musicales y algunas aclaraciones sobre ellos",
                    lessonNumber : 2,
                    component : <GuitarS2L2 title={"intervalos musicales"}/>
                },
                {
                    name : "5tas, 8vas justas",
                    description : "Introduccion de intervalos de 8va justa y 5ta justa, algunas caracteristicas y ejemplos de acordes que estos pueden formar",
                    lessonNumber : 3,
                    component : <GuitarS2L3 title={"5tas, 8vas y power chords"}/>
                },
                {
                    name : "Imperfeccion en la afinacion estandar",
                    description: "Importante explicacion y practica de como lidiar con la inperfeccion intervalica en la afinacion de la guitarra",
                    lessonNumber : 4,
                    component : <GuitarS2L4 title={"Imperfeccion en cuerdas 4 y 5"}/>
                },
                {
                    name : "Construccion de acordes y cifrado americano",
                    description : "Explicacion y ejemplificacion de como se construye un acorde haciendo uso de los intervalos ya aprendidos",
                    lessonNumber : 5,
                    component : <GuitarS2L5 title={"Construccion de acordes"}/>
                },
                {
                    name : "3ras y acordes triada",
                    description : "Introduccion de los intervalos de 3ras y los acordes que derivan de ellos",
                    lessonNumber : 6,
                    component : <GuitarS2L6 title={"3ras y acordes triaada"}/>
                },
                {
                    name : "Progreiones armonicas",
                    description : "Descripcion y ejemplo",
                    lessonNumber : 7,
                    component : <GuitarS2L7 title={"Progresiones armonicas"}/>
                }
            ]   
        },
        {
            name : "escalas y introduccion a la armonia funcional",
            sectionNumber : 3,
            lessons : []
        }
    ]
}