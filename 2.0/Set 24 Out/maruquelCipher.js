//Converting numbers to alphabets.
function numberToAlpha(num) {
    var t, s="";//t as temp and s as alphabets.
    while(num > 0) {
        t = (num - 1) % 26;
        s = String.fromCharCode(65 + t) + s;
        num = (num - t)/26 | 0;
    }
    return s || undefined;
}
var number = [50,100,446,595,313], set=[], text = "", key = 7757;
number.forEach(function (n){
    set.push(numberToAlpha(n));
});
console.log(set);
//Encrypting Those Alphabets using key.
function encrypt(text, key) {
    var cipher = "";
    for(var i=0;i<text.length;i++) {
        let code = text[i], char;
        if (code.toUpperCase(text[i])) {
            char = String.fromCharCode((code.charCodeAt(0) + key-65) % 26 + 65);
        } else {
            char = String.fromCharCode((code.charCodeAt(0) + key-97) % 26 + 97);
        }
        cipher += char;
    }
    console.log(cipher);
    return cipher;
}
var cText = [];
for(var k = 0;k < set.length; k++) {
        cText.push(encrypt(set[k], key))
}
console.log(cText);

