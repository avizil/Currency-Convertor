import { fetchExchangeRates } from "../../requestHandler/fetchHandler.js";
import { rateIndex, currNameIndex } from "../../consts/consts.js";
import { ExchageRates } from "../../interfaces/exchageRates.interface.js";

export async function calculateRates(baseCurrency: string, conversionCurrencies: string[]) {
   const ExchageRates: ExchageRates = await fetchExchangeRates(baseCurrency, conversionCurrencies);
   console.log(ExchageRates);
   populateRates(ExchageRates);
}

function populateRates(ExchageRates: ExchageRates) {
   const rows: HTMLCollection = document.getElementsByClassName("exchage_currency_row");
   (Array.from(rows) as HTMLTableRowElement[]).forEach((row: HTMLTableRowElement) => {
      //   const currName = row.children[currNameIndex].value;
      const nameCell: HTMLInputElement = document.evaluate('.//input[@class="exchage_currency_name"]', row, null, 9, null)
         .singleNodeValue as HTMLInputElement;
      const currName: string = nameCell.value;
      console.log(currName);
      row.children[rateIndex].textContent = String(ExchageRates.rates.get(currName));
   });
}
