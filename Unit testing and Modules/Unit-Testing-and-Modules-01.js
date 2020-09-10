let assert = require("chai").assert;
let expect = require("chai").expect;
let should = require("chai").should();

function isOddOrEven(string) {

    if (typeof (string) !== 'string') {
        return undefined;
    }
    if (string.length % 2 === 0) {
        return "even";
    }

    return "odd";
}
describe("isOddOrEven", function () {
    it("should return undefined with a number parameter", function () {
        expect(isOddOrEven(13)).to.equal(undefined, "Function did not returd the correct result!")
    })

    it("should return undefined with a object parameter", function () {
        isOddOrEven({ name: "George" }).should.equal(undefined, "Function did not returd the correct result!")
    })

    it("should return undefined with an even length", function () {
        assert.equal(isOddOrEven("roar"), "even", "Function did not returd the correct result!")
    })

    it("should return undefined with an even length", function () {
        expect(isOddOrEven("Peter")).to.equal("odd", "Function did not returd the correct result!")
    })

    it("should return undefined with multiple consecutive checks", function () {
        expect(isOddOrEven("cat")).to.equal("odd", "Function did not returd the correct result!")
        expect(isOddOrEven("pet")).to.equal("odd", "Function did not returd the correct result!")
        expect(isOddOrEven("bird")).to.equal("even", "Function did not returd the correct result!")
    })
})