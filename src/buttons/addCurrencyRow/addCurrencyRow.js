export function cloneCurrencyRow() {
    const addCurrencyButton = document.getElementById("add_currency_button");
    const currencyRows = document.getElementsByClassName("exchage_currency_row");
    const newCurrencyRow = currencyRows[currencyRows.length - 1].cloneNode(true); // Clone last row
    newCurrencyRow.querySelector("button").remove(); // Remove cloned button (to avoid ID issues)
    newCurrencyRow.appendChild(addCurrencyButton); // Move button to the new row
    document.querySelector("tbody").append(newCurrencyRow); // Add the row to the table
    appendLabel(newCurrencyRow); // Change the row's label
    return newCurrencyRow;
}
// Apeend 1 to the label's number
function appendLabel(row) {
    let label = row.getElementsByClassName("row_label")[0];
    let number = Number(label.textContent.charAt(label.textContent.length - 1));
    label.textContent = `Currency #${number + 1}`;
}
//# sourceMappingURL=addCurrencyRow.js.map