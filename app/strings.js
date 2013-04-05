if (typeof define !== 'function') { var define = require('amdefine')(module); }

define(function() {
  return {
    reduceString: function(str, amount) {
        var curr_char, last_char, found_count = 0, return_str = [];
        for(var i=0, len = str.length; i < len; i++){
            curr_char = str.charAt(i);
            return_str.push(curr_char);
            if(curr_char !== last_char) {
                last_char = curr_char;
                found_count = 0;
            } else if(++found_count >= amount) {
                return_str.pop();
            }
        }
        return return_str.join('');
    },
    wordwrap: function(str, cols) {
        var answer = '';
        var char_count = 0;

        var bits = str.split(" ");
        bits.forEach(function(s) {
            if(char_count + s.length > cols && char_count > 0) {
                answer = answer.trim() + "\n" + s;
                char_count = s.length;
            } else {
                answer += s;
                char_count += s.length;
            }

            if(char_count >= cols) {
                answer += "\n";
                char_count = 0;
            } else {
                answer += " ";
                char_count++;
            }
        });
        return answer.trim();
    },
    reverseString: function(str) {
        return str.split("").reverse().join("");
    }
}
});
