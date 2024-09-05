import { ExchageRates } from "../interfaces/exchangeRates/exchageRates.interface.js";
import { amountIndex, currNameIndex } from "../consts/consts.js";

// Arguments: the last changed currency by the user {inputCurrency} (the calculation will be based on it), the fetch results {ExchangeRates}
export function calculateRates(inputCurrency: string, inputAmount: number, exchageRates: ExchageRates): Map<string, number> {
   const amountsMap: Map<string, number> = new Map();
   // If the input currency is not the base currency, convert it to the main currency
   const baseAmount: number =
      inputCurrency === exchageRates.baseCurrency
         ? inputAmount
         : convertCurrency(inputAmount, inputCurrency, exchageRates.baseCurrency, exchageRates);
   Array.from(exchageRates.rates.keys()).forEach((currency) => {
      if (inputCurrency !== currency) {
         const convertedAmount: number =
            currency === exchageRates.baseCurrency
               ? baseAmount
               : convertCurrency(baseAmount, exchageRates.baseCurrency, currency, exchageRates);
         amountsMap.set(currency, convertedAmount);
      }
   });

   console.log("Amounts map");
   console.log(amountsMap);
   return amountsMap;
}

function convertCurrency(amount: number, rootCurr: string, targetCurr: string, exchageRates: ExchageRates): number {
   let convertedAmount: number;
   if (targetCurr === exchageRates.baseCurrency) {
      convertedAmount = amount / exchageRates.rates.get(rootCurr)!;
   } else {
      convertedAmount = amount * exchageRates.rates.get(targetCurr)!;
   }

   return convertedAmount;
}
