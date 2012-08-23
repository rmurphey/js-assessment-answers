if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
      return !!str.match(/\d/);
    },

    containsRepeatingLetter : function(str) {
      return !!str.match(/([A-Za-z])\1/);
    },

    endsWithVowel : function(str) {
      return !!str.match(/[aeiou]$/);
    },

    captureThreeNumbers : function(str) {
      var matches = str.match(/\d{3}/);
      if (matches) {
        return matches[0];
      }
      return false;
    },

    matchesPattern : function(str) {
      return !!str.match(/^\d{3}-\d{3}-\d{4}$/);
    }

    isUSD : function(str) {
      return /^\$\d{1,3}(,\d{3})*(\.\d{2})?$/.test(str);
    }
  };
});
