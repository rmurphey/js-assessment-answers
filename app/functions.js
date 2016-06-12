exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray: function (fn, arr) {
    // 'this' is null here.
    return fn.apply(null, arr);
  },

  speak: function (fn, obj) {
    return fn.call(obj);
  },

  functionFunction: function (str) {
    return function (arg) {
      return str + ', ' + arg;
    }
  },

  makeClosures: function (arr, fn) {
    var ret = [];

    var makeFn = function (val) {
      return function () {
        return fn(val);
      };
    };

    for (var i = 0; i < arr.length; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial: function (fn, str1, str2) {
    return function (str3) {
      return fn.call(null, str1, str2, str3);
    }
  },

  useArguments: function () {
    var sum = 0;
    for (var i = 0; i < arguments.length; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  callIt: function (fn) {
    // Arguments are passed in along with the fn as well hence, splice it.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },

  partialUsingArguments: function (fn) {
    // Arguments are passed in along with the fn as well hence, splice it.
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function () {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  // Currying: https://medium.com/@kevincennis/currying-in-javascript-c66080543528
  // Currying refers to the process of taking a function with n arguments and transforming it into n functions that each take a single argument.
  // It essentially creates a chain of partially applied functions that eventually resolves with a value.
  curryIt: function (fn) {
    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return fn.apply(null, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
