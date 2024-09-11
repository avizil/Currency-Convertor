import { ExchageRates } from "../interfaces/exchangeRates/exchageRates.interface.js";

// Request URL: https://api.fxratesapi.com/latest?currencies={currencies to fetch}&base={base currency}&places={decimals places}&amount={amount}
const baseUrl = "https://api.fxratesapi.com/";

export async function fetchExchangeRates(baseCurrency: string, conversionCurrencies: string[]): Promise<ExchageRates> {
   const requestUrl = baseUrl + "latest?base=" + baseCurrency + "&currencies=" + conversionCurrencies.join(",");
   try {
      const response = await fetch(requestUrl);
      if (response.status === 200) {
         console.log("Success! Status code " + response.status);
         const json: ExchageRates = (await response.json()) as ExchageRates;
         const exchageRates: ExchageRates = { baseCurrency: baseCurrency, rates: new Map(Object.entries(json.rates)) };
         return exchageRates;
      } else {
         console.error("Bad status code - " + response.status);
      }
   } catch (error) {
      console.error("Fetch failed! " + error);
   }
   return { baseCurrency: "", rates: new Map() };
}
