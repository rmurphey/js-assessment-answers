exports = (typeof window === 'undefined') ? global : window;

exports.flowControlAnswers = {
  fizzBuzz : function(num) {
      
    // INSTRUCTIONS
    // write a function that receives a number as its argument;
    // if the number is divisible by 3, the function should return 'fizz';
    // if the number is divisible by 5, the function should return 'buzz';
    // if the number is divisible by 3 and 5, the function should return
    // 'fizzbuzz';
    //
    // otherwise the function should return the number, or false if no number
    // was provided or if the value provided was not a number

    // make sure the value provided was a number, if not, return false
    if (typeof num !== 'number') {
      return false;
    }

    // if the number is divisible by 3 AND 5, then when divided by both,
    // the remainder for each operation will be zero
    // return 'fizzbuzz'
    if (num % 3 === 0 && num % 5 === 0) {
      return 'fizzbuzz';
    }

    // if the number is divisible by 3, when divided by 3, the remainder is zero 
    // return 'fizz'
    if (num % 3 === 0) {
      return 'fizz';
    }

    // if the number is divisible by 5, when divided by 5, the remainder is zero
    // return 'buzz'
    if (num % 5 === 0) {
      return 'buzz';
    }

    // if the number is not divisible by 3 or 5, i.e. has skipped all previous
    // conditions, return the number
    return num;
      
  }
};
