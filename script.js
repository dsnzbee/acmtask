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