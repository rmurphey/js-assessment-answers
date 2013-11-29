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
        return function(str2) {
            return str + ", " + str2;
        }
    },

    makeClosures : function(arr, fn) {
        return arr.map(function(value) {
            return function() {
                return fn(value);
            };
        });
    },

    partial : function(fn, str1, str2) {
        return fn.bind(null, str1, str2);
    },

    useArguments : function() {
        return Array.prototype.reduce.call(arguments, function(sum, value) {
            return sum + value;
        }, 0);
    },

    callIt : function(fn) {
      return fn.apply(null, Array.prototype.slice.call(arguments, 1));  
    },

    partialUsingArguments : function(fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        return function() {
            return fn.apply(null, Array.prototype.concat.apply(args, arguments));
        }
    },

    curryIt : function curryIt (fn) {
        var args = Array.prototype.slice.call(arguments, 1);
        if (args.length >= fn.length) {
            return fn.apply(null, args);
        } else {
            args.splice(0, 0, fn);
            return function() {
                return curryIt.apply(null, Array.prototype.concat.apply(args, arguments));    
            }
        }
    }
  };
});
