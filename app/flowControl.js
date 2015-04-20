if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    fizzBuzz : function(num) {
      
      // INSTRUCTIONS
      // write a function that receives a number as its argument;
      // if the number is divisible by 3, the function should return 'fizz';
      // if the number is divisible by 5, the function should return 'buzz';
      // if the number is divisible by 3 and 5, the function should return
      // 'fizzbuzz';

      // declare a variable to keep our response in
      var response = '';

      // make sure the value provided was a number, if not, return an error
      if (typeof num !== 'number') {
        response = "ERROR: you must supply a number value.";
      }

      // if the number is divisble by 3, when divided by 3, the remainder is zero 
      // add 'fizz' to the response
      
      if (num % 3 === 0) {
        response = response + 'fizz';
      }

      // if the number is divisble by 5, when divided by 5, the remainder is zero
      // add 'buzz' to the response
      if (num % 5 === 0) {
        response = response + 'buzz';
      }

      // if the response is empty, add the value of `num` to the response
      if (response.length === 0) {
        response = num;
      }
      
      //return the response at the end
      return response;
    }
  };
});
