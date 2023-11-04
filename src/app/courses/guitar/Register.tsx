import { Course} from "@/interfaces/baseInterfaces";
import GS1L1 from "./lessons/GS1L1";
import GS1L2 from "./lessons/GS1L2";

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
                    component : <GS1L1/>
                },
                {
                    name : "notas musicales, alteraciones y afinacion",
                    description : "Explicacion de las notas musicales con nombre propio, alteraciones, afinacion y como se representan en la guitarra",
                    id : 2,
                    component : <GS1L2/>
                },
            ]
        },
      
    ]
}

export default guitarCourse