//Find Word in String 
var pp:boolean;
function wfind(a:string,w:string){
    var str=a.split(' ')
    console.log(str)
    str.forEach(element => {
        if(element ==w){
            pp=true;
        }else{pp=false}
    });
    return pp;
}
var word="patil"
var find=wfind("my name is adi patil",word)
if (find) {
    console.log(`${word} is present`)
}else{
    console.log(`${word} is not present in sentence`)}