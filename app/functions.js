purge

exports = (typeof window === 'undefined') ? global : window;

exports.functionsAnswers = {
  argsAsArray : function(fn, arr) {
    /*
        return fn(...arr);
    */
    return fn.apply(null, arr);
  },

  speak : function(fn, obj) {
    /*
        return fn.bind(obj)();
    */
    return fn.call(obj);
  },

  functionFunction : function(str) {
    return function(arg) {
      return str + ', ' + arg;
    };
  },

  makeClosures : function(arr, fn) {
    
    /*
    if (Array.prototype.map) {
      return arr.map(function (el) {
        return function () {return fn(el);};
      });
    }
    */
    
    var ret = [];

    var makeFn = function(val) {
      return function() { return fn(val); };
    };

    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(makeFn(arr[i]));
    }

    return ret;
  },

  partial : function(fn, str1, str2) {
    return function(str3) {
      return fn.call(null, str1, str2, str3);
    };
  },
  
  /*
  useArguments: function (...ar) {
    if (Array.prototype.reduce) {
      return ar.reduce((el, base) => el + base);
    }
  },
  */

  useArguments : function() {
    var sum = 0;

    for (var i = 0, len = arguments.length; i < len; i++) {
      sum += arguments[i];
    }

    return sum;
  },

  /*
  callIt: function (fn, ...ar) {
    return fn(...ar);
  },
  */
  
  callIt : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    fn.apply(null, args);
  },
  
  /*
  partialUsingArguments: function (fn, ...ar) {
    return function (...br) {
      return fn(...ar, ...br);
    };
  },
  */

  partialUsingArguments : function(fn) {
    var args = Array.prototype.slice.call(arguments, 1, arguments.length);
    return function() {
      var moreArgs = args.concat(Array.prototype.slice.call(arguments));
      return fn.apply(null, moreArgs);
    };
  },

  curryIt : function(fn) {
    
    /*
    var allargs = [],
      funcLen = fn.length;

    var f = function (newarg) {
      if (newarg !== undefined && newarg != null) {
        allargs.push(newarg);
        if (allargs.length >= funcLen) {
          return fn(...allargs);
        }
      }
      return f;
    };
    return f(null);
   */
   
    function applyArguments(fn, arguments) {
      return fn.apply(null, arguments);
    }

    function getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount) {
      return function (currentArgument) {
        accumulatedArguments.push(currentArgument);

        var allArgumentsProvided = accumulatedArguments.length === expectedArgumentsCount;

        if (allArgumentsProvided) {
          return applyArguments(fn, accumulatedArguments);
        } else {
          return getArgumentAccumulator(accumulatedArguments, expectedArgumentsCount);
        }
      };
    }

    return getArgumentAccumulator([], fn.length);
  }
};
