var input = "I know the code";
var outputAscii = "", output = "", lert = "",inputAscii = [];
for (i=0; i < input.length; i++) {
    //Converts the String to ASCII
     	output += input[i].charCodeAt(0) + " ";
     	lert = input[i].charCodeAt(0);
     	inputAscii.push(lert);
        //Converts the String to  Binary ASCII
     	outputAscii += input[i].charCodeAt(0).toString(2) + " ";
}

//charCodeAt is to convert String to integers, apply toString(2) to get Binary ASCII Value.
//fromCharCode is to convert Integers to Alphabets.
var str = "";
for (var a = 0; a < inputAscii.length; a++) {
    str += String.fromCharCode(inputAscii[a]);    
}
console.log(output);
console.log(inputAscii);
console.log(str)
console.log(outputAscii);
