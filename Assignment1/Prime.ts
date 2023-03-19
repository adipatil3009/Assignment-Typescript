function Prime(a:number){
    for (let index = 2; index < a ; index++) {
        if(a%index==0){
            return false

        }
        else {return true}    
    }

}
var num = Prime(12);

if ( num ) {
    console.log("Number is Prime")
} else {
    console.log("Number is not prime")
}