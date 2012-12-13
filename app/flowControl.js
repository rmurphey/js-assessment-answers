if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible the 3 and 5, the function should return
      // 'fizzbuzz';
      //
      // otherwise the function should return the number, or false if no number
      // was provided

      // empty string to contain potential responses
      var fb = '';

      // NaN
      if (typeof num !== 'number') { return false; }

      // if divisible by 3, add fizz
      if (num % 3 === 0)  { fb += 'fizz'; }

      // if divisible by 5, add buzz
      if (num % 5 === 0) { fb += 'buzz'; }

      // return fizzbuzz string if has length or the number
      return fb || num;
    }
  };
});
