if (typeof define !== 'function') { var define = require('amdefine')(module); }

define([ 'jquery' ], function($) {
  return {
    async : function(value) {
    	var dfd = new $.Deferred();
    	setTimeout(function() {
    		dfd.resolve(value);
    	}, 10);
    	return dfd.promise();
    },

    manipulateRemoteData : function(url) {
    	var dfd = new $.Deferred();
    	$.ajax(url).done(function(result) {
    		var names = result.people.map(function(person) {
    			return person.name;
    		});
    		dfd.resolve(names.sort());
    	});
    	return dfd.promise();
    }
  };
});
