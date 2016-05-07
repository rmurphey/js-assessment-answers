exports = (typeof window === 'undefined') ? global : window;

exports.stringsAnswers = {

    reduceString: function (str, amount) {
        var matches;

        while (matches = /(\w)\1{2,}/g.exec(str)) {
            str = str.replace(matches[0], matches[0].substr(0, amount));
        }

        return str;
    },

    wordWrap: function (str, cols) {
        var words = str.split(' '), rows = [];

        words.reduce(function (row, current, index) {
            if (row.length + current.length > cols) {

                if (row) {
                    rows.push(row);
                }

                if (index === words.length - 1) {
                    rows.push(current);
                }

                return current;
            } else {
                return row ? row + ' ' + current : current;
            }
        });

        return rows.join('\n');
    },

    reverseString: function (str) {
        return str.split('').reverse().join('');
    }
};
