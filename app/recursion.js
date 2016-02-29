exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers  = {
  
  listFiles: function(data, dirName) {
    
    /*
   // thisdir: does the dir of the data contribute to the answer?
    var thisdir = (dir === undefined) || (dir === null) || (data.dir === dir),
      rslt = [],
      elval;
    for ( var el in data.files) {
      // elements in 'files' (elval) can be filename (a string) or object
      elval = data.files[el];
      if (typeof elval === 'string') {
        if (thisdir) { rslt.push(elval); }
      } else {
        // recursion
        rslt = rslt.concat(this.listFiles(elval, thisdir ? elval.dir : dir));
      }
    }
    return rslt;
    */
    
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
  
  fibonacci: function (n) {
    // a is the previous-previous number in the series
    // b is the previous number (latest) in the series
    // q is which number in the series to return
    var fib = function (a, b, q) {
      if (q === 0) { return a; }
      if (q === 1) { return b; }
      // recursion
      return fib(b, a + b, q - 1);
    };
    return fib(0, 1, n);
  },
  
  validParentheses: function (n) {
    var vParens = function (nInPar, nOutPar) {
      var result = [];
      var theRest = [];
      // terminal case
      if (nOutPar === 0) { return ['']; }
      if (nInPar > 0) {
        // can output '('
        // recursion
        theRest = vParens(nInPar - 1, nOutPar);
        theRest.forEach((el) => result.push('('.concat(el)));
      }
      if (nOutPar > nInPar) {
        // can output ')'
        // recursion
        theRest = vParens(nInPar, nOutPar - 1);
        theRest.forEach((el) => result.push(')'.concat(el)));
      }
      return result;
    };
    return vParens(n, n);
  }
};
