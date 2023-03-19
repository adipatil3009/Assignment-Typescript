function Prime(a) {
    for (var index = 2; index < a; index++) {
        if (a % index == 0) {
            return false;
        }
        else {
            return true;
        }
    }
}
var num = Prime(12);
console.log(num);
if (num) {
    console.log("Number is Prime");
}
else {
    console.log("Number is not prime");
}
