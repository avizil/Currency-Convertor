import { increaseRowCount } from "../../utilities/rowCounter/rowCounter.js";
import { addListenersToRow } from "../../eventlisteners/newRow/addListeners.js";
// First approach: clone the existing row
export function cloneCurrencyRow() {
    // Clone the row
    const addCurrencyButton = document.getElementById("add_currency_button");
    const currencyRows = document.getElementsByClassName("exchage_currency_row");
    const newCurrencyRow = currencyRows[currencyRows.length - 1].cloneNode(true); // Clone last row
    // Modify the cloned row
    newCurrencyRow.querySelector("button.add_currency_button")?.remove(); // Remove cloned button (to avoid ID issues)
    newCurrencyRow.appendChild(addCurrencyButton); // Move button to the new row
    appendLabel(newCurrencyRow); // Change the row's label
    Array.from(newCurrencyRow.querySelectorAll("input")).forEach((input) => (input.value = "")); // Remove the cloned input data
    newCurrencyRow.querySelector("td.td__rate").textContent = "";
    // Add the event listeners to the row
    addListenersToRow(newCurrencyRow);
    increaseRowCount();
    return newCurrencyRow;
}
// Apeend 1 to the label's number
function appendLabel(row) {
    let label = row.getElementsByClassName("row_label")[0];
    let number = Number(label.textContent.charAt(label.textContent.length - 1));
    label.textContent = `Currency #${number + 1}`;
}
// Second approach:
// Create a new row from scratch
export function addCurrencyRow() {
    const newRow = createCurrencyRow();
    const addCurrencyButton = document.getElementById("add_currency_button");
    newRow.appendChild(addCurrencyButton); // Move button to the new row
    const table = document.querySelector("tbody");
    table.append(newRow);
}
function createCurrencyRow() {
    const newRow = createElementWithClass("tr", { class: "exchage_currency_row" });
    // const nodeList: Node[] = [];
    const nodeList = new DocumentFragment();
    let newElement;
    // Create row numbering cell
    const currencyRowAmount = document.querySelectorAll("tr").length - 1;
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
function createElementWithClass(nodeType, /*className: string,*/ attributes) {
    const newElement = document.createElement(nodeType);
    // newElement.setAttribute("class", className);
    Object.entries(attributes).forEach((propertyValuePair) => newElement.setAttribute(propertyValuePair[0], propertyValuePair[1]));
    return newElement;
}
//# sourceMappingURL=addCurrencyRow.js.map