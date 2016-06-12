exports = (typeof window === 'undefined') ? global : window;

exports.countAnswers = {
  count: function (start, end) {
    var timeout;

    // Recurse through run()
    // Note: setInterval could be used too, but it will continue to call the fn and needs to be cleared once start = end.
    function run() {
      console.log(start++);

      if (start <= end) {
        timeout = setTimeout(run, 100);
      }
    }

    run();

    return {
      cancel: function () {
        timeout && clearTimeout(timeout);
      }
    }
  }
};
