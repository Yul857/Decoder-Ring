const { expect } = require("chai");
const { substitution } = require("../src/substitution");

describe("substitution", () => {
    it("should encode message if encode is true", () => {
        const actual = substitution("message", "$wae&zrdxtfcygvuhbijnokmpl");
        const expected = "y&ii$r&";
        expect(actual).to.eql(expected);
    });

    it("should decode message if encode is false", () => {
        const actual = substitution("y&ii$r&", "$wae&zrdxtfcygvuhbijnokmpl", false);
        const expected = "message";
        expect(actual).to.eql(expected);
    });

    it("should return false if the input or alphabet is missing", () => {
        const expected = false;
        const actual = substitution("", "");
        expect(actual).to.eql(expected);
    });

    it("should return false if all of the characters in the alphabet are not unique", () => {
        const alphabet = "abcabcabcabcabcabcabcabcyz";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });

    it("should return false if the alphabet is not exactly 26 characters long", () => {
        const alphabet = "short";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });

    it("Spaces should be maintained throughout.", () => {
        const actual = substitution("You are an excellent spy", "xoyqmcgrukswaflnthdjpzibev");
        const expected = "elp xhm xf mbymwwmfj dne"
        expect(actual).to.eql(expected);
    });

    it("The alphabet parameter must be a string of exactly 26 characters", () => {
        const alphabet = "supershort";

        const actual = substitution("thinkful", alphabet);
        expect(actual).to.be.false;
    });
})
