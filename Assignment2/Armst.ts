//FInd Armstrong number
function armst(a:number):boolean{

    var num:number=0;
    var num1:number=0;
    var sum:number=0;

    var num2=a.toString().split('');
    num=num2.length;
    num2.forEach(element => {
        let ele=parseInt(element)
        num1=ele**num;
        sum+=num1;
    });
    if (sum==a) {
        return true
    }else return false
}

var arm=armst(407)
if(arm){
    console.log("its armstrong number")
}else{console.log("not armstrong number")}