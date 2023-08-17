import { TutorialSection } from "@/interfaces/baseInterfaces";
import GuitarS1L2 from "./guitarS1L2";
import GuitarS1L3 from "./guitarS1L3";
import GuitarS1L1 from "./guitarS1L1";
import GuitarS1L4 from "./guitarS1L4";
import GuitarS2L1 from "./guitarS2L1";
import GuitarS2L2 from "./guitarS2L2";

export const guitarSections : TutorialSection[] = [
    {
        name : "Conceptos iniciales",
        sectionNumber : 1,
        lessons: [
            {
                name : "Conceptos indispensables",
                description : "repaso de algunos conceptos obligatorios que debes saber antes de continuar con las siguientes lecciones",
                lessonNumber : 1,
                component : <GuitarS1L1 title="Conceptos indispensables"/>
            },
            {
                name : "El semitono y el concepto de intervalo",
                description : "definicio de intervalo y conceptualizacion del semitono como unidad de medida en la musica",
                lessonNumber : 2,
                component : <GuitarS1L2 title="El semitono y el concepto de intervalo"/>,
            },
            {
                name : "Semitonos aplicados a la guitarra",
                description : "ejemplos de como se reflejan los semitonos en el mastil de la guitarra",
                lessonNumber : 3,
                component : <GuitarS1L3 title={"Semitonos aplicados a la guitarra"}/>
            },
            {
                name : "intervalos musicales",
                description : "una lista de intervalos musicales y algunas aclaraciones sobre ellos",
                lessonNumber : 4,
                component : <GuitarS1L4 title={"intervalos musicales"}/>
            },
        ]
    },
    {
        name : "Practica de intervalos y acordes",
        sectionNumber :2,
        lessons : [
            {
                name : "Intervalo de 8va ",
                description : "Descripcion, ejemplos y usos del el intervalo de octava justa",
                lessonNumber : 1,
                component : <GuitarS2L1 title="Intervalos de 8va"/>
            },
            {
                name : "Intervalo de 5ta",
                description : "Descripcion, ejemplos y usos del intervalo de quinta justa",
                lessonNumber : 2,
                component : <GuitarS2L2 title="Intervalo de 5ta"/>
            },
            
        ],
    }
]