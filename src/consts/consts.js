// export const lastInput: InputCurrency = {};
export const rateIndex = 2; // The index of the Rate column in the table
export const currNameIndex = findColumnIndex("td__currency_name", "exchage_currency_row"); // The index of the currency name's column in the table
export const amountIndex = findColumnIndex("td__amount", "exchage_currency_row");
function findColumnIndex(className, rowClass) {
    const rows = document.getElementsByClassName(rowClass);
    let index = 0;
    for (const cell of rows[0].children) {
        if (cell.getAttribute("class") === className) {
            break;
        }
        ++index;
    }
    return index;
}
//# sourceMappingURL=consts.js.map