//Find Second largest number
//storing second largest

function seclr(numbers){
    let num1:number=0;
    let num2:number=0;
    for (let i = 0; i < numbers.length; i++) {
        if(numbers[i]>num1){
            num2=num1;
            num1=numbers[i]
        }
        
    }
    console.log(num2)
}

var sumarr = [15, 33, 24, 47, 28, 12];
seclr(sumarr);



//sorting 

var sum = 0;
function seclar(numbers) {
    var num= numbers[0]
    var temp=0;
    for (let i = 1; i < numbers.length; i++){
        for (let j = 0; j < numbers.length; j++) {
            if(numbers[i]<numbers[j]){
                temp=numbers[i];
                numbers[i]=numbers[j];
                numbers[j]=temp
               }
        }
        
    }
    console.log(numbers[numbers.length-2])
}
var sumarr = [5, 3, 4, 7, 8, 2];
seclar(sumarr);
