exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var track = { char: '', cnt: 0 };
    var rsltArray = str.split('').filter(function (el) {
      if (el === track.char) {
        if (track.cnt < amount) {
          track.cnt++;
          return true;
        } else { return false; }
      } else {
        track = { char: el, cnt: 1 };
        return true;
      }
    }
    );
    return rsltArray.join('');
  },

  wordWrap: function (str, cols) {
    var colCnt = 0,
      currWord,
      i,
      prevWord,
      resultArray = [],
      wordArray = str.split(/\s/),
      wordArrayLen = wordArray.length;
    prevWord = wordArray[0];
    for (i = 1; i < wordArrayLen; i++, prevWord = currWord) {
      currWord = wordArray[i];
      if ((colCnt + prevWord.length + currWord.length + 1) <= cols) {
        resultArray.push(prevWord + ' ');
        colCnt += prevWord.length + 1;
      } else {
        resultArray.push(prevWord + '\n');
        colCnt = 0;
      }
    }
    resultArray.push(prevWord);
    return resultArray.join('');
  },

  reverseString: function (str) {
    return str.split('').reverse().join('');
  }
};
