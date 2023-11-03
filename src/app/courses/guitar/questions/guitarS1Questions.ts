import { neckQuestion } from "@/components/lessonComponents/questionModal"
import { isAnOctave } from "@/utils/noteUtils"

export const guitarS1L1Questions: neckQuestion[] = [
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

export const guitarS1L4Questions: neckQuestion[] = [
    {
        question: "Marca la nota La en la sexta cuerda",
        solutions: [
            [
                {position : [6,5]}
            ]
        ],
        defaultMarkers : [
            {position : [6,0],text : "Mi"}
        ]
    },
    {
        question: "Marca la nota Do en la quinta cuerda",
        solutions: [
            [
                {position : [5,3]}
            ]
        ],
        defaultMarkers : [
            {position : [5,5],text : "Re"}
        ]
    },
    {
        question: "Marca la nota Mi en la cuarta cuerda",
        solutions: [
            [
                {position : [4,2]}
            ]
        ],
        defaultMarkers : [
            {position : [4,0],text : "Re"}
        ]
    },
    {
        question: "Marca la nota Fa en la sexta cuerda",
        solutions: [
            [
                {position : [6,1]}
            ]
        ],
        defaultMarkers : [
            {position : [6,5],text : "La"}
        ]
    },
    {
        question: "Marca la nota Si en la quinta cuerda",
        solutions: [
            [
                {position : [5,2]}
            ]
        ],
        defaultMarkers : [
            {position : [5,3],text : "Do"}
        ]
    },
]

export const guitarS1L4Questions_2 : neckQuestion[] = [
    {
        question : "marca la nota La",
        solutions : [
            [
                {position : [6,5]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca la nota Sol",
        solutions : [
            [
                {position : [6,3]}
            ]
        ],
        verificationMethod : isAnOctave
        
    },
    {
        question : "marca la nota Do",
        solutions : [
            [
                {position : [5,3]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca la nota Mi",
        solutions : [
            [
                {position : [6,0]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca la nota Fa",
        solutions : [
            [
                {position : [6,1]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca la nota Si",
        solutions : [
            [
                {position : [5,2]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca la nota Fa#",
        solutions : [
            [
                {position : [6,2]}
            ]
        ],
        verificationMethod : isAnOctave
    },
]

export const guitarS1L5Questions: neckQuestion[] = [
    {
        question: "Marca la Fa y la nota 2 semitonos delantee",
        solutions: [
            [
                { position: [6, 1] },
                { position: [6, 3] }
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Sol y la nota un semitono atras",
        solutions : [
            [
                {position : [6,3]},
                {position : [6,2]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Do# y la nota 3 semitonos delante",
        solutions : [
            [
                {position : [5,4]},
                {position : [5,7]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Sib y la nota un semitono delante",
        solutions : [
            [
                {position : [5,1]},
                {position : [5,2]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Re y la nota 5 semitonos detras",
        solutions : [
            [
                {position : [5,5]},
                {position : [5,0]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca La# y la nota 3 semitonos detras",
        solutions : [
            [
                {position : [5,1]},
                {position : [6,3]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca do y la nota 4 semitono atras",
        solutions : [
            [
                {position : [5,3]},
                {position : [6,4]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Mi y la nota 12 semitonos delante",
        solutions : [
            [
                {position : [6,0]},
                {position : [4,2]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Mi y la nota un semitono detras",
        solutions : [
            [
                {position : [6,0]},
                {position : [5,6]}
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca Mib y la nota 2 semitonos delante",
        solutions : [
            [
                {position : [5,6]},
                {position : [5,8]}
            ]
        ],
        verificationMethod : isAnOctave
    },
]