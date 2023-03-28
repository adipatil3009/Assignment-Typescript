var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
var area1 = /** @class */ (function () {
    function area1(rad) {
        this.rad = rad;
        this.PI = 3.14;
    }
    return area1;
}());
var xarea = /** @class */ (function (_super) {
    __extends(xarea, _super);
    function xarea(rad) {
        return _super.call(this, rad) || this;
    }
    xarea.prototype.Circumference = function () {
        return 2 * this.PI * this.rad;
    };
    return xarea;
}(area1));
var obj6 = new xarea(5);
var no1 = obj6.Circumference();
console.log("circumference of circle is ".concat(no1.toFixed(2)));
var obj7 = new xarea(7);
var no1 = obj7.Circumference();
console.log("circumference of circle is ".concat(no1.toFixed(2)));
