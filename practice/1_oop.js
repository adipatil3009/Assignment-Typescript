var Arthematic = /** @class */ (function () {
    function Arthematic(a, b) {
        this.a = a;
        this.b = b;
    }
    Arthematic.prototype.Addition = function () {
        return this.a + this.b;
    };
    Arthematic.prototype.Substraction = function () {
        return this.a - this.b;
    };
    return Arthematic;
}());
var obj1 = new Arthematic(5, 4);
var obj2 = new Arthematic(5, 4);
var rama = obj1.Addition();
var rama1 = obj1.Substraction();
console.log("addition of 5+4 is ".concat(rama, " and substraction of 5-4 is ").concat(rama1));
