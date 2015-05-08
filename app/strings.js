if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    reduceString: function(str, amount) {
      var outputString = '';
      var character;
      var inputStrArray = str.split('');

      // we use this object to keep a count of the number of times
      // each character appears in the string
      var characterCount = {};

      for (var i = 0, len = inputStrArray.length; i < len; i++) {
        character = inputStrArray[i];

        // if the character isn't in our counting object yet,
        // then this is the first occurrence
        if (typeof characterCount[character] === 'undefined') {
          characterCount[character] = 1;
        }

        // otherwise, we already have it, so we add one to our count
        else {
          characterCount[character] = characterCount[character] + 1;
        }

        // anytime our count comes in below the amount specified, we
        // include that character in our output
        if (characterCount[character] <= amount) {
          outputString += character;
        }
      }

      return outputString;
    },

    wordWrap: function(str, cols) {
      var words = str.split(' ');
      var outputString = '';
      var currentLength = 0;
      var word;
      var separator;

      for (var i = 0, len = words.length; i < len; i++) {
        word = words[i];
        currentLength += word.length;

        // if its the first word, then we don't need a separator
        if (i === 0) {
          separator = '';
        }

        // if we've gone past our `cols` length, then we start a new line
        else if (currentLength > cols) {
          currentLength = word.length;
          separator = '\n';
        }

        // otherwise, we haven't gone over the line length and we separate
        // the words with a space
        else {
          separator = ' ';
        }

        outputString += separator + word;
      }

      return outputString;
    },

    reverseString: function(str) {
      return str.split('').reverse().join('');
    }
  };
});
