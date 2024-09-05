// import { lastInput } from "../consts/consts.js";
export const lastInput = {};
export function updateLastInput(eventTarget) {
    const row = eventTarget.closest("tr");
    lastInput.currencyName = row.querySelector("input.exchage_currency_name").value;
    lastInput.amount = Number(eventTarget.value);
    console.log(lastInput);
}
//# sourceMappingURL=inputTracker.js.map