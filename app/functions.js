if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    argsAsArray : function(fn, arr) {
      return fn.apply(null, arr);
    },

    speak : function(fn, obj) {
      return fn.call(obj);
    },

    functionFunction : function(str) {
      return function(arg) {
        return str + ', ' + arg;
      };
    },

    makeClosures : function(arr, fn) {
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

    useArguments : function() {
      var sum = 0;

      for (var i = 0, len = arguments.length; i < len; i++) {
        sum += arguments[i];
      }

      return sum;
    },

    callIt : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      fn.apply(null, args);
    },

    partialUsingArguments : function(fn) {
      var args = Array.prototype.slice.call(arguments, 1, arguments.length);
      return function() {
        var moreArgs = args.concat(Array.prototype.slice.call(arguments));
        return fn.apply(null, moreArgs);
      };
    },

    curryIt: function curryIt(fn) {
      var args = Array.prototype.slice.call(arguments, 1);
      if (args.length >= fn.length) {
        return fn.apply(null, args);
      } else {
        args.splice(0, 0, fn);
        return function() {
          return curryIt.apply(null, Array.prototype.concat.apply(args, arguments));
        };
      }
    }
  };
});
