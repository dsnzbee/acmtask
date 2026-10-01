/*
    ALGORITHM: Dice Roller & Random Password Generator

    PART 1: Dice Roller
    1. SETUP:
       - Get the number input element for the number of dice.
       - Get the "Roll Dice" button element.
       - Get the text result display element and image container element.

    2. ROLL LOGIC (inside roll button click handler):
       - Read the number of dice from the input field.
       - Create two empty arrays: `values` (for numbers) and `images` (for HTML <img> strings).
       - Run a for-loop from 0 up to the number of dice:
           - Generate a random integer between 1 and 6: `Math.floor(Math.random() * 6) + 1`.
           - Push the number to `values`.
           - Push an `<img>` tag with the corresponding dice image source into `images`.
       - Display the joined numbers in the text result element.
       - Set the `.innerHTML` of the image container to the joined images array.

    PART 2: Random Password Generator
    1. SETUP:
       - Define character set strings: lowercase, uppercase, numbers, and symbols.
       - Define helper function `generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols)`.

    2. GENERATOR LOGIC:
       - Create an empty string `allowedChars` and an empty string `password`.
       - Based on boolean flags, append matching character sets to `allowedChars`.
       - If `length <= 0`, return an error message.
       - If `allowedChars.length === 0`, return an error message stating at least one set must be chosen.
       - Loop `length` times:
           - Generate a random index between 0 and `allowedChars.length - 1`.
           - Append the character at that random index to `password`.
       - Return the generated `password`.
*/

// WRITE YOUR CODE BELOW:

let numOfDice = document.getElementById("numOfDice");
let rollBtn = document.getElementById("rollBtn");
let diceResult = document.getElementById("diceResult");
let diceImages = document.getElementById("diceImages");

rollBtn.onclick = function () {
    let howMany = Number(numOfDice.value);
    let values = [];
    let images = [];

    for (let i = 0; i < howMany; i++) {
        let number = Math.floor(Math.random() * 6) + 1;
        values.push(number);
        images.push('<img src="dice_images/' + number + '.png" width="60">');
    }

    diceResult.textContent = "You rolled: " + values.join(", ");
    diceImages.innerHTML = images.join("");
};


let lowercase = "abcdefghijklmnopqrstuvwxyz";
let uppercase = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
let numbers = "0123456789";
let symbols = "!@#$%^&*()_+-=";

function generatePassword(length, includeLower, includeUpper, includeNumbers, includeSymbols) {
    let allowedChars = "";
    let password = "";

    if (includeLower) {
        allowedChars = allowedChars + lowercase;
    }
    if (includeUpper) {
        allowedChars = allowedChars + uppercase;
    }
    if (includeNumbers) {
        allowedChars = allowedChars + numbers;
    }
    if (includeSymbols) {
        allowedChars = allowedChars + symbols;
    }

    if (length <= 0) {
        return "Password length must be at least 1";
    }
    if (allowedChars.length === 0) {
        return "Please choose at least one set of characters";
    }

    for (let i = 0; i < length; i++) {
        let randomIndex = Math.floor(Math.random() * allowedChars.length);
        password = password + allowedChars[randomIndex];
    }

    return password;
}

let passwordLength = document.getElementById("passwordLength");
let includeLower = document.getElementById("includeLower");
let includeUpper = document.getElementById("includeUpper");
let includeNumbers = document.getElementById("includeNumbers");
let includeSymbols = document.getElementById("includeSymbols");
let generateBtn = document.getElementById("generateBtn");
let passwordResult = document.getElementById("passwordResult");

generateBtn.onclick = function () {
    let length = Number(passwordLength.value);

    let password = generatePassword(
        length,
        includeLower.checked,
        includeUpper.checked,
        includeNumbers.checked,
        includeSymbols.checked
    );

    passwordResult.textContent = password;
};