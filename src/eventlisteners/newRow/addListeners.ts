import { evaluateRowRemoval } from "../../buttons/removeRow/removeButton.js";
import { updateLastInput } from "../../inputTracking/inputTracker.js";

export function addListenersToRow(row: HTMLTableRowElement) {
   addRemoveButtonListener(row);
   addLastInput(row);
   addCharValidation(row);
}

function addRemoveButtonListener(row: HTMLTableRowElement) {
   const removeRowButton: HTMLButtonElement = row.querySelector("button.remove_row_button") as HTMLButtonElement;
   if (removeRowButton) {
      removeRowButton.addEventListener("click", (event) => evaluateRowRemoval(event.target as HTMLElement));
   }
}

function addLastInput(row: HTMLTableRowElement) {
   const amountInput: HTMLInputElement = row.querySelector("input.exchange_currency_amount") as HTMLInputElement;
   if (amountInput) {
      amountInput.addEventListener("input", (event) => updateLastInput(event.target as HTMLInputElement));
   }
}

function addCharValidation(row: HTMLTableRowElement) {
   const currNameInput: HTMLInputElement = row.querySelector("input.exchage_currency_name") as HTMLInputElement;
   currNameInput.addEventListener("input", (event) => {
      const input: HTMLInputElement = event.target as HTMLInputElement;
      if (input) {
         input.value = input.value.replace(/[^a-zA-Z]/g, "");
         input.value = input.value.toUpperCase();
      }
   });
}
