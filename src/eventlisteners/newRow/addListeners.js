import { evaluateRowRemoval } from "../../buttons/removeRow/removeButton.js";
import { updateLastInput } from "../../inputTracking/inputTracker.js";
export function addListenersToRow(row) {
    addRemoveButtonListener(row);
    addLastInput(row);
    addCharValidation(row);
}
function addRemoveButtonListener(row) {
    const removeRowButton = row.querySelector("button.remove_row_button");
    if (removeRowButton) {
        removeRowButton.addEventListener("click", (event) => evaluateRowRemoval(event.target));
    }
}
function addLastInput(row) {
    const amountInput = row.querySelector("input.exchange_currency_amount");
    if (amountInput) {
        amountInput.addEventListener("input", (event) => updateLastInput(event.target));
    }
}
function addCharValidation(row) {
    const currNameInput = row.querySelector("input.exchage_currency_name");
    currNameInput.addEventListener("input", (event) => {
        const input = event.target;
        if (input) {
            input.value = input.value.replace(/[^a-zA-Z]/g, "");
            input.value = input.value.toUpperCase();
        }
    });
}
//# sourceMappingURL=addListeners.js.map