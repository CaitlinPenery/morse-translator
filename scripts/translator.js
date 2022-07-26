// translate english to morse
export const engToMorse = (english, dictObject) => {
    return english
        .toLowerCase()
        .split("")
        .map((char) => {
            let newChar = Object.entries(dictObject).find(
                ([character]) => character[0] === char
            );
            return newChar ? newChar[1] : "INVALID INPUT";
        })
        .join(" ");
};
// translate morse to english
export const morseToEng = (morse, dictObject) => {
    return morse
        .trim()
        .split(" ") // split the words
        .map((char) => {
            if (char === "") {
                return "";
            }
            const newChar = Object.entries(dictObject).find(
                //finding the key-value pair & returning.
                (el) => el[1] === char
            );
            return newChar ? newChar[0] : "INVALID INPUT"; //if cannot find in object
        })
        .join("") // join the array at split level
        .toUpperCase();
};
