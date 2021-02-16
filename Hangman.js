class Hangman {
  constructor(word) {
    this.word = word.split('');
    this.corredGuesses = "_".repeat(this.word.length).split('');

    for (let i = 0; i < this.word.length; i++) {
      if (!/\w/.test(this.word[i])) {
        this.corredGuesses[i] = this.word[i];
      }
    }

    this.guessesLeft = 15;
    this.wrongGuesses = [];
  }

  guess(char) {
    if (this.guessesLeft == 0) return false;
    let changed = false;
    for (let i = 0; i < this.word.length; i++) {
      if (this.word[i].toLowerCase() == char.toLowerCase()) {
        this.corredGuesses[i] = this.word[i];
        changed = true;
      }
    }

    if (!changed && this.wrongGuesses.indexOf(char.toLowerCase()) == -1) {
      this.guessesLeft -= 1;
      this.wrongGuesses.push(char.toLowerCase());
    }

    if (this.corredGuesses.join('') == this.word.join('')) {
      console.log('Win!');
    } else if (this.guessesLeft == 0) {
      console.log('Game Over!');
      this.corredGuesses = this.word;
    }

    return changed;
  }
}