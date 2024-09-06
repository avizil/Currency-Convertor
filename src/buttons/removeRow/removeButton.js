import { lastInput } from "../../inputTracking/inputTracker.js";
import { decreaseRowCount, rowCounter } from "../../utilities/rowCounter/rowCounter.js";
export function evaluateRowRemoval(eventTarget) {
    if (rowCounter < 2) {
        console.log("Row removal denied - " + document.getElementsByClassName("exchage_currency_row").length);
        return;
    }
    else {
        console.log("Row removal accepted - " + document.getElementsByClassName("exchage_currency_row").length);
        console.log(document.getElementsByClassName("exchage_currency_row").length < 3);
        removeRow(eventTarget);
    }
}
export function removeRow(eventTarget) {
    console.log("Row removal accepted - " + document.getElementsByClassName("exchage_currency_row").length);
    const row = eventTarget.closest("tr");
    const rowCurrency = row.querySelector("input.exchage_currency_name").value;
    // If the last input is this row, it should be reset
    if (lastInput.currencyName === rowCurrency) {
        lastInput.currencyName = undefined;
        lastInput.amount = undefined;
    }
    const addCurrencyButton = row.querySelector("button.add_currency_button");
    if (addCurrencyButton) {
        row.previousElementSibling?.append(addCurrencyButton);
    }
    decreaseRowCount();
    row.remove();
}
//# sourceMappingURL=removeButton.js.map