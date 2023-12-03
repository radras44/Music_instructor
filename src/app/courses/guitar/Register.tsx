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
                    name : "Conceptos indispensables",
                    id : 1,
                    description : "repaso de algunos conceptos obligatorios que debes saber antes de continuar con las siguientes lecciones",
                },
                {
                    name : "Conceptos indispensables 2",
                    id : 2,
                    description : "repaso de algunos conceptos obligatorios que debes saber antes de continuar con las siguientes lecciones",
                },
            ]
        },
      
    ]
}

export default guitarCourse