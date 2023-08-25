import indicatorStyles from "../../styles/indicator.module.css"
interface LessonIndicatorProps {
    listType?: "notes" | "intervals",
    indicators?: string[],
    customList?: string[]
    limit?: number
    label?: string
    altType? : "b" | "#"
    align? : "center" | "start" | "end"
}
export function LessonIndicator({ label, indicators = [],altType = "#", listType = "notes", customList = [], limit = 12,align = "start" }: LessonIndicatorProps) {
    const lists = {
        notes: ["Do", "Do#", "Re", "Re#", "Mi", "Fa", "Fa#", "Sol", "Sol#", "La", "La#", "Si", "Do"],
        intervals: ["1", "b2", "2", "b3", "3", "4", "#4", "5", "b6", "6", "b7", "7", "8"],
        customList: customList
    }

    if(altType === "b"){
        lists.notes = ["Do", "Reb", "Re", "Mib", "Mi", "Fa", "Solb", "Sol", "Lab", "La", "Sib", "Si", "Do"]
    }

    if (customList.length > 0) {
        lists[listType] = customList
    }

    return (
        <div className={indicatorStyles.container}>
            {
                label ?
                    <h4 className={indicatorStyles.label}>{label}</h4>
                    : null
            }
            <div className={indicatorStyles["indicator-container"]} style={{
                justifyContent : align
            }}>
                {lists[listType].slice(0, limit).map((note : string, index) => (
                    indicators.includes(note) ?
                        <div key={index} className={`${indicatorStyles.indicator} ${indicatorStyles["indicator--active"]}`}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                        :
                        <div key={index} className={indicatorStyles.indicator}>
                            <span className={indicatorStyles["indicator-text"]}>{note}</span>
                        </div>
                ))}
            </div>
        </div>
    )
}