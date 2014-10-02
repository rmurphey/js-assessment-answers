if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    listFiles: function(data, dirName) {
      var listOfFiles = [];
      var dirs = [];

      processDir(data);

      function processDir(dir) {
        var i, len, file;
        var files = dir.files;

        dirs.push( dir.dir );

        for (i = 0, len = files.length; i < len; i++) {
          file = files[i];
          if (typeof file === 'string') {
            if (!dirName || dirs.indexOf(dirName) > -1) {
              listOfFiles.push(files[i]);
            }
          } else {
            processDir(files[i]);
          }
        }

        dirs.pop();
      }

      return listOfFiles;
    },

    permute: function(arr) {
      // http://stackoverflow.com/a/11509565/54468
      var temp = [];
      var answer = [];

      return doIt(arr);

      function doIt(a) {
        var i, len, item;

        for (i = 0, len = arr.length; i < len; i++) {
          // remove the item at index i
          item = arr.splice(i, 1)[0];

          // add that item to the array we're building up
          temp.push(item);

          if (arr.length) {
            // if there's still anything left in the array,
            // recurse over what's left
            doIt(arr);
          } else {
            // otherwise, log the result and move on
            logResult();
          }

          // restore the item we removed at index i
          // and remove it from our temp array
          arr.splice(i, 0, item);
          temp.pop();
        }

        return answer;
      }

      function logResult() {
        answer.push(
          // make a copy of temp using .slice()
          // so we can continue to work with temp
          temp.slice()
        );
      }
    },

    fibonacci: function fib(n) {
        if (n < 2) {
            return n;
        }
        return fib(n - 1) + fib(n - 2);
    },

    validParentheses: function(n) {
        var sets = [];
        var getParen = function(left, right, current) {
            if (left == 0 && right == 0) {
                sets.push(current);
            }
            if (left > 0) {
                getParen(left - 1, right + 1, current + '(');
            }
            if (right > 0) {
                getParen(left, right - 1, current + ')');
            }
            return sets;
        };
        return getParen(n, 0, '');
    }
  };
});

