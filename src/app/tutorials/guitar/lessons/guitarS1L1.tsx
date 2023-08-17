import { LessonContainer, LessonTitle } from "@/components/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";

export default function GuitarS1L1 ({title} : LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title}/>
        </LessonContainer>
    )
}