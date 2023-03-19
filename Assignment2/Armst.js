function armst(a) {
    var num = 0;
    var num1 = 0;
    var sum = 0;
    var num2 = a.toString().split('');
    num = num2.length;
    num2.forEach(function (element) {
        var ele = parseInt(element);
        num1 = Math.pow(ele, num);
        sum += num1;
    });
    if (sum == a) {
        return true;
    }
    else
        return false;
}
var arm = armst(407);
if (arm) {
    console.log("its armstrong number");
}
else {
    console.log("not armstrong number");
}
