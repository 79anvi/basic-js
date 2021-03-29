const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain : [],
  getLength() {
    return this.chain.length;
  },
  addLink(value) {
    this.chain.push(`( ${value} )`);
    return chainMaker;
  },
  removeLink(position) {    
    if (this.chain[position] !== undefined) {
        this.chain.splice(position - 1, 1);
        return chainMaker;
    } else  {
      this.chain.length = 0; 
      throw new Error('Error');
    }
  },
  reverseChain() {
    this.chain.reverse();
    return chainMaker;
  },
  finishChain() {
    r = this.chain.join('~~');
    this.chain.length = 0; 
    return r;
  }
};
module.exports = chainMaker;
