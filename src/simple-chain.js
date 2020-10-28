const CustomError = require("../extensions/custom-error");

const chainMaker = {
  len: 0,
  chainArray: [],

  getLength() {
    let lenChain = 0;
    for (chain in chainMaker) {
      if (chain.slice(0, 5) === 'chain') {
        if (chainMaker[chain] !== 'deleted'){
          lenChain++;
        }
      }
    }
    return lenChain;
  },

  addLink(value) {
    if (value === undefined){
      this.len++;
      this.chainArray.push(`( )`)
    }
    else {
      this.len++;
      this.chainArray.push(`( ${value} )`);
    }
    return chainMaker;
  },

  removeLink(position) {
    let pos = parseInt(position, 10) - 1;
    if (pos < 0 || pos > this.chainArray.length || !Number.isInteger(pos)){
      this.chainArray = [];
      throw new Error("Неправильная позиция!");
    }
    else this.chainArray.splice(pos, 1); 
    return chainMaker;
  },

  reverseChain() {
    this.chainArray.reverse();
    return chainMaker;
  },

  finishChain() {
    let resChain = '';
    this.chainArray.forEach((item, index, arr) => {
      if (index !== arr.length-1) {
        resChain += `${item}~~`;
      } else resChain += `${item}`; 
    });
    this.chainArray = [];
    return resChain;
  }

};

module.exports = chainMaker;
