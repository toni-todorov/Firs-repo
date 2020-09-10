let assert = require("chai").assert

function rgbToHexColor(red, green, blue) {
    if (!Number.isInteger(red) || (red < 0) || (red > 255))
        return undefined; // Red value is invalid
    if (!Number.isInteger(green) || (green < 0) || (green > 255))
        return undefined; // Green value is invalid
    if (!Number.isInteger(blue) || (blue < 0) || (blue > 255))
        return undefined; // Blue value is invalid
    return "#" +
        ("0" + red.toString(16).toUpperCase()).slice(-2) +
        ("0" + green.toString(16).toUpperCase()).slice(-2) +
        ("0" + blue.toString(16).toUpperCase()).slice(-2);
}


describe ("rgbToHexColor",function(){
    it ("should return #FF9EAA",function(){
        assert.equal(rgbToHexColor(255,158,170),"#FF9EAA", "Function doesn't work poperly ")
    })
    it ("should return undefined",function(){
        assert.equal(rgbToHexColor(300,255,5),undefined,"Funtion doesn't work properly")
    })
})
