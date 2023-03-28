class Area {

    rad:number
    PI:number
    public constructor(rad:number) {
        this.rad=rad;
        this.PI=3.14;
    }

    area(){
        return this.PI*this.rad*this.rad
    }

}
var rad:number =5;
var obj3 = new Area(rad);
var CArea =obj3.area();


var rad1:number =6;
var obj4 = new Area(rad1);
var CArea1 =obj4.area();


console.log(`Areaa of circle having radius ${rad} =${CArea.toFixed(2)}\n`)

console.log(`Area of circle having radius ${rad1} =${(CArea1).toFixed(2)}`)