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

      var a = ["fizz", "", "", "", "", "buzz"];
      return a[num % 3] + a[5 - num % 5] || num;
    }
  };
});