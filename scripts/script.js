import morseCode from "./morseCode.js";
import { engToMorse, morseToEng } from "./translator.js";

const english = document.querySelector("#english");
const morse = document.querySelector("#morseCode");

english.addEventListener("input", () => {
    morse.value = engToMorse(english.value, morseCode) + "";
});

morse.addEventListener("input", () => {
    english.value = morseToEng(morse.value, morseCode);
});
