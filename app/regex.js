if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    containsNumber : function(str) {
        return /[0-9]/.test(str);
    },

    containsRepeatingLetter : function(str) {
        return /([A-Za-z]).*\1/.test(str);  
    },

    endsWithVowel : function(str) {
        return /[aeoiuAEIOU]$/.test(str);  
    },

    captureThreeNumbers : function(str) {
        var result = /[0-9]{3}/.exec(str);
        if (result) {
            return result[0];
        } else {
            return false;
        }
    },

    matchesPattern : function(str) {
        return /^[0-9]{3}-[0-9]{3}-[0-9]{4}$/.test(str);
    },

    isUSD : function(str) {
        return /^\$[0-9]{1,3}(,[0-9]{3})*(\.[0-9]{2})?$/.test(str);  
    }
  };
});
