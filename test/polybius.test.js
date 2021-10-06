const { expect } = require("chai");
const { polybius } = require("../src/polybius");

describe("polybius", () => { 
    it("should encode message if encode is true", () => {
        const actual = polybius("Hello");
        const expected = "3251131343";
        expect(actual).to.eql(expected);
    });

    it("should decode message if encode is false", () => {
        const actual = polybius("3251131343", false);
        const expected = "hello";
        expect(actual).to.eql(expected);
    });

    it("should translate the number 42 to the letters i and j while decoding", () => {
        const actual = polybius("4432423352125413", false);
        const expected = "th(i/j)nkful";
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters and maintain spaces and non-alphabetical symbols while encoding", () => {
        const actual = polybius("Hello world");
        const expected = "3251131343 2543241341"
        expect(actual).to.eql(expected);
    });

    it("When decoding, the number of characters in the string excluding spaces should be even.", () => {
        const actual = polybius("1234567", false);
        expect(actual).to.be.false;
    }); 

    it(("should maintain spaces while deciding"), () => {
        const expected = "hello world";
        const actual = polybius("3251131343 2543241341", false);
        expect(actual).to.eql(expected);
    });
})
