exports = typeof window === 'undefined' ? global : window;

exports.recursionAnswers = {
  listFiles: function(data, dirName) {
    var listOfFiles = [];
    var dirs = [];

    function processDir(dir) {
      var i;
      var len;
      var file;
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

    processDir(data);


    return listOfFiles;
  },

  permute: function(arr) {
    // http://stackoverflow.com/a/11509565/54468
    var temp = [];
    var answer = [];

    function logResult() {
      answer.push(
        // make a copy of temp using .slice()
        // so we can continue to work with temp
        temp.slice()
      );
    }

    function doIt() {
      var i;
      var len;
      var item;

      for (i = 0, len = arr.length; i < len; i++) {
        // remove the item at index i
        item = arr.splice(i, 1)[0];

        // add that item to the array we're building up
        temp.push(item);

        if (arr.length) {
          // if there's still anything left in the array,
          // recurse over what's left
          doIt();
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

    return doIt();
  },
  
  fibonacci: function(n) {
    // create a HashMap for keeping track of old calculated answers, to remove repeated calculations
    // this is known as dynamic programming
    let map = new Map();

    return fib(n);

    function fib(n) {
      // base cases: first 2 sequence numbers in fibonacci are 1
      if (n < 3) return 1;
      // if the answer to fib(n) already exists in the map, return that value
      if (map.has(n)) {
        return map.get(n);
      }
      // otherwise, calculate the new fib(n) by calling itself on the 2 previous numbers, and place it in the HashMap
      else {
        map.set(n, fib(n-1) + fib(n-2));
      }
      // return value from HashMap
      return map.get(n);
    }
  }
  
};
