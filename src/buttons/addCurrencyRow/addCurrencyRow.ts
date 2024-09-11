import { updateLastInput } from "../../inputTracking/inputTracker.js";
import { evaluateRowRemoval, removeRow } from "../removeRow/removeButton.js";
import { increaseRowCount, updateRowNumbering } from "../../utilities/rowCounter/rowCounter.js";
import { addListenersToRow } from "../../eventlisteners/addListeners/addListeners.js";

// First approach: clone the existing row

export function cloneCurrencyRow(): HTMLTableRowElement {
   // Clone the row
   const addCurrencyButton: HTMLButtonElement = document.getElementById("add_currency_button") as HTMLButtonElement;
   const currencyRows = document.getElementsByClassName("exchage_currency_row");
   const newCurrencyRow: HTMLTableRowElement = currencyRows[currencyRows.length - 1].cloneNode(true) as HTMLTableRowElement; // Clone last row

   // Modify the cloned row
   newCurrencyRow.querySelector("button.add_currency_button")?.remove(); // Remove cloned button (to avoid ID issues)
   newCurrencyRow.appendChild(addCurrencyButton); // Move button to the new row
   appendLabel(newCurrencyRow); // Change the row's label
   Array.from(newCurrencyRow.querySelectorAll("input")).forEach((input) => (input.value = "")); // Remove the cloned input data
   newCurrencyRow.querySelector("td.td__rate")!.textContent = "";

   // Add the event listeners to the row
   addListenersToRow(newCurrencyRow);

   increaseRowCount();
   return newCurrencyRow;
}

// Apeend 1 to the label's number
function appendLabel(row: HTMLTableRowElement) {
   let label: HTMLElement = row.getElementsByClassName("row_label")[0] as HTMLElement;
   let number: number = Number(label.textContent!.charAt(label.textContent!.length - 1));
   label.textContent = `Currency #${number + 1}`;
}

// Second approach:
// Create a new row from scratch

export function addCurrencyRow() {
   const newRow: HTMLTableRowElement = createCurrencyRow();
   const addCurrencyButton: HTMLButtonElement = document.getElementById("add_currency_button") as HTMLButtonElement;
   newRow.appendChild(addCurrencyButton); // Move button to the new row
   const table: HTMLElement = document.querySelector("tbody") as HTMLElement;
   table.append(newRow);
}

function createCurrencyRow(): HTMLTableRowElement {
   const newRow: HTMLTableRowElement = createElementWithClass("tr", { class: "exchage_currency_row" }) as HTMLTableRowElement;
   // const nodeList: Node[] = [];
   const nodeList: DocumentFragment = new DocumentFragment();
   let newElement: HTMLElement;
   // Create row numbering cell
   const currencyRowAmount: number = document.querySelectorAll("tr").length - 1;
   newElement = createElementWithClass("td", { class: "exchage_currency_row" });
   newElement.textContent = `Currency #${currencyRowAmount}`;
   nodeList.append(newElement);
   // Create a currency name cell
   newElement = createElementWithClass("td", { class: "td__currency_name" });
   newElement.append(createElementWithClass("input", { class: "exchage_currency_name" }));
   nodeList.append(newElement);
   // Create the rate cell
   newElement = createElementWithClass("td", { class: "td__rate" });
   newElement.append(createElementWithClass("center", { class: "exchage_currency_rate" }));
   nodeList.append(newElement);
   // Create an amount cell
   newElement = createElementWithClass("td", { class: "td__amount" });
   newElement.append(createElementWithClass("input", { class: "exchange_currency_amount" }));
   nodeList.append(newElement);

   newRow.append(nodeList);
   return newRow;
}

function createElementWithClass(nodeType: string, /*className: string,*/ attributes: Object): HTMLElement {
   const newElement: HTMLElement = document.createElement(nodeType);
   // newElement.setAttribute("class", className);
   Object.entries(attributes).forEach((propertyValuePair) => newElement.setAttribute(propertyValuePair[0], propertyValuePair[1]));
   return newElement;
}
