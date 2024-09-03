// Arguments: the last changed curreny {inputCurrency} (the calculation will be based on it), the fetch results {ExchangeRates}
export function calculateRates(inputCurrency, inputAmount, ExchageRates) {
   const amountsMaps = new Map();
   // If the input currency is not the base currency,
   if (inputCurrency !== ExchageRates.baseCurrency) {
      // Function that calculates the main currency amount
   }
   const rateAmount = inputCurrency === ExchageRates.baseCurrency ? inputAmount : { calculation };
   ExchageRates.rates.keys().forEach((currency) => {
      if (inputCurrency !== currency) {
      }
   });
}
