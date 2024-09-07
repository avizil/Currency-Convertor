import { fetchExchangeRates } from "../../requestHandler/fetchHandler.js";
import { ExchageRates } from "../../interfaces/exchangeRates/exchageRates.interface.js";
import { calculateRates } from "../../calculationLogic/calculationLogic.js";
import { lastInput } from "../../inputTracking/inputTracker.js";
import { roundNumberTo2Decimals } from "../../utilities/math/rounding.js";

// Arguments: baseCurrency - the currency which was entered, conversionCurrencies - a list of all currencies to be converted to
export async function initiateCalculation(baseCurrency: string, conversionCurrencies: string[]) {
   const exchageRates: ExchageRates = await fetchExchangeRates(baseCurrency, conversionCurrencies);
   populateRates(exchageRates);
   const convertedAmounts: Map<string, number> = calculateRates(lastInput.currencyName!, lastInput.amount!, exchageRates);
   populateAmounts(convertedAmounts);
}

function populateRates(exchageRates: ExchageRates) {
   const rows: HTMLCollection = document.getElementsByClassName("exchage_currency_row");
   (Array.from(rows) as HTMLTableRowElement[]).forEach((row: HTMLTableRowElement) => {
      const currName: string = (row.querySelector("input.exchage_currency_name") as HTMLInputElement).value;
      row.querySelector("td.td__rate")!.textContent = String(roundNumberTo2Decimals(exchageRates.rates.get(currName)!));
   });
}

// Currently finding the index of the amount cell, to use it instead of document.evaluate each iterationwhat
function populateAmounts(amountsMap: Map<string, number>) {
   const rows: HTMLCollection = document.getElementsByClassName("exchage_currency_row");
   (Array.from(rows) as HTMLTableRowElement[]).forEach((row: HTMLTableRowElement) => {
      const currName: string = (row.querySelector("input.exchage_currency_name") as HTMLInputElement).value;
      if (amountsMap.has(currName)) {
         const amountInput: HTMLInputElement = row.querySelector("input.exchange_currency_amount") as HTMLInputElement;
         amountInput.value = String(roundNumberTo2Decimals(amountsMap.get(currName)!));
      }
   });
}
