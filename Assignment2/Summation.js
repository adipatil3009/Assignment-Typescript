var sum = 0;
var num = 0;
function summation(numbers) {
    numbers.forEach(function (element) {
        sum += element;
    });
    return sum;
}
var sumarr = [5, 3, 4, 7, 8, 2];
num = summation(sumarr);
console.log(num);
