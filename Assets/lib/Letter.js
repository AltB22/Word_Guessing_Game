class Letter {
    constructor (char) {
      this.char = char;
      this.visible = !/[a-z1-9]/i.test(char);
    }
  
  
  guess (char){
      if (char.toLowerCase()=== this.char.toLowerCase()) {
          this.visible = true;
          return true;
      }
      return false;
  }
  
  toString() {
  if (this.visible) {
      return this.char;
      }
      return "_";
  }
  
  getSolution() {
      return this.char;
  }
  }
  
  module.exports = Letter;
  