class Arthematic {
    
    a:number;
    b:number;

    constructor(a:number,b:number) {
     this.a=a;
     this.b=b;      
    }

    Addition():number
    {
        return this.a+this.b
    }
    Substraction():number{
        return this.a-this.b
    }

}

var obj1 = new Arthematic(5,4);
var obj2 = new Arthematic(5,4);

var rama =obj1.Addition()

var rama1 =obj1.Substraction()
console.log(`addition of 5+4 is ${rama} and substraction of 5-4 is ${rama1}`)