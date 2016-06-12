exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {
  reduceString: function (str, amount) {
    var strArr = str.split('');
    var newStr = [];
    var check = '', count = 0;
    strArr.forEach(function (elem) {
      if (elem != check) {
        check = elem;
        count = 1;
        newStr.push(elem);
      } else if (count < amount) {
        count++;
        newStr.push(elem);
      }
    });
    return newStr.join('')
  },
  wordWrap: function (str, cols) {
    var strArr = str.split('');
    var i = cols;

    function checkMore() {
      for (i; i < strArr.length; i++) {
        if (strArr[i] === ' ') {
          strArr[i] = '\n';
          i += cols;
          return;
        }
      }
    }

    function checkLess() {
      for (i; i > 0; i--) {
        if (strArr[i] === ' ') {
          strArr[i] = '\n';
          i += cols;
          return;
        }
      }
      checkMore();
    }

    while (i < strArr.length) {
      if (strArr.indexOf(' ') < 0) {
        return strArr.join('')
      }
      checkLess();
    }

    return strArr.join('')
  },
  reverseString: function (str) {
    var result = '';
    for (var i = str.length - 1; i >= 0; i--) {
      result += str[i];
    }
    return result;

    // Simple One line answer
    // return str.split('').reverse().join('');
  }
};
