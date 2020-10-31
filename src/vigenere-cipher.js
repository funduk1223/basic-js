const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {

  constructor(machine = 'true') {
    this.machine = machine;
  }

  encrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let i = 0;
    let result = [];
    let resCharNumber;
    let shiftNullChar;
    for (let char of message) {

      if (i > key.length - 1) { i = 0; }

      if (/[a-z]/i.test(char) && char !== ' ') {
        shiftNullChar = char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        (key[i].toLowerCase().charCodeAt(0) + shiftNullChar) > 122 ?
          resCharNumber = key[i].charCodeAt(0) + shiftNullChar - 26 :
          resCharNumber = key[i].charCodeAt(0) + shiftNullChar;
        //console.log(resCharNumber);
        result.push((String.fromCharCode(resCharNumber)).toUpperCase());
        i++;
      } else result.push(char.toUpperCase());


    }
    return this.machine ? result.join('') : result.reverse().join('');
  }

  decrypt(message, key) {
    if (message === undefined || key === undefined) {
      throw new Error();
    }
    let i = 0;
    let result = [];
    let resCharNumber;
    let shift;
    for (let char of message) {

      if (i > key.length - 1) { i = 0; }

      if (/[a-z]/i.test(char) && char !== ' ') {

        shift = key[i].toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0);
        //console.log(shift);
        (char.toLowerCase().charCodeAt(0) - shift) >= 97 ?
          resCharNumber = char.toLowerCase().charCodeAt(0) - shift :
          resCharNumber = 123 - (shift - (char.toLowerCase().charCodeAt(0) - 'a'.charCodeAt(0)));
        result.push((String.fromCharCode(resCharNumber)).toUpperCase());
        i++;
      } else result.push(char.toUpperCase());


    }

    return this.machine ? result.join('') : result.reverse().join('');
  }
}

module.exports = VigenereCipheringMachine;
