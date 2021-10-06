// Please refrain from tampering with the setup code provided here,
// as the index.html and test files rely on this setup to work properly.
// Only add code (e.g., helper methods, variables, etc.) within the scope
// of the anonymous function on line 6

const substitutionModule = (function () {
  // you can add any code you want within this function scope

  //HelpersFunction
  //check if the sorted string is unique
  function isSortedStingUnique(sortedString){
    let isUnique = true;
    for (let i = 0 ; i < sortedString.length; i++){
      //If the letter is equal to the one next to it, then the sorted string is not unique
      if (sortedString[i] === sortedString[i+1]){
        isUnique = false;
        return isUnique
      }
    }
    return isUnique
  }

  function substitution(input, alphabet, encode = true) {
    const orderedAlphabet = "abcdefghijklmnopqrstuvwxyz";
    //convert the input to lowerCase
    const lowerInput= input.toLowerCase();
    let result = "";
    
    //check if the alplabet exist or the length of the alphabet is equal to 26
    if (!alphabet || alphabet.length !== 26) {
      return false;
    };
    // sort the "alphabet" string so that you could use it in helpers function
    const sortedAlphabet = alphabet.split('').sort().join("");
    // if the sorted string is not unique, then return false
    if (!isSortedStingUnique(sortedAlphabet)){
      return false
    }

    for (let characters of lowerInput) {
      //maintain the "space" in the result
      if (characters === " ") {
          result += " ";
      } else {
          let toBeEncode = orderedAlphabet;
          let toBeDecode = alphabet;
          //if encode is false, then do the opposite
          if (!encode) {
              toBeEncode = alphabet;
              toBeDecode = orderedAlphabet;
          };

          for (let j = 0; j < orderedAlphabet.length; j++) {
              if (characters === toBeEncode[j]) {
                  result += toBeDecode[j];
              }
          }
      }
  }   
  return result;   

  }

  return {
    substitution,
  };
})();

module.exports = { substitution: substitutionModule.substitution };


// const abc = "jalcjdbaosdf"
// const abcSorted = abc.split('').sort().join("")
// console.log(abcSorted)
// isSortedStingUnique(abcSorted)
