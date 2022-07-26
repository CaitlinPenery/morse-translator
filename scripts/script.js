// Importing pure functions and morseCode dictionary
import morseCode from "./morseCode.js";
import { engToMorse, morseToEng } from "./translator.js";

// grabbing the element variables
const english = document.querySelector("#english");
const morse = document.querySelector("#morseCode");

// Event listeners to call function on input
english.addEventListener("input", () => {
    morse.value = engToMorse(english.value, morseCode) + "";
});

morse.addEventListener("input", () => {
    english.value = morseToEng(morse.value, morseCode);
});
