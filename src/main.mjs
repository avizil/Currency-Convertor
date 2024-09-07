import { fetchExchangeRates } from "./requestHandler/fetchHandler.js";
import { cloneCurrencyRow } from "./buttons/addCurrencyRow/addCurrencyRow.js";
import { initiateCalculation } from "./buttons/calculateButton/calculateButton.js";
import { updateLastInput } from "./inputTracking/inputTracker.js";
import { evaluateRowRemoval } from "./buttons/removeRow/removeButton.js";
import { updateRowNumbering } from "./utilities/rowCounter/rowCounter.js";

// Make an edit - function should take eventTarget as an arg
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
   document.querySelector("tbody").append(newCurrencyRow);
   updateRowNumbering();
});

// Add an event listener in the clone row function
const removeRowButton = document.getElementsByClassName("remove_row_button")[0];
removeRowButton.addEventListener("click", (event) => evaluateRowRemoval(event.target));

// For some reason adding the event listener in a loop does not work
const amountInput = document.getElementsByClassName("exchange_currency_amount");
amountInput[0].addEventListener("input", (event) => updateLastInput(event.target));
amountInput[1].addEventListener("input", (event) => updateLastInput(event.target));
