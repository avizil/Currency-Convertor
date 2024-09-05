import { InputCurrency } from "../interfaces/inputCurrency/inputCurrency.interface.js";

// export const lastInput: InputCurrency = {};
export const rateIndex: number = 2; // The index of the Rate column in the table
export const currNameIndex: number = findColumnIndex("td__currency_name", "exchage_currency_row"); // The index of the currency name's column in the table

export const amountIndex: number = findColumnIndex("td__amount", "exchage_currency_row");

function findColumnIndex(className: string, rowClass: string): number {
   const rows: HTMLCollection = document.getElementsByClassName(rowClass);
   let index: number = 0;
   for (const cell of rows[0].children) {
      if (cell.getAttribute("class") === className) {
         break;
      }
      ++index;
   }

   return index;
}
