import { entreeOptions } from "./Entrees.js"
import { sideOptions } from "./SideDishes.js";
import { vegOptions } from "./Vegetables.js";
import { submissionButton } from "./submissionButton.js";
import { Sales } from "./Sales.js"


export const FoodTruck = async() => {
    const entreeOptionsHTML = await entreeOptions();
    const vegetableOptionsHTML = await vegOptions();
    const sideOptionsHTML = await sideOptions();
    const submissionButtonHTML = await submissionButton();
    const salesHTML = await Sales() 
    
    return `
        <header class="header">
            <img src="./images/hummus.png" class="logo" />
            <h1 class="title">Laura Kathryn's House of Hummus</h1>
        </header>
<article class="choices">
            <section class="choices__entrees options">
                <h2>Entrees</h2>
                ${entreeOptionsHTML}
            </section>

            <section class="choices__vegetables options">
                <h2>Vegetables</h2>
                ${vegetableOptionsHTML}
            </section>

            <section class="choices__sides options">
                <h2>Sides</h2>
               ${sideOptionsHTML}
            </section>
        </article>

      
        <article>
                ${submissionButtonHTML}
        </article>

        <article class="customerOrders">
            <h2>Monthly Sales</h2>
            ${salesHTML}
        
        </article>

    `
}
