exports = (typeof window === 'undefined') ? global : window;

exports.numbersAnswers = {
  valueAtBit: function (num, bit) {
    // TODO: Someone explain what this is. I don't get it :(
    return 1 & (num >> (bit - 1));
  },

  base10: function (str) {
    return parseInt(str, 2);
  },

  convertToBinary: function (num) {
    // Convert an eight-bit number to a binary string
    // No idea :(
    // TODO: Check out this solution
    function byteString(n) {
      if (n < 0 || n > 255 || n % 1 !== 0) {
        throw new Error(n + " does not fit in a byte");
      }
      return ("000000000" + n.toString(2)).substr(-8)
    }

    return byteString(num);
  },

  multiply: function (a, b) {
    // No idea :(
    // TODO: Check out this solution
    var multiply = function (a, b) {
      var commonMultiplier = 1000000;

      a *= commonMultiplier;
      b *= commonMultiplier;

      return (a * b) / (commonMultiplier * commonMultiplier);
    };
    return multiply(a, b)
  }
};
