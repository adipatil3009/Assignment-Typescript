function Maxnum(a:number,b:number ,c:number):number{
    if(a>b && a>c){
        return a;
    }
    else if(b>c && b>a){
        return b
    }
    else {return c;}
}

var num = Maxnum(6,8,5)
console.log(num);