var b = 1;
var c = 1;
function fibonacci(a) {
    console.log(b);
    console.log(c);
    for (var index = 1; index < a; index++) {
        var num = b + c;
        b = c;
        c = num;
        if (a < c) {
            return;
        }
        console.log(c);
    }
}
fibonacci(21);
