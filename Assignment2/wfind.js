var pp;
function wfind(a, w) {
    var str = a.split(' ');
    console.log(str);
    str.forEach(function (element) {
        if (element == w) {
            pp = true;
        }
        else {
            pp = false;
        }
    });
    return pp;
}
var word = "patil";
var find = wfind("my name is adi patil", word);
if (find) {
    console.log("".concat(word, " is present"));
}
else {
    console.log("".concat(word, " is not present in sentence"));
}
