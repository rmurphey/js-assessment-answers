exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {
  indexOf : function(arr, item) {
    /*
    if (Array.prototype.indexOf) { return arr.indexOf(item); }
    */

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        return i;
      }
    }

    return -1;
  },

  sum : function(arr) {
    
    /*
    if (Array.prototype.reduce) { return arr.reduce( (base, el) => base + el, 0); }
    */
    
    var sum = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      sum += arr[i];
    }

    return sum;
  },

  remove : function(arr, item) {
    
    /*
    if (Array.prototype.filter) { return arr.filter((el) => !(el === item)); }
    */
    
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] !== item) {
        ret.push(arr[i]);
      }
    }

    return ret;
  },

  removeWithoutCopy : function(arr, item) {
    
    /*
    for ( var pos = arr.indexOf(item)
      ; pos > -1
      ; pos = arr.indexOf(item)) {
      arr.splice(pos, 1);
    }
    return arr;
    */
    
    var i, len;

    for (i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        arr.splice(i, 1);
        i = i - 1;
        len = len - 1;
      }
    }

    return arr;
  },

  append : function(arr, item) {
    arr.push(item);
    return arr;
  },

  truncate : function(arr) {
    arr.pop();
    return arr;
  },

  prepend : function(arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail : function(arr) {
    arr.shift(arr);
    return arr;
  },

  concat : function(arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert : function(arr, item, index) {
    arr.splice(index, 0, item);
    return arr;
  },

  count : function(arr, item) {
    
    /*
    if (Array.prototype.reduce) {
      return arr.reduce((base, el) => base + (el === item ? 1 : 0)
        , 0);
    }
    */
    
    var count = 0;

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === item) {
        count++;
      }
    }

    return count;
  },

  duplicates : function(arr) {
    
    /*
    var seen = new Set([]),
      dupes = new Set([]);
    arr.forEach(el => {
      if (seen.has(el)) {dupes.add(el);}
      seen.add(el);
    }
    );
    return Array.from(dupes);
    */
    
    var seen = {};
    var dupes = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    }

    for (var item in seen) {
      if (seen.hasOwnProperty(item) && seen[item] > 1) {
        dupes.push(item);
      }
    }

    return dupes;
  },

  square : function(arr) {
    
    /*
    if (Array.prototype.map) {
      return arr.map(el => el * el);
    }
    */
    
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      ret.push(arr[i] * arr[i]);
    }

    return ret;
  },

  findAllOccurrences : function(arr, target) {
    var ret = [];

    for (var i = 0, len = arr.length; i < len; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }

    return ret;
  }
};
