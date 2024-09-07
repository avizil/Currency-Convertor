const rowLabelTemplate: string = "Curency #"; // The template for the labeling of each row
export let rowCounter: number = 1;

export function increaseRowCount() {
   ++rowCounter;
}

export function decreaseRowCount() {
   --rowCounter;
}

export function updateRowNumbering() {
   const rows: HTMLCollection = document.getElementsByClassName("row_label");
   for (let i = 0; i < rowCounter; ++i) {
      rows[i].textContent = rowLabelTemplate + (i + 1);
   }
}
