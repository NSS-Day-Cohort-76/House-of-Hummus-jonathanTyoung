import { placeOrder } from "./transientState.js"

const handlePurchaseSubmission = (clickEvent) => {
    if (clickEvent.target.id === "submission-button") {
        console.log("Button clicked!")
        placeOrder()
    }
}

export const submissionButton = () => {
    document.addEventListener("click", handlePurchaseSubmission)

    return `<button id='submission-button'>Submit Your Order Here</button>`
}