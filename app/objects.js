exports = (typeof window === 'undefined') ? global : window;

exports.objectsAnswers = {
  alterContext: function (fn, obj) {
    return fn.call(obj);
  },

  alterObjects: function (constructor, greeting) {
    // Alters the constructor - So all objects initialized will have the same greeting key/val.
    constructor.prototype.greeting = greeting;
  },

  iterate: function (obj) {
    var ret = [];

    // FASTER WAY
    var keys = Object.keys(obj);
    for (var i = 0; i < keys.length; i++) {
      ret.push(keys[i] + ': ' + obj[keys[i]]);
    }
    //// CONVENTIONAL WAY:
    //for (var prop in obj) {
    //  if (obj.hasOwnProperty(prop)) {
    //    ret.push(prop + ': ' + obj[prop]);
    //  }
    //}

    return ret;
  }
};
