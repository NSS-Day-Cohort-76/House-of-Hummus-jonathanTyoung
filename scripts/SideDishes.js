import { setSideId } from "./transientState.js"

const handleSideChoice = (event) => {
    if (event.target.name === "side") {
        setSideId(parseInt(event.target.value))
    }
}

export const sideOptions = async() => {
    document.addEventListener("change", handleSideChoice)
    const response = await fetch("http://localhost:8088/sides")
    const sides = await response.json()

    let sideOptionsHTML = ""
    const divStringArray = sides.map(
        (side) => {
            return `<div>
                    <input type="radio"
                    name="side"
                    value="${side.id}"
                    />${side.title}
                    </div>`
        } 
    )

    sideOptionsHTML += divStringArray.join("")

    return sideOptionsHTML
}

