if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      var a = ["fizz","","","","","buzz"];
      if (isNaN(num)) {
        return false;
      } else {
        return a[num % 3] + a[5 - num % 5] || num;
      }
    }
  };
});
