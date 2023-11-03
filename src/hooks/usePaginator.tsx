import { useState } from "react";

export interface Paginator {
    current : number,
    setCurrent : React.SetStateAction<any>
    next : () => void,
    back : () => void
}

export default function usePaginator (segments : any[]) : Paginator {
    const [current,setCurrent] = useState<number>(0)

    function next () {
        const nextNumber : number = Number(current) + 1
        const limit = segments.length - 1
        if(nextNumber <= limit){
            window.scrollTo(0,0)
            setCurrent(prevState => {
                return prevState + 1
            })
        }
        
    }

    function back () {
        const backNumber : number = Number(current) - 1
        const limit = 0
        if(backNumber >= limit){
            window.scrollTo(0,0)
            setCurrent(prevState => {
                return prevState - 1
            })
        }
    }

    return ({current,setCurrent,next,back})
}