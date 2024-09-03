import { ExchageRates } from "../interfaces/exchageRates.interface";

// Arguments: the last changed curreny {inputCurrency} (the calculation will be based on it), the fetch results {ExchangeRates}
export function calculateRates(inputCurrency: string, inputAmount: number, ExchageRates: ExchageRates) {
   const amountsMaps: Map<string, number> = new Map();
   // If the input currency is not the base currency,
   if (inputCurrency !== ExchageRates.baseCurrency) {
      // Function that calculates the main currency amount
   }
   // const rateAmount = inputCurrency === ExchageRates.baseCurrency ? inputAmount : { calculation };
   Array.from(ExchageRates.rates.keys()).forEach((currency: string) => {
      if (inputCurrency !== currency) {
      }
   });
}
