function maximum1(numbers) {
    // let num1=parseInt(arr[0])
    var number1 = 1;
    numbers.forEach(function (number2) {
        // console.log(typeof(num))
        // let num2ber=parseInt(num);
        if (number2 > number1) {
            number1 = number2;
        }
    });
    console.log(number1);
}
var numbers = [1, 5, 8, 3, 5];
maximum1(numbers);
function maximum() {
    var arr = [];
    for (var _i = 0; _i < arguments.length; _i++) {
        arr[_i] = arguments[_i];
    }
    var num1 = parseInt(arr[0]);
    arr.forEach(function (num) {
        // console.log(typeof(num))
        var num2 = parseInt(num);
        if (num2 > num1) {
            num1 = num2;
        }
    });
    console.log(num1);
}
maximum(1, 12, 4, 2, 5, 6, 9, 10);
