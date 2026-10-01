/*
    ALGORITHM: Number Counter & Temperature Converter

    PART 1: Number Counter
    1. SETUP:
       - Declare a variable `count` initialized to 0.
       - Get the label/display element showing the count value.
       - Get the "Increase", "Decrease", and "Reset" button elements.

    2. EVENT LISTENERS & LOGIC:
       - When "Increase" is clicked:
           - Increment `count` by 1.
           - Update the label's text content with `count`.
       - When "Decrease" is clicked:
           - Decrement `count` by 1.
           - Update the label's text content with `count`.
       - When "Reset" is clicked:
           - Set `count` to 0.
           - Update the label's text content with `count`.

    PART 2: Temperature Converter
    1. SETUP:
       - Get the number input element for the temperature value.
       - Get the radio button elements for "to Fahrenheit" and "to Celsius".
       - Get the "Submit" button element.
       - Get the paragraph element where the result will be displayed.

    2. CONVERSION LOGIC (inside submit button click handler):
       - Read the numeric value from the input field.
       - Check which radio button is selected using its `.checked` property.
       - If "to Fahrenheit" is selected:
           - Calculate: (temp * 9 / 5) + 32.
           - Format with `.toFixed(1)` and display result as `°F`.
       - Else if "to Celsius" is selected:
           - Calculate: (temp - 32) * (5 / 9).
           - Format with `.toFixed(1)` and display result as `°C`.
       - Else:
           - Display an error message asking the user to select a unit.
*/

// WRITE YOUR CODE BELOW:


let count = 0;

let countLabel = document.getElementById("countLabel");
let increaseBtn = document.getElementById("increaseBtn");
let decreaseBtn = document.getElementById("decreaseBtn");
let resetBtn = document.getElementById("resetBtn");

increaseBtn.onclick = function () {
    count = count + 1;
    countLabel.textContent = count;
};

decreaseBtn.onclick = function () {
    count = count - 1;
    countLabel.textContent = count;
};

resetBtn.onclick = function () {
    count = 0;
    countLabel.textContent = count;
};


let tempInput = document.getElementById("tempInput");
let toFahrenheit = document.getElementById("toFahrenheit");
let toCelsius = document.getElementById("toCelsius");
let submitBtn = document.getElementById("submitBtn");
let result = document.getElementById("result");

submitBtn.onclick = function () {
    let temp = Number(tempInput.value);

    if (toFahrenheit.checked) {
        let answer = (temp * 9 / 5) + 32;
        result.textContent = answer.toFixed(1) + "°F";
    } else if (toCelsius.checked) {
        let answer = (temp - 32) * (5 / 9);
        result.textContent = answer.toFixed(1) + "°C";
    } else {
        result.textContent = "Please select a unit";
    }
};