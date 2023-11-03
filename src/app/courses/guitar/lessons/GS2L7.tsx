import { LessonBox, LessonContainer, LessonSubtitle, LessonTitle } from "@/components/lessonComponents/widgets";
import { LessonComponent } from "@/interfaces/baseInterfaces";

export default function ({title} : LessonComponent) {
    return (
        <LessonContainer>
            <LessonTitle title={title}/>
            <LessonBox>
                <LessonSubtitle text="Quintas disminuidas y aumentadas"/>
            </LessonBox>
        </LessonContainer>
    )
}