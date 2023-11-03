import { neckQuestion } from "@/components/lessonComponents/questionModal";
import { isAnOctave } from "@/utils/noteUtils";
export const guitarS2L3Questions_8 : neckQuestion[] = [
    {
        question : "marca una octava en Mi",
        solutions : [
            [
                {position : [6,0]},
                {position : [4,2]}
            ],
        ],
    },
    {
        question : "marca una octava en Do",
        solutions : [
            [
                {position : [5,3]},
                {position : [3,5]}
            ],
        ],
    },
    {
        question : "marca una octava en Re",
        solutions : [
            [
                {position : [5,5]},
                {position : [3,7]}
            ],
        ],
    },
    {
        question : "marca una octava en Fa#",
        solutions : [
            [
                {position : [6,2]},
                {position : [4,4]}
            ],
        ],
    },
]

export const guitarS2L3Questions_5 : neckQuestion[] = [
    {
        question : "marca una quinta en Fa",
        solutions : [
            [
                {position : [6,1]},
                {position : [5,3]}
            ],
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca una quinta en Do",
        solutions : [
            [
                {position : [5,3]},
                {position : [4,5]}
            ],
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca una quinta en sol",
        solutions : [
            [
                {position : [6,3]},
                {position : [5,5]}
            ],
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "marca una octava en Sib",
        solutions : [
            [
                {position : [5,1]},
                {position : [4,3]}
            ],
        ],
        verificationMethod : isAnOctave
    },
]

export const guitarS2L4Questions : neckQuestion[] = [
    {
        question : "crea esta figura en la cuerda 3",
        defaultMarkers : [
            {position : [6,3]},
            {position : [5,5]}
        ],
        solutions : [
            [
                {position : [3,3]},
                {position : [2,6]}
            ]
        ]
    },
    {
        question : "crea esta figura en la cuerda 3",
        defaultMarkers : [
            {position : [6,3]},
            {position : [5,2]}
        ],
        solutions : [
            [
                {position : [3,3]},
                {position : [2,3]}
            ]
        ]
    },
    {
        question : "crea esta figura en la cuerda 3",
        defaultMarkers : [
            {position : [6,3]},
            {position : [4,5]}
        ],
        solutions : [
            [
                {position : [3,3]},
                {position : [1,6]}
            ]
        ]
    },
    {
        question : "crea esta figura en la cuerda 5",
        defaultMarkers : [
            {position : [6,1]},
            {position : [3,2]}
        ],
        solutions : [
            [
                {position : [5,1]},
                {position : [2,3]}
            ]
        ]
    },
    {
        question : "crea esta figura en la cuerda 5",
        defaultMarkers : [
            {position : [6,5]},
            {position : [2,5]}
        ],
        solutions : [
            [
                {position : [5,5]},
                {position : [1,5]}
            ]
        ]
    },
    {
        question : "crea esta figura en la cuerda 3",
        defaultMarkers : [
            {position : [6,5]},
            {position : [5,7]},
            {position: [4,7]}
        ],
        solutions : [
            [
                {position : [3,5]},
                {position : [2,8]},
                {position : [1,8]}
            ]
        ]
    },
]

export const guitarS2L5Questions : neckQuestion[] = [
    {
        question : "Marca la nota D",
        solutions : [
            [
                {position : [5,5]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota E",
        solutions : [
            [
                {position : [6,0]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota C",
        solutions : [
            [
                {position : [5,3]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota B",
        solutions : [
            [
                {position : [5,2]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota Db",
        solutions : [
            [
                {position : [5,4]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota G",
        solutions : [
            [
                {position : [6,3]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota F",
        solutions : [
            [
                {position : [6,1]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota Ab",
        solutions : [
            [
                {position : [6,4]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota Eb",
        solutions : [
            [
                {position : [5,6]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota G#",
        solutions : [
            [
                {position : [6,4]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota Bb",
        solutions : [
            [
                {position : [5,1]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota F#",
        solutions : [
            [
                {position : [6,2]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota Fb",
        solutions : [
            [
                {position : [6,0]},
            ]
        ],
        verificationMethod : isAnOctave
    },
    {
        question : "Marca la nota B#",
        solutions : [
            [
                {position : [5,3]},
            ]
        ],
        verificationMethod : isAnOctave
    },
]

export const guitarS2L6Questions_triads : neckQuestion[] = [
    {
        question : "Marca el siguiente acorde : A",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [6,5]},
                {position: [5,4]},
                {position: [4,2]}
            ]
        ]
    },
    {
        question : "Marca el siguiente acorde : Am",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [6,5]},
                {position: [5,3]},
                {position: [4,2]}
            ]
        ]
    },
    {
        question : "Marca el siguiente acorde : C",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [5,3]},
                {position: [4,2]},
                {position: [3,0]}
            ]
        ]
    },
    {
        question : "Marca el siguiente acorde : Cm",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [5,3]},
                {position: [4,1]},
                {position: [3,0]}
            ]
        ]
    },
    {
        question : "Marca el siguiente acorde : Ebm",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [5,6]},
                {position: [4,4]},
                {position: [3,3]}
            ]
        ]
    },
    {
        question : "Marca el siguiente acorde : B",
        verificationMethod : isAnOctave,
        solutions : [
            [
                {position: [5,2]},
                {position: [4,4]},
                {position: [2,4]}
            ]
        ]
    },
]


