// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const caesarModule = (function () {
  // you can add any code you want within this function scope


  function caesar(input, shift, encode = true) {
    const letters = "abcdefghijklmnopqrstuvwxyz";
    let result = "";
    //convert the input to lowerCase
    let lowerInput = input.toLowerCase();

    //If endoce is false, then multiply shift by negative one
    if (!encode){
      shift *= -1
    }
    /*If the shift value is less than negative 25 or greater than 25 
    or does not exist, then return false */
    if (!shift || !input || shift === 0 || shift < -25 || shift > 25){
      return false
    }

    for (let char of lowerInput) {
        for (let j = 0; j < letters.length; j++) {
            /*check if the letters in the input string is "space" or other symbols, 
            if it is "space" or other symbols, then add it to the "result" string */
            if (!letters.includes(char)) {
                result += char;
                break;
            }
            if (letters[j] === char) {
                let shiftedLetter = j + shift;
                //if the shiftedLetter is less than 0, then plus 26
                if (shiftedLetter < 0) {
                    shiftedLetter += 26;
                // if the shiftedLetter is larger than 25, then minus 26
                } else if (shiftedLetter > 25) {
                    shiftedLetter -= 26;
                }
                result += letters[shiftedLetter];
            }
        }
    }
    return result;
}
  return {
    caesar,
  };
})();

module.exports = { caesar: caesarModule.caesar };
