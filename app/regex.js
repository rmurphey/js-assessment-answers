exports = (typeof window === 'undefined') ? global : window;

// Reference Links:
// https://davidwalsh.name/regular-expressions-rest
// https://www.debuggex.com/cheatsheet/regex/javascript
// https://www.youtube.com/watch?v=EkluES9Rvak
exports.regexAnswers = {
  containsNumber : function(str) {
    return (/\d/).test(str);
  },

  containsRepeatingLetter : function(str) {
    return (/([A-Za-z])\1/).test(str);
  },

  endsWithVowel : function(str) {
    return (/[aeiou]$/i).test(str);
  },

  captureThreeNumbers : function(str) {
    // regexObj.exec(str) syntax: https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/RegExp/exec
    var matches = (/\d{3}/).exec(str);
    return matches ? matches[0] : false;
  },

  matchesPattern : function(str) {
    // Phone number regex deconstructed: https://davidwalsh.name/regular-expressions-rest
    return (/^\d{3}-\d{3}-\d{4}$/).test(str);
  },

  isUSD : function(str) {
    return (/^\$\d{1,3}(,\d{3})*(\.\d{2})?$/).test(str);
  }
};
