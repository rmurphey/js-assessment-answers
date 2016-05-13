/* global $ */
exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise(function(resolve, reject){
      setTimeout(function() {
        resolve(value);
      }, 10);
    });
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject){

      var req = new XMLHttpRequest();
      req.open('GET', url);

      req.onload = function() {
        // This is called even on 404 etc
        // so check the status
        if (req.status == 200) {
          var peopleObj = JSON.parse(req.response);
          var names = peopleObj.people
              .map(function(person) {
                return person.name;
              })
              .sort();
          resolve(names);
        }
        else {
          reject(Error(req.statusText));
        }
      };

      // Handle network errors
      req.onerror = function() {
        reject(Error("Network Error"));
      };

      req.send();

    });
  }
};
