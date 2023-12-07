import { Course} from "@/interfaces/baseInterfaces";
import GS1L1 from "./S1-L1/page";

const guitarCourse : Course = {
    name : "Curso de guitarra",
    pathName : "guitar",
    url: "/courses/guitar/",
    sections : [
        {
            name : "Conceptos teoricos iniciales",
            id : 1,
            lessons: [
                {
                    name : "Lectura de diagramas de mastil",
                    id : 1,
                    description : "",
                },
                {
                    name : "Notas musicales, alteraciones y semitonos",
                    id : 2,
                    description : "Notas musicales y semitonos",
                },
                // {
                //     name : "Unidades de tiempo",
                //     id : 3,
                //     description : "",
                // },
            ]
        },
        // {
        //     name : "Comenzando a interpretar",
        //     id : 2,
        //     lessons : [

        //     ]
        // }
    ]
}

export default guitarCourse