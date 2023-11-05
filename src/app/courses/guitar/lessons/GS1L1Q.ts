import { belongString, isAnOctave } from "@/components/lessonComponents/neckVerMethods";
import { neckQuestion } from "@/interfaces/baseInterfaces";

export const questions_1: neckQuestion[] = [
    {
        question : "señala cualquier sitio en la 'cuerda 1'",
        solutions : [
            [
                {position : [1,0]}
            ]
        ],
        verificationMethod : belongString
    },
    {
        question : "señala cualquier sitio en la 'cuerda 4'",
        solutions : [
            [
                {position : [4,0]}
            ]
        ],
        verificationMethod : belongString
    },
    {
        question : "señala cualquier sitio en la 'cuerda 6'",
        solutions : [
            [
                {position : [6,0]}
            ]
        ],
        verificationMethod : belongString
    },
    {
        question : "señala cualquier sitio en la 'cuerda 3'",
        solutions : [
            [
                {position : [3,0]}
            ]
        ],
        verificationMethod : belongString
    },
    {
        question : "señala cualquier sitio en la 'cuerda 5'",
        solutions : [
            [
                {position : [5,0]}
            ]
        ],
        verificationMethod : belongString
    },
    {
        question : "señala cualquier sitio en la 'cuerda 2'",
        solutions : [
            [
                {position : [2,0]}
            ]
        ],
        verificationMethod : belongString
    },
]

export const questions_2 : neckQuestion[] = [

]

export const questions_3: neckQuestion[] = [
    {
        question: "cuerda 1 traste 2",
        solutions: [
            [
                { position: [1, 2] }
            ]
        ]
    },
    {
        question: "cuerda 3 al aire",
        solutions: [
            [
                { position: [3, 0] }
            ]
        ]
    },
    {
        question: "cuerda 6 traste 1",
        solutions: [
            [
                { position: [6, 1] }
            ]
        ]
    },
    {
        question: "cuerda 5 traste 3",
        solutions: [
            [
                { position: [5, 3] }
            ]
        ]
    },
    {
        question: "cuerda 6 al aire",
        solutions: [
            [
                { position: [6, 0] }
            ]
        ]
    }, {
        question: "cuerda 1 traste 7",
        solutions: [
            [
                { position: [1, 7] }
            ]
        ]
    }, {
        question: "cuerda 4 traste 6",
        solutions: [
            [
                { position: [4, 6] }
            ]
        ]
    }, {
        question: "cuerda 5 traste 5",
        solutions: [
            [
                { position: [5, 5] }
            ]
        ]
    }
]
