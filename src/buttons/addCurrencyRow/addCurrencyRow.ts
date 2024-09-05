import { updateLastInput } from "../../inputTracking/inputTracker.js";

export function cloneCurrencyRow(): HTMLTableRowElement {
   const addCurrencyButton: HTMLButtonElement = document.getElementById("add_currency_button") as HTMLButtonElement;
   const currencyRows = document.getElementsByClassName("exchage_currency_row");
   const newCurrencyRow: HTMLTableRowElement = currencyRows[currencyRows.length - 1].cloneNode(true) as HTMLTableRowElement; // Clone last row
   newCurrencyRow.querySelector("button")!.remove(); // Remove cloned button (to avoid ID issues)
   newCurrencyRow.appendChild(addCurrencyButton); // Move button to the new row
   document.querySelector("tbody")!.append(newCurrencyRow); // Add the row to the table
   appendLabel(newCurrencyRow); // Change the row's label

   // Add an input event listener to identify the input amount
   const amountInput: HTMLInputElement = newCurrencyRow.querySelector("input.exchange_currency_amount") as HTMLInputElement;
   amountInput.addEventListener("input", (event) => updateLastInput(event.target as HTMLInputElement));

   return newCurrencyRow;
}

// Apeend 1 to the label's number
function appendLabel(row: HTMLTableRowElement) {
   let label: HTMLElement = row.getElementsByClassName("row_label")[0] as HTMLElement;
   let number: number = Number(label.textContent!.charAt(label.textContent!.length - 1));
   label.textContent = `Currency #${number + 1}`;
}
