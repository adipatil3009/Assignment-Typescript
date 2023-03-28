var Area = /** @class */ (function () {
    function Area(rad) {
        this.rad = rad;
        this.PI = 3.14;
    }
    Area.prototype.area = function () {
        return this.PI * this.rad * this.rad;
    };
    return Area;
}());
var rad = 5;
var obj3 = new Area(rad);
var CArea = obj3.area();
var rad1 = 6;
var obj4 = new Area(rad1);
var CArea1 = obj4.area();
console.log("Area of circle having radius ".concat(rad, " =").concat(CArea.toFixed(2), "\n"));
console.log("Area of circle having radius ".concat(rad1, " =").concat((CArea1).toFixed(2)));
