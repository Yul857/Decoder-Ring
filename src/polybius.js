// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const polybiusModule = (function () {

  //helpersFunction
  function isOdd(n) {
    //check is the number n is odd of not, if odd, return true
    return Math.abs(n % 2) == 1;
  }

  function polybius(input, encode = true) {
    let polybiusSquare = {
      "a": "11", "b": "21", "c": "31", "d": "41", "e": "51",
      "f": "12", "g": "22", "h": "32", "i": "42", "j": "42", "k": "52",
      "l": "13", "m": "23", "n": "33", "o": "43", "p": "53",
      "q": "14", "r": "24", "s": "34", "t": "44", "u": "54",
      "v": "15", "w": "25", "x": "35", "y": "45", "z": "55"
      };
    //convert the input to lowerCase
    let lowerInput = input.toLowerCase();
    let result = "";
    // if the encode value is true, then encode the input string
    if (encode) {
      for (let char of lowerInput){
        //if the input letters is "space", then add "space" to the "result"
        if (char === " "){
          result += " "
        }else{
          //otherwise, add the value of the key in polybiusSquare
          result += polybiusSquare[char]
        }
      } 

    } else {
      // if the encode value is false, then decode the input string
        let charCount =  0
        for (let char of lowerInput){
          if (char !== " "){
            charCount ++
          }
        }
        //check if the lengh of the input string is odd when decoding
        if (isOdd(charCount)){
          return false
        }

        for (let i = 0; i < input.length; i += 2) {
          //split the input values into two numbers each, then make sure it does not includes "space"
            let decode = `${input[i]}${input[i + 1]}`;
            if (decode.includes(" ")) {
                result += " ";
                i -= 1;
            // if the input value is "42", then add "(i/j)" to the "result"
            } else if (decode === "42") {
                result += "(i/j)";
            } else {
              for (let letters in polybiusSquare){
                if (polybiusSquare[letters] === decode){
                  result += letters
                }
              }
            }
        }
        return result
  }
  return result; 
}
    


  return {
    polybius,
  };
})();

module.exports = { polybius: polybiusModule.polybius };
