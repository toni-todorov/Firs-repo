let assert = require("chai").assert;

function createCalculator() {
    let value = 0;
    return {
        add: function(num) { value += Number(num); },
        subtract: function(num) { value -= Number(num); },
        get: function() { return value; }
    }
}
let calc = createCalculator()
describe ("createCalculator",function(){
    it ("check for object",function(){
        assert.equal(typeof(createCalculator()), typeof({}), "the return is not object")
    })
    it("check can be change value", function(){
        calc.value = 5
        assert.equal(calc.get(), 0,"value can be reached")
    })
    it ("add/subtract",function(){
        calc.add(5)
        assert.equal(calc.get(),5,"add/substract work")
    })
}) 