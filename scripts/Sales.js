export const sales = async () => {
    const fetchResponse = await fetch("http://localhost:8088/sales?_expand=entree&_expand=vegetable&_expand=side");
    const sales = await fetchResponse.json()

    let salesDivsHTML = sales.map(
        (sale) => {
            const saleTotal = (sale.entree.price 
                            + sale.vegetable.price 
                            + sale.side.price).toLocaleString(
                                                        "en-US", 
                                            {style: "currency",
                                            currency: "USD"})                                                                                                      
            return `<div>
                    <div>Receipt # ${sale.id} = ${saleTotal}</div>
                    </div>`
        }
    ).join("")

    return salesDivsHTML
}