let assert = require("chai").assert
function sum(arr) {
    let sum = 0;
    for (num of arr)
        sum += Number(num);
    return sum;
}

describe("sum",function(){
    it ("should return 22",function(){
        assert.equal(sum([2,10,5,5]),22,"Function did not returd the correct result!")
    })
    it ("should return 50",function(){
        assert.equal(sum([25,25]),50,"Function did not returd the correct result!")
    })
    it ("should return 100",function(){
        assert.equal(sum([10,10,10,10,10,10,10,10,10,10]),"100","Function did not returd the correct result!")
    })
})