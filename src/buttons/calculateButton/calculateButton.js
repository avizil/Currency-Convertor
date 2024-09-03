import { fetchExchangeRates } from "../../requestHandler/fetchHandler.js";
import { rateIndex } from "../../consts/consts.js";
export async function calculateRates(baseCurrency, conversionCurrencies) {
    const ExchageRates = await fetchExchangeRates(baseCurrency, conversionCurrencies);
    console.log(ExchageRates);
    populateRates(ExchageRates);
}
function populateRates(ExchageRates) {
    const rows = document.getElementsByClassName("exchage_currency_row");
    Array.from(rows).forEach((row) => {
        //   const currName = row.children[currNameIndex].value;
        const nameCell = document.evaluate('.//input[@class="exchage_currency_name"]', row, null, 9, null)
            .singleNodeValue;
        const currName = nameCell.value;
        console.log(currName);
        row.children[rateIndex].textContent = String(ExchageRates.rates.get(currName));
    });
}
//# sourceMappingURL=calculateButton.js.map