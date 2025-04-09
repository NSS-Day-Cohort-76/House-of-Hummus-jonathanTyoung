const transientState = {
    entreeId: null,
    vegId: null,
    sideId: null
}

// Functions to modify each property of transient state
export const setEntreeId = (chosenEntree) => {
    transientState.entreeId = chosenEntree
}
export const setVegId = (chosenVeg) => {
    transientState.vegId = chosenVeg
}
export const setSideId = (chosenSide) => {
    transientState.sideId = chosenSide
}

export  const placeOrder = async () => {
    const postOptions = {
    method: "POST",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify(transientState)
}

const response = await fetch("http://localhost:8088/sales", postOptions)


// This updates it in real time.
const newSubmissionEvent = new CustomEvent("newSubmissionCreated")
document.dispatchEvent(newSubmissionEvent)
}
