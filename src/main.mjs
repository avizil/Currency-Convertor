import { fetchExchangeRates } from "./requestHandler/fetchHandler.js";
import { cloneCurrencyRow } from "./buttons/addCurrencyRow.mjs";
import { calculateRates } from "./buttons/calculateButton.js";

const calculateButton = document.getElementById("calculate_button");
calculateButton.addEventListener("click", () => {
   // Fetch the exchange rates & calculate
   const baseCurrency = document.getElementById("base_currency").value;
   //    console.log(baseCurrency.value);
   const exchangeCurrencyInput = document.getElementsByClassName("exchage_currency_name");
   const exchangeCurrencyNames = Array.from(exchangeCurrencyInput).map((elem) => elem.value);
   //    console.log(exchangeCurrencyNames);

   calculateRates(baseCurrency, exchangeCurrencyNames);
});

const addCurrencyButton = document.getElementById("add_currency_button");
addCurrencyButton.addEventListener("click", () => {
   const newCurrencyRow = cloneCurrencyRow();
});

// async function a() {
//    console.log(await fetchExchangeRates("USD", ["ILS"]));
// }
// a();
// console.log("hey");
