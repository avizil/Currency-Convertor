import { fetchExchangeRates } from "../../requestHandler/fetchHandler.js";
import { calculateRates } from "../../calculationLogic/calculationLogic.js";
import { lastInput } from "../../inputTracking/inputTracker.js";
import { roundNumberTo2Decimals } from "../../utilities/math/rounding.js";
// Arguments: baseCurrency - the currency which was entered, conversionCurrencies - a list of all currencies to be converted to
export async function initiateCalculation(baseCurrency, conversionCurrencies) {
    const exchageRates = await fetchExchangeRates(baseCurrency, conversionCurrencies);
    populateRates(exchageRates);
    const convertedAmounts = calculateRates(lastInput.currencyName, lastInput.amount, exchageRates);
    populateAmounts(convertedAmounts);
}
function populateRates(exchageRates) {
    const rows = document.getElementsByClassName("exchage_currency_row");
    Array.from(rows).forEach((row) => {
        const currName = row.querySelector("input.exchage_currency_name").value;
        row.querySelector("td.td__rate").textContent = String(roundNumberTo2Decimals(exchageRates.rates.get(currName)));
    });
}
// Currently finding the index of the amount cell, to use it instead of document.evaluate each iterationwhat
function populateAmounts(amountsMap) {
    const rows = document.getElementsByClassName("exchage_currency_row");
    Array.from(rows).forEach((row) => {
        const currName = row.querySelector("input.exchage_currency_name").value;
        if (amountsMap.has(currName)) {
            const amountInput = row.querySelector("input.exchange_currency_amount");
            amountInput.value = String(roundNumberTo2Decimals(amountsMap.get(currName)));
        }
    });
}
//# sourceMappingURL=calculateButton.js.map