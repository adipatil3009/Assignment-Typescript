//first program
function DisplayFactor(a:number){
    for (let index = 0; index < a; index++) {
        if (a%index==0) {
            console.log(index)           
        }   
    }
}
DisplayFactor(20)


//second program
var narr = new Array()
function DisplayFactor1(a:number){
    for (let index = 0; index < a; index++) {
        if (a%index==0) {
            let num =index.toString();
            narr.push(num);
        }   

  }
  console.log(narr)
}
DisplayFactor1(20)
// console.log(num)