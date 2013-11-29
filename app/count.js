if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function () {
  return {
    count : function(start, end) {

    	var cancelled = false;

    	function cancel() {
			cancelled = true;    		
    	}

    	function doIt (start, end) {
	    	if (!cancelled && start <= end) {
		    	console.log(start);
		    	setTimeout(function() {
		    		doIt(start + 1, end);
		    	}, 100);
		    }
    	}

    	doIt (start, end);
    	
    	return {
    		cancel: cancel
    	};
    }
  };
});