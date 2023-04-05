function convertLetterToNumber(str) {
    var out = 0, len = str.length;
    for (pos = 0; pos < len; pos++) {
      out += (str.charCodeAt(pos) - 64) * Math.pow(26, len - pos - 1);
    }
    return out;
  }
  
  var testCase = ["AX","CV","QD","VW","LA"];
  
  var converted = testCase.map(function(obj) {
    return {
      letter: obj,
      number: convertLetterToNumber(obj)
    };
  
  });
  
  console.table(converted);