const { expect } = require("chai");
const { caesar } = require("../src/caesar");

describe("caesar", () => {

    it("If the shift value is equal to 0, return false", () => {
        const actual = caesar("message", 0);
        expect(actual).to.be.false;
    });

    it("If the shift value is less than -25, return false", () => {
        const actual = caesar("message", -26);
        expect(actual).to.be.false;
    });

    it("If the shift value is greater than 25, return false", () => {
        const actual = caesar("message", 26);
        expect(actual).to.be.false;
    });

    it("If the shift value or input value is missing, return false", () => {
        const expected = false;
        const actual = caesar("", )
        expect(actual).to.eql(expected); 
    });

    it("should maintain spaces and non-alphabetical symbols", () => {
        const actual = caesar("bpqa qa i amkzmb umaaiom!", 8, false);
        const expected = "this is a secret message!"
        expect(actual).to.eql(expected);
    });

    it("should ignore capital letters", () => {
        const actual = caesar("THIS IS A SECRET MESSAGE!", 8);
        const expected = "bpqa qa i amkzmb umaaiom!"
        expect(actual).to.eql(expected);
    });

    it("should encode message if encode is true", () => {
        const actual = caesar("MESSAGE", 8);
        const expected = "umaaiom";
        expect(actual).to.eql(expected);
    });

    it("should decode message if encode is false", () => {
        const actual = caesar("umaaiom", 8, false);
        const expected = "message";
        expect(actual).to.eql(expected);
    });
})