import {setVegetableId} from "./transientState.js"

const handleVegetableChoice = (event) => {
    if (event.target.name === "vegetable") {
        setVegetableId(parseInt(event.target.value))
    }
}

export const vegOptions = async () => {
    document.addEventListener("change", handleVegetableChoice)
    const response = await fetch("http://localhost:8088/vegetables")
    const vegetables = await response.json()

    let vegetableOptionsHTML = ""
    const divStringArray = vegetables.map(
        (vegetable) => {
            return `<div>
                    <input type='radio'
                    name='vegetable'
                    value='${vegetable.id}'
                    />${vegetable.type}
                    </div>`
                
        }

    )
vegetableOptionsHTML += divStringArray.join("")

    return vegetableOptionsHTML
}
