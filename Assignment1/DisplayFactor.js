var arr = [];
function DisplayFactor(a) {
    for (var index = 0; index < a; index++) {
        if (a % index == 0) {
            console.log(index);
        }
    }
}
DisplayFactor(20);
var narr = new Array();
function DisplayFactor1(a) {
    for (var index = 0; index < a; index++) {
        if (a % index == 0) {
            var num = index.toString();
            narr.push(num);
        }
    }
    console.log(narr);
}
DisplayFactor1(20);
// console.log(num)
