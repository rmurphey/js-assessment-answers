exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function(str, amount) {
    var newStr = [];
    var prevLetter;
    var curLetter;
    var curCount = 0;
    for (var i=0; i<str.length; i++) {
      curLetter = str[i];
      // Looking at a currently repeated letter
      // or the first letter
      if (curLetter === prevLetter || !prevLetter) {
        if (curCount < amount) {
          newStr.push(curLetter);
        }
      curCount++;
      } else { // Looking at a new letter
        newStr.push(curLetter);
        curCount = 1;
      }

    prevLetter = curLetter;
    }
    return newStr.join('');
  },

  wordWrap: function(str, cols) {
    var newStr = [];
    var words = str.split(' ');
    var curLine = [];

    for (var i=0; i<words.length; i++) {
      // first word in the line
      if (!curLine.length) {
        curLine.push(words[i]);
      } else {
        // What the current line length would be if the current word as added
        // including the space in between the words
        var curLineLetterCount = curLine.join('').length;
        var lineLengthWithWord = curLineLetterCount + words[i].length + 1;
        if (lineLengthWithWord <= cols) {
          curLine.push(' ');
          curLine.push(words[i]);
        } else { // current word needs to go on a new line
          curLine.push('\n');
          newStr.push(curLine.join(''));
          
          curLine = [];
          curLine.push(words[i]);
        }
      }
    }

    // handle the last word
    if (curLine.length) {
      newStr.push(curLine.join(''));
    }

    return newStr.join('');
  },

  reverseString: function(str) {
    var revStrLetters = [];
    for (var i=0; i<str.length; i++) {
      revStrLetters.unshift(str[i]);
    }
    return revStrLetters.join('');
  }
};
