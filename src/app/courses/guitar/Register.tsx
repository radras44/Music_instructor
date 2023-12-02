import { Course} from "@/interfaces/baseInterfaces";
import GS1L1 from "./lessons/GS1L1";

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
                    component : <GS1L1/>
                },
            ]
        },
      
    ]
}

export default guitarCourse