class Arthematic {

    No1:number;
    No2:number;
    constructor(No1:number,No2:number) {
        this.No1=No1;
        this.No2=No2;
    }

    Addition(){
        return this.No1+this.No2;
    }

    Substraction(){
        return this.No1-this.No2;
    }

    Multiplication(){
        return this.No1*this.No2;
    }
    Division(){
        return this.No1/this.No2;
    }
}


var Num1:number=5;
var Num2:number=6;
var obj=new Arthematic(Num1,Num2)
var No1=obj.Addition()
var No2=obj.Substraction()
var No3=obj.Multiplication()
var No4=obj.Division()

var Num1:number=8;
var Num2:number=7;
var obj1=new Arthematic(Num1,Num2)
var NNo1=obj1.Addition()
var NNo2=obj1.Substraction()
var NNo3=obj1.Multiplication()
var NNo4=obj1.Division()

console.log(` Addition of ${Num1} and ${Num2} = ${No1},\n Substraction of ${Num1} and ${Num2} = ${No2},\n Multiplication of ${Num1} and ${Num2} = ${No3},\n Division of ${Num1} and ${Num2} = ${No4}`)
console.log('--------------------------------------------------------------------------------------')
console.log(` Addition of ${Num1} and ${Num2} = ${NNo1},\n Substraction of ${Num1} and ${Num2} = ${NNo2},\n Multiplication of ${Num1} and ${Num2} = ${NNo3},\n Division of ${Num1} and ${Num2} = ${NNo4}`)
