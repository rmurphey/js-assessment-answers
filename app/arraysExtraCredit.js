exports = (typeof window === 'undefined') ? global : window;

/*Pay special attention to what each function is supposed to return
as well as what the .length property of each array should be*/
exports.arraysExtraCreditAnswers = {

  indexOf : function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        return i;
      }
    }
    return -1;
  },

  push : function(arr,item) {
    arr[arr.length] = item;
    return arr.length;
  },

  pop : function(arr) {
    var temp = arr[arr.length-1];
    arr.length--;
    return temp;
  },

  unshift : function(arr,item) {
    for (var i = arr.length-1; i >= 0; i--) {
      arr[i+1] = arr[i];
    }
    arr[0] = item;
    return arr.length;
  },

  shift : function(arr) {
    var temp = arr[0];
    for (var i = 0; i < arr.length; i++) {
      arr[i] = arr[i+1];
    }
    arr.length--;
    return temp;
  },

  concat : function(arr1, arr2) {
    var newArray = [];
    for (var i = 0; i < arr1.length; i++) {
      newArray.push(arr1[i]);
    }
    for (var i = 0; i < arr2.length; i++) {
      newArray.push(arr2[i]);
    }
    return newArray;
  }
}
