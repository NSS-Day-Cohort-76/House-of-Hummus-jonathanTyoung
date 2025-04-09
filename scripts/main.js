import { FoodTruck } from "./FoodTruck.js"

const mainContainer = document.querySelector("#container")
const renderAllHTML = async () => {
    //usually all the HTML goes between here
    mainContainer.innerHTML = await FoodTruck()
}

document.addEventListener("newSubmissionCreated", renderAllHTML)

renderAllHTML()

