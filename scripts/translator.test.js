import morseCode from "./morseCode.js";
import { engToMorse, morseToEng } from "./translator.js";

describe("Testing that English to Morse outputs correct values", () => {
    it("Tranlate indivual chars as specified", () => {
        expect(engToMorse("c", morseCode)).toBe("-.-.");
        expect(engToMorse("7", morseCode)).toBe("--...");
        expect(engToMorse("?", morseCode)).toBe("..--..");
    });
    it("Should translate spaces correctly", () => {
        expect(engToMorse("a b", morseCode)).toBe(".- / -...");
    });
    it("Should return charators with no translation as Invalid Input", () => {
        expect(engToMorse("[", morseCode)).toBe("INVALID INPUT");
        expect(engToMorse("&", morseCode)).toBe("INVALID INPUT");
        expect(engToMorse("*", morseCode)).toBe("INVALID INPUT");
    });
    it("Should translate words with spaces and upper/lowercase characters", () => {
        expect(engToMorse("Hello World", morseCode)).toBe(
            ".... . .-.. .-.. --- / .-- --- .-. .-.. -.."
        );
    });
});

describe("Testing that Morse to English outputs correct values", () => {
    it("Tranlate indivual chars as specified", () => {
        expect(morseToEng("-.-.", morseCode)).toBe("C");
        expect(morseToEng("--...", morseCode)).toBe("7");
        expect(morseToEng("..--..", morseCode)).toBe("?");
    });
    it("Should translate spaces correctly", () => {
        expect(morseToEng(".- / -...", morseCode)).toBe("A B");
    });
    it("Should return charators with no translation as Invalid Input", () => {
        expect(morseToEng("5", morseCode)).toBe("INVALID INPUT");
        expect(morseToEng("a", morseCode)).toBe("INVALID INPUT");
        expect(morseToEng("?", morseCode)).toBe("INVALID INPUT");
        expect(morseToEng(".........", morseCode)).toBe("INVALID INPUT");
    });
    it("Should translate words with spaces and upper/lowercase characters", () => {
        expect(
            morseToEng(".... . .-.. .-.. --- / .-- --- .-. .-.. -..", morseCode)
        ).toBe("HELLO WORLD");
    });
});
