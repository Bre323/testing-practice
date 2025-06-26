function caesarCipher(str, shiftFactor) {
  let strArray = [...str];
  let newStr = [];
  
  for(char of strArray) {
    let charCode = char.charCodeAt(0);

    // Decript LowerCase letters
    if(charCode >= 97 && charCode <= 122) {
      let shiftedCode = (((charCode - 97 + shiftFactor) % 26) + 97);
      let newChar = String.fromCharCode(shiftedCode);
      newStr.push(newChar);
    }
    // Decript UpperCase letters
    else if(charCode >= 65 && charCode <= 90) {
      let shiftedCode = (((charCode - 65 + shiftFactor) % 26) + 65);
      let newChar = String.fromCharCode(shiftedCode);
      newStr.push(newChar);
    }
    // Decript Numbers
    else if(charCode >= 48 && charCode <= 57) {
      let shiftedCode = (((charCode - 48 + shiftFactor) % 26) + 48);
      let newChar = String.fromCharCode(shiftedCode);
      newStr.push(newChar);
    }
    else {
      newStr.push(char);
    }
  }

  return newStr.join('');
}

export default caesarCipher;
