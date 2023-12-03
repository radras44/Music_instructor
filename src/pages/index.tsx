import { useState } from "react"

export default function App () {
    const [data,setData] = useState<string>("hello world")
    return (
        <div>{data}</div>
    )
}