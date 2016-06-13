/* global $ */
exports = typeof window === 'undefined' ? global : window;

exports.asyncAnswers = {
  async: function(value) {
    return new Promise( 
      resolve => resolve(value)
    );
  },

  manipulateRemoteData: function(url) {
    return new Promise(function(resolve, reject) {

      let xhr = new XMLHttpRequest();
      xhr.open('GET', url);
      xhr.onload = function() {
        if ( xhr.status == 200 ) 
          resolve(xhr.response);
        else 
          reject(Error(xhr.statusText)); 
      }
      xhr.send();
      
    }).then(function(response) { 

      let data = JSON.parse(response).people;
      return data.map( key => key.name ).sort();

    }); 
  }
};
