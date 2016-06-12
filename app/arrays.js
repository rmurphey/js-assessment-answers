exports = (typeof window === 'undefined') ? global : window;

exports.arraysAnswers = {

  indexOf: function (arr, item) {
    if (Array.prototype.indexOf) {
      return arr.indexOf(item);
    } else {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item) {
          return i;
        }
      }
      return -1;
    }
  },

  sum: function (arr) {
    var sum = 0;
    for (var i = 0; i < arr.length; i++) {
      sum += arr[i];
    }
    return sum;
  },

  remove: function (arr, item) {
    // Returns a NEW ARRAY
    return arr.filter(function (val) {
      return val !== item;
    });
  },

  removeWithoutCopy: function (arr, item) {
    // Modifies the ORIGINAL array.
    // If it is ok to use a new result array, use filter() then.
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        // The splice() method changes the content of an array by removing existing elements and/or adding new elements.
        arr.splice(i, 1);
        i--; // move index pointer back to removed item index.
      }
    }
    return arr;
  },

  append: function (arr, item) {
    arr.push(item);
    return arr;
  },

  truncate: function (arr) {
    arr.pop();
    return arr;
  },

  prepend: function (arr, item) {
    arr.unshift(item);
    return arr;
  },

  curtail: function (arr) {
    arr.shift();
    return arr;
  },

  concat: function (arr1, arr2) {
    return arr1.concat(arr2);
  },

  insert: function (arr, item, index) {
    // The splice() method changes the content of an array by removing existing elements and/or adding new elements.
    arr.splice(index, 0, item);
    return arr;
  },

  count: function (arr, item) {
    // Using reduce()
    return arr.reduce(function (n, val) {
      return n + (val === item);  // Coercion converts 'true' to 1
    }, 0);

    // GOOD OLD LOOPING WAY
    //
    //var count = 0;
    //
    //for(var i=0; i < arr.length; i++) {
    //  if(arr[i] === item) {
    //    count++;
    //  }
    //}
    //
    //return count;
  },

  duplicates: function (arr) {
    // Using array reduce()
    return arr.reduce(function (dupes, val, i) {
      if (arr.indexOf(val) !== i && dupes.indexOf(val) === -1) {
        dupes.push(val);
      }
      return dupes;
    }, []);

    // CONVENTIONAL WAY
    //var seen = {};
    //var dupes = [];
    //
    //for (var i = 0; i < arr.length; i++) {
    //  seen[arr[i]] = seen[arr[i]] ? seen[arr[i]] + 1 : 1;
    //}
    //
    //for (var item in seen) {
    //  if (seen.hasOwnProperty(item) && seen[item] > 1) {
    //    dupes.push(+item);
    //  }
    //}
    //
    //return dupes;
  },

  square: function (arr) {
    // Modifies the current array
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i] * arr[i];
    }
    return arr;
  },

  findAllOccurrences: function (arr, target) {
    // CONVENTIONAL WAY
    var ret = [];
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === target) {
        ret.push(i);
      }
    }
    return ret;

    //// Using a WHILE loop and indexOf()
    ////
    //var indexes = [];
    //var i = -1;
    //// The .indexOf() method has an optional second parameter that specifies the index to start searching from,
    //// so you can call it in a loop to find all instances of a particular value
    //while ((i = arr.indexOf(target, i+1)) !== -1){
    //  indexes.push(i);
    //}
    //return indexes;

    //// Using Array reduce()
    //return arr.reduce(function(ret, val, index) {
    //    if(arr[index] === target) {
    //      ret.push(index);
    //    }
    //    return ret;
    //}, []);
  }
};
