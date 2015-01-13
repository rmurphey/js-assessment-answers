if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    alterContext : function(fn, obj) {
      return fn.call(obj);
    },

    alterObjects : function(constructor, greeting) {
      constructor.prototype.greeting = greeting;
    },

    iterate : function(obj) {
      var ret = [];

      for (var prop in obj) {
        if (obj.hasOwnProperty(prop)) {
          ret.push(prop + ': ' + obj[prop]);
        }
      }

      return ret;
    },

    iterate2 : function(obj) {
      var ret = [];

      for (var prop in obj) {
        if (({}).hasOwnProperty.call(obj, prop)) {
          ret.push(prop + ': ' + obj[prop]);
        }
      }

      return ret;
    }
  };
});
