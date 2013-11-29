if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    indexOf : function(arr, item) {
        return arr.indexOf(item);
    },

    sum : function(arr) {
        return arr.reduce(function(sum, item) {
            return sum + item;
        }, 0);
    },

    remove : function(arr, item) {
        return arr.filter(function(element) {
            return item !== element;
        });
    },

    removeWithoutCopy : function(arr, item) {
        for (var i = arr.length - 1; i >= 0; i--) {
            if (item === arr[i]) {
                arr.splice(i , 1);
            }
        }
        return arr;
    },

    append : function(arr, item) {
        arr.push(item);
        return arr;
    },

    truncate : function(arr) {
        arr.splice(arr.length - 1, 1);
        return arr;     
    },

    prepend : function(arr, item) {
        arr.splice(0, 0, item);
        return arr;
    },

    curtail : function(arr) {
        arr.shift();
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
        return arr.reduce(function(count, element) {
            if (item === element) {
                return count + 1;    
            } else {
                return count;
            }
            
        }, 0);  
    },

    duplicates : function(arr) {
        var result = [],
            done = false,
            i = 0,
            j = 0;
        for (; i < arr.length - 1; i++) {
            j = i + 1;
            done = false;
            while (j < arr.length) {
                if (arr[i] === arr[j]) {
                    var item = arr.splice(j, 1);
                    if (!done) {
                        done = true;
                        result.push(item);
                    }
                } else {
                    j++;    
                }
                
            }
        }
        return result;
    },

    square : function(arr) {
        return arr.map(function(item) {
            return item * item;
        })
    },

    findAllOccurrences : function(arr, target) {
        return arr.reduce(function(result, item, i) {
            if (item === target) {
                result.push(i);
            }            
            return result;
        }, []);        
    }
  };
});
