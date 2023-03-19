//find sum of all array numbers

var sum:number=0;
var num:number=0;
function summation(numbers):number{
    numbers.forEach(element => {
        sum+=element
    });
    return sum
}

var sumarr:number[]=[5,3,7,8,2]
num=summation(sumarr);
console.log(num)