let assert = require("chai").assert;

function isSymmetric(arr) {
    if (!Array.isArray(arr))
        return false; // Non-arrays are non-symmetric
    let reversed = arr.slice(0).reverse(); // Clone and reverse
    let equal = (JSON.stringify(arr) == JSON.stringify(reversed));
    return equal;


}
// console.log(isSymmetric([1,2,3,4]))
describe("isSymmetric", function () {
    it("should return false with non-array parameter", function () {
        assert.equal(isSymmetric(1, 2, 3, 4), false, "Function did not returd the correct result!")
    })
    it("correct type", function () {
        assert.equal(isSymmetric([1, 2, 3, 4]),false, "Function did not returd the correct result!")
    })
    it("array is symmetric", function () {
        assert.equal(isSymmetric([1, 2, 3, 2, 1]), true, "Function did not returd the correct result!")
    })
})