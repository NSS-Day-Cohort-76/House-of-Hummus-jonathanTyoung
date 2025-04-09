export const Sales = async () => {
    const fetchResponse = await fetch("http://localhost:8088/sales")
    const sales = await fetchResponse.json()

    let salesDivsHTML = sales.map(
        (sale) => {
            // const saleTotal = (sale.entree.price + sale.vegetable.price + sale.side.price).toLocaleString()
            return `<div>
                    <div>Receipt # ${sale.id} = saleTotal</div>
                    </div>`
        }
    ).join("")

    return salesDivsHTML
}