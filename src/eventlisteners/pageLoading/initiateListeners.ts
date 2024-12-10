import { initiateCalculation } from "../../buttons/calculateButton/calculateButton.js";
import { cloneCurrencyRow } from "../../buttons/addCurrencyRow/addCurrencyRow.js";
import { updateRowNumbering } from "../../utilities/rowCounter/rowCounter.js";

export function calculateButtonListener(){
    // Fetch the exchange rates & calculate
    const baseCurrency: string = (document.getElementById("base_currency") as HTMLInputElement).value;
    const exchangeCurrencyInput = document.getElementsByClassName("exchage_currency_name") as HTMLCollectionOf<HTMLInputElement>;
    const exchangeCurrencyNames = Array.from(exchangeCurrencyInput).map((elem) => elem.value);
    initiateCalculation(baseCurrency, exchangeCurrencyNames);    
}

export function addRowButtonListener(){
    const newCurrencyRow: HTMLTableRowElement = cloneCurrencyRow();
    document.querySelector("tbody")!.append(newCurrencyRow);
    updateRowNumbering();
}