import { InputCurrency } from "../interfaces/inputCurrency/inputCurrency.interface.js";
// import { lastInput } from "../consts/consts.js";

export const lastInput: InputCurrency = {};

export function updateLastInput(eventTarget: HTMLInputElement) {
   const row: HTMLTableRowElement = eventTarget.closest("tr") as HTMLTableRowElement;
   lastInput.currencyName = (row.querySelector("input.exchage_currency_name") as HTMLInputElement).value;
   lastInput.amount = Number(eventTarget.value);
   console.log(lastInput);
}
