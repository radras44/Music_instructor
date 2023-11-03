export default function HighLighter ({text} : {text : string}) {
    const textArray: string[] = text.split("'")
    return (
        <>
         {
                    text.startsWith("'") ?
                        textArray.map((fragment, index) => (
                            index % 2 ?
                            <span className="highlight-text" key={index}>{fragment}</span> :
                                <span key={index}>{fragment}</span>
                        ))
                        :
                        textArray.map((fragment, index) => (
                            index % 2 ?
                                <span className="highlight-text" key={index}>{fragment}</span> :
                                <span key={index}>{fragment}</span>
                        ))
                }
        </>
    )
}