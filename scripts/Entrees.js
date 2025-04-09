import { setEntreeId } from "./transientState.js"

const handleEntreeChoice = (event) => {
    if (event.target.name === "entree") {
        setEntreeId(parseInt(event.target.value))
    }
}

export const entreeOptions = async () => {
    document.addEventListener("change", handleEntreeChoice)
    const response = await fetch("http://localhost:8088/entrees")
    const entrees = await response.json()

    let entreeOptionsHTML = ""

    const divStringArray = entrees.map(
        (entree) => {
          return `<div>
                    <input type='radio'
                    name='entree' 
                    value='${entree.id}' 
                /> ${entree.name}
                </div>`
        }
    )
    
    entreeOptionsHTML += divStringArray.join("")

    return entreeOptionsHTML
}