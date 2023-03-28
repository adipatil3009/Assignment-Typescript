var Arthematic = /** @class */ (function () {
    function Arthematic(No1, No2) {
        this.No1 = No1;
        this.No2 = No2;
    }
    Arthematic.prototype.Addition = function () {
        return this.No1 + this.No2;
    };
    Arthematic.prototype.Substraction = function () {
        return this.No1 - this.No2;
    };
    Arthematic.prototype.Multiplication = function () {
        return this.No1 * this.No2;
    };
    Arthematic.prototype.Division = function () {
        return this.No1 / this.No2;
    };
    return Arthematic;
}());
var Num1 = 5;
var Num2 = 6;
var obj = new Arthematic(Num1, Num2);
var No1 = obj.Addition();
var No2 = obj.Substraction();
var No3 = obj.Multiplication();
var No4 = obj.Division();
var Num1 = 8;
var Num2 = 7;
var obj1 = new Arthematic(Num1, Num2);
var NNo1 = obj1.Addition();
var NNo2 = obj1.Substraction();
var NNo3 = obj1.Multiplication();
var NNo4 = obj1.Division();
console.log(" Addition of ".concat(Num1, " and ").concat(Num2, " = ").concat(No1, ",\n Substraction of ").concat(Num1, " and ").concat(Num2, " = ").concat(No2, ",\n Multiplication of ").concat(Num1, " and ").concat(Num2, " = ").concat(No3, ",\n Division of ").concat(Num1, " and ").concat(Num2, " = ").concat(No4));
console.log('--------------------------------------------------------------------------------------');
console.log(" Addition of ".concat(Num1, " and ").concat(Num2, " = ").concat(NNo1, ",\n Substraction of ").concat(Num1, " and ").concat(Num2, " = ").concat(NNo2, ",\n Multiplication of ").concat(Num1, " and ").concat(Num2, " = ").concat(NNo3, ",\n Division of ").concat(Num1, " and ").concat(Num2, " = ").concat(NNo4));
