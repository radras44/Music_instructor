import { createElement } from "react"

export function genSegments (segments : React.FC[]) : JSX.Element[] {
    return segments.map((segment : React.FC) => {
        return createElement(segment,{key : crypto.randomUUID()})
    })
}