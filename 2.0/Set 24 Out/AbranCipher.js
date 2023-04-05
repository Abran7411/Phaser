//Converting numbers to alphabets.
function numberToAlpha(num) {
	var t, s = ""; //t as temp and s as alphabets.
	while (num > 0) {
		t = (num - 1) % 26;
		s = String.fromCharCode(65 + t) + s;
		num = (num - t) / 26 | 0;
	}
	return s || undefined;
}

var number = [50, 100, 446, 595, 313],
	set = [],
	text = "",
	key = 7757;
number.forEach(function(n) {
	set.push(numberToAlpha(n));
});
console.log(set);


var alphabets = 'abcdefghijklmnopqrstuvwxyz',
	key = 7757;
var arr = alphabets.split('');
// Cipher alphabets to encrypt and decrypt
function getCipher(str, shift) {
	return arr.reduce((a, c, i) => {
		let result = [...a]
		let tIndex = (i + shift) % arr.length
		result[i] = arr[tIndex]
		return result;
	}, [])
}

// Abran's Ciphering methods.
var encryptedText = "",
	cipheredAlphabets, cText = [],
	dText = [];
for (var k = 0; k < set.length; k++) {
	cText.push(encrypt(alphabets, key, set[k]))
}
for (var j = 0; j < cText.length; j++) {
	dText.push(decrypt(alphabets, key, cText[j]));
}
console.log(cText);
console.log(dText);

//Encrypting the alphabets using key
function encrypt(alphabets, key, stringToEnc) {
	cipheredAlphabets = getCipher(alphabets, key);
	let encryptedStr = stringToEnc
		.toLowerCase()
		.split('')
		.map(function(p, i) {
			let indexInAlphabets = arr.findIndex(c => p == c)
			return (cipheredAlphabets[indexInAlphabets])
		})
	return encryptedText = encryptedStr.join('').toUpperCase();
}

// Decrypting the alphabets using key
function decrypt(alphabets, key, stringToDec) {
	let decryptedStr = stringToDec
		.toLowerCase()
		.split('')
		.map(function(p, i) {
			let indexInAlphabets = cipheredAlphabets.findIndex(c => p == c)
			return (arr[indexInAlphabets])
		})
	return decryptedStr.join('').toUpperCase();
}

//Converting alphabets to digits.
function convertLetterToNumber(str) {
	var out = 0,
		len = str.length;
	for (pos = 0; pos < len; pos++) {
		out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
	}
	return out;
}

var converted = dText.map(function(obj) {
	return convertLetterToNumber(obj);
});

console.log(converted);