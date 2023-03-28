class area1 {

    rad:number
    PI:number
    public constructor(rad:number) {
        this.rad=rad;
        this.PI=3.14;
    }

}

class xarea extends area1{


    constructor(rad){
        super(rad)
    }
    Circumference(){
        return 2*this.PI*this.rad;
    }

}

var obj6= new xarea(5);
var no1 =obj6.Circumference();

console.log(`circumference of circle is ${no1.toFixed(2)}`)

var obj7= new xarea(7);
var no1 =obj7.Circumference();

console.log(`circumference of circle is ${no1.toFixed(2)}`)
