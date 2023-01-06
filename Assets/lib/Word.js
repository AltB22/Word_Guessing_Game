const Letter = require("./Letter");

class Word {
    constructor(word) {
        // this.visible = !/[a-z1-9]/gi.test(val),
        // this.char = char;
        this.letters = word.split('').map(char => new Letter(char));
}

guessLetter(char) {
    let correctGuess = false;
    this.letters.forEach(letter => {
        if (letter.guess(char)) {
            correctGuess = true;
            return;
        }
    });
    return correctGuess;
}

guessedCorrectly() {
    return this.letters.every(letter => letter.visible);
}

//needs toString method
toString() {
    return this.letters.join(" ");
}
}

module.exports = Word;