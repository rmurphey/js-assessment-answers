if (typeof define !== 'function') {
  var define = require('amdefine')(module);
}

define(function() {
  return {
    deepExtend: function deepExtend(destination, source) {
      for (var property in source) {
        if (source[property] && source[property].constructor &&
          source[property].constructor === Object) {
          destination[property] = {};
          deepExtend(destination[property], source[property]);
        } else {
          destination[property] = source[property];
        }
      }
      return destination;
    },
    
    inherits: function (Child, Parent) {
      function F() {}
      F.prototype = Parent.prototype;
      Child.prototype = new F();
      F.prototype.__super__ = Parent.prototype;
      Child.prototype.constructor = Child;
    }
  };
});