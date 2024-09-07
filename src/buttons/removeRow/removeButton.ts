import { lastInput } from "../../inputTracking/inputTracker.js";
import { decreaseRowCount, rowCounter, updateRowNumbering } from "../../utilities/rowCounter/rowCounter.js";

export function evaluateRowRemoval(eventTarget: HTMLElement) {
   if (rowCounter < 2) {
      return;
   } else {
      removeRow(eventTarget);
   }
}

export function removeRow(eventTarget: HTMLElement) {
   const row: HTMLTableRowElement = eventTarget.closest("tr") as HTMLTableRowElement;
   const rowCurrency: string = (row.querySelector("input.exchage_currency_name") as HTMLInputElement).value;
   // If the last input is this row, it should be reset
   if (lastInput.currencyName === rowCurrency) {
      lastInput.currencyName = undefined;
      lastInput.amount = undefined;
   }
   const addCurrencyButton: HTMLButtonElement = row.querySelector("button.add_currency_button") as HTMLButtonElement;
   if (addCurrencyButton) {
      row.previousElementSibling?.append(addCurrencyButton);
   }
   decreaseRowCount();
   row.remove();
   updateRowNumbering();
}
