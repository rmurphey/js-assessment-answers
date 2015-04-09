if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided or if the value provided was not a number
      if (typeof num !== 'number') { return false; }

      // not divisible by 3 or 5
      if (num % 3 && num % 5) {
        return num;
      }
      // divisible by at least one of 3 or 5

      // not divisible by 5, therefore divisible by 3 only
      if (num % 5) {
        return 'fizz';
      }

      // not divisible by 3, therefore divisible by 5 only
      if (num % 3) {
        return 'buzz';
      }

      // divisible by 5 and 3
      return 'fizzbuzz';
    }
  };
});
