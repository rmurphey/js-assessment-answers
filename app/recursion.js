exports = (typeof window === 'undefined') ? global : window;

exports.recursionAnswers  = {
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

  fibonacci: function(n) {
    if (n <= 0) {
      return 0;
    }
    if (n === 1 || n === 2) {
      return 1;
    }
    return this.fibonacci(n-1) + this.fibonacci(n-2);
  },

  validParentheses: function(n) {
    if (n < 1) {
      return [];
    } else if (n === 1) {
      return ['()'];
    } else {
      // use a map instead of an array to prevent duplicates
      // e.g.: '()'+'()()' === '()()'+'()'
      var comboMap = {};
      var innerCombos = this.validParentheses(n-1);

      // For each inner combo, add one more pair of parentheses to it
      // in each of the 3 valid configurations
      for (var i=0; i<innerCombos.length; i++) {
        var curInnerCombo = innerCombos[i];

        comboMap['(' + curInnerCombo + ')'] = true;
        comboMap['()' + curInnerCombo] = true;
        comboMap[curInnerCombo + '()'] = true;
      }

      var comboList = [];
      for (var combo in comboMap) {
        if (comboMap.hasOwnProperty(combo)) {
          comboList.push(combo);
        }
      }
      return comboList;
    }
  }

};
