function area(rad, PI) {
    if (PI === void 0) { PI = 3.14; }
    return PI * rad * rad;
}
console.log("Area of circle");
var num = area(5);
console.log(num);
