var b:number=1
var c:number=1

function fibonacci(a:number){
    console.log(b)
    console.log(c)
    for (let index = 1; index < a ; index++) {
        let num =b+c;
        b=c;
        c=num;
        if(a<c){
            return;
        }
        console.log(c)
    }
}
fibonacci(21)

