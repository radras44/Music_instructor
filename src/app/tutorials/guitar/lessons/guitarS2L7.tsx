import { LessonBox, LessonContainer, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";

export default function GuitarS2L7 ({title} : LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title}/>
            <LessonBox>
                <LessonSubtitle text="Quintas disminuidas y aumentadas"/>
            </LessonBox>
        </LessonContainer>
    )
}