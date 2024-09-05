import { fetchExchangeRates } from "./requestHandler/fetchHandler.js";
import { cloneCurrencyRow } from "./buttons/addCurrencyRow/addCurrencyRow.js";
import { initiateCalculation } from "./buttons/calculateButton/calculateButton.js";
import { updateLastInput } from "./inputTracking/inputTracker.js";

const calculateButton = document.getElementById("calculate_button");
calculateButton.addEventListener("click", () => {
   // Fetch the exchange rates & calculate
   const baseCurrency = document.getElementById("base_currency").value;
   const exchangeCurrencyInput = document.getElementsByClassName("exchage_currency_name");
   const exchangeCurrencyNames = Array.from(exchangeCurrencyInput).map((elem) => elem.value);
   initiateCalculation(baseCurrency, exchangeCurrencyNames);
});

const addCurrencyButton = document.getElementById("add_currency_button");
addCurrencyButton.addEventListener("click", () => {
   const newCurrencyRow = cloneCurrencyRow();
});

// Input event listeners - add an event listener to all inputs.
// The last updated currency will be stored on an interface { currency, value }
// When an input has been made it will be stored in a variable
// For some reason adding the event listener in a loop does not work
const amountInput = document.getElementsByClassName("exchange_currency_amount");
amountInput[0].addEventListener("input", (event) => updateLastInput(event.target));
amountInput[1].addEventListener("input", (event) => updateLastInput(event.target));
