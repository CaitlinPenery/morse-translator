export const engToMorse = (english, dictObject) => {
    return english
        .toLowerCase()
        .split("")
        .map((char) => {
            let newChar = Object.entries(dictObject).find(
                ([character, morse]) => character === char
            );
            return newChar ? newChar[1] : "INVALID INPUT";
        })
        .join(" ");
};

export const morseToEng = (morse, dictObject) => {
    return morse
        .trim()
        .split(" ")
        .map((char) => {
            if (char === "") {
                return "";
            }
            const newChar = Object.entries(dictObject).find(
                (el) => el[1] === char
            );
            return newChar ? newChar[0] : "INVALID INPUT";
        })
        .join("")
        .toUpperCase();
};
