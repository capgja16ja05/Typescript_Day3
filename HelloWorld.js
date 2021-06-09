"use strict";
exports.__esModule = true;
var a = "Hello World App - 1 vrtgrtgh";
console.log("" + a);
var Myclass = /** @class */ (function () {
    function Myclass() {
    }
    Myclass.prototype.doThings = function () {
        console.log("Inside my class - 1");
        console.log("Inside my class - 2");
        console.log("Inside my class - 3");
    };
    return Myclass;
}());
var obj = new Myclass();
obj.doThings();
