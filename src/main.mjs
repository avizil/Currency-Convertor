import { addListenersToRow } from "./eventlisteners/newRow/addListeners.js";
import { calculateButtonListener, addRowButtonListener } from "./eventlisteners/pageLoading/initiateListeners.js";

const calculateButton = document.getElementById("calculate_button");
calculateButton.addEventListener("click", () => calculateButtonListener());

const addCurrencyButton = document.getElementById("add_currency_button");
addCurrencyButton.addEventListener("click", () => addRowButtonListener());


const resetButton = document.getElementById("reset_button");
resetButton.addEventListener("click", () => location.reload());

const rows = document.getElementsByClassName("exchage_currency_row");
Array.from(rows).forEach((row) => addListenersToRow(row));
