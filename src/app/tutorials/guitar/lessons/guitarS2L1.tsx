import { GuitarNeck } from "@/components/guitar";
import { LessonContainer, LessonBox, LessonSubtitle, LessonTitle, LessonParagraph, LessonIndicator, LessonDivider, LessonListItem, useCorrectionsModal, CorrectionsModal, CorrectionsButton } from "@/components/lessonComponents";
import { LessonComponent } from "@/interfaces/baseInterfaces";
import { Hcontainer } from "@/styles/styles";
import { Box, Button } from "@mui/material";

export default function GuitarS2L1({ title }: LessonComponent) {
    const { closeCorrections, openCorrections, showCorrections } = useCorrectionsModal()
    return (
        <LessonContainer>
            <LessonTitle title={title} />
            <LessonBox>
                <LessonParagraph text="El intervalo de octava vendria de ser volver a la misma nota desde la que empezaste pero mas agudo, osea, volver a la fundamnetal, tambien es un intervalo util para encontrar otra instancias de otros intervalos" />
                <LessonIndicator
                    label="Distancia entre la fundamental y el intervalo de octava"
                    listType="notes"
                    indicators={["Do"]}
                    limit={13}
                />
                <GuitarNeck
                    neckRange={[0, 12]}
                    rootNote="Mi"
                    fretMarkers={[
                        { string: 6, fret: 0, text: "Mi" },
                        { string: 6, fret: 12, text: "8" }
                    ]}
                />
                <LessonDivider>
                    <LessonParagraph text="Aunque tocar esto en guitarra puede ser un poco complicado, por no decir que al estar en una misma cuerda no podrias tocar la fundamnetal y la octava al mismo tiempo, por lo que se suele buscar la misma distancia, pero en otras cuerdas" />
                </LessonDivider>
                <GuitarNeck
                    neckRange={[0, 12]}
                    rootNote="Mi"
                    fretMarkers={[
                        { string: 6, fret: 0, text: "Mi" },
                        { string: 4, fret: 2, text: "8" }
                    ]}
                />
                <LessonDivider>
                    <LessonParagraph text="Recordar que esto es asi da igual desde cualquier nota se parta, ya que solo importa la nota desde la cual se parte, lo demas son distancias de fundamental a octava" />
                </LessonDivider>
                <Box sx={{ ...Hcontainer() }}>
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Sol"
                        fretMarkers={[
                            { string: 6, fret: 3, text: "Sol" },
                            { string: 4, fret: 5, text: "8va" }
                        ]}
                    />
                    <GuitarNeck
                        neckRange={[0, 5]}
                        rootNote="Si"
                        fretMarkers={[
                            { string: 5, fret: 2, text: "Si" },
                            { string: 3, fret: 4, text: "8va" }
                        ]}
                    />
                </Box>
            </LessonBox>
            <LessonBox>
                <LessonSubtitle text="Practica" />
                <LessonParagraph text="Nota: Al referirse a 'tocar una octava en [alguna nota]', se interpreta como tocar tanto la fundamental (la nota raiz) como la octava, en cambio si se dice 'tocar la de [alguna nota] en este caso si se refiere a tocar la nota que esta a una octava de distancia, sin tocar su fundamental'" />
                <LessonDivider>
                    <LessonListItem text="1: Toca una octava en La" />
                    <LessonListItem text="2: Toca una octava en Fa" />
                    <LessonListItem text="3: Toca una octava en Do" />
                    <LessonListItem text="4: Toca la octava de Sol" />
                </LessonDivider>
                <CorrectionsButton onClick={openCorrections}>Ver Soluciones</CorrectionsButton>
                <CorrectionsModal
                    open={showCorrections}
                    onClose={closeCorrections}
                    statements={[
                        {
                            statement: "1: Toca una octava en La",
                            correction: <GuitarNeck
                                neckRange={[0, 6]}
                                fretMarkers={[
                                    { string: 5, fret: 0, text: "La" },
                                    { string: 3, fret: 2, text: "8" }
                                ]}
                                rootNote="La"
                            />
                        },
                        {
                            statement: "2: Toca una octava en Fa",
                            correction: <GuitarNeck
                            neckRange={[0, 6]}
                            fretMarkers={[
                                { string: 6, fret: 1, text: "Fa" },
                                { string: 4, fret: 3, text: "8" }
                            ]}
                            rootNote="Fa"
                        />
                        },
                        {
                            statement: "3: Toca una octava en Do",
                            correction: <GuitarNeck
                            neckRange={[0, 6]}
                            fretMarkers={[
                                { string: 5, fret: 3, text: "Do" },
                                { string: 3, fret: 5, text: "8" }
                            ]}
                            rootNote="Do"
                        />
                        },
                        {
                            statement: "4: Toca la octava de Sol",
                            correction: <GuitarNeck
                            neckRange={[0, 6]}
                            fretMarkers={[
                                { string: 4, fret: 5, text: "8" }
                            ]}
                            rootNote="Sol"
                        />
                        }
                    ]}
                />
            </LessonBox>
        </LessonContainer>
    )
}