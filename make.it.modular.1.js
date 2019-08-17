const fs = require('fs');
const path = require('path');

module.exports = function(dirname, filterStr, callback_func) {
    fs.readdir(dirname, function(err, list) {
        if (err) {
            return callback_func(err);
        } else {

            list = list.filter(function(file) {
                return path.extname(file) === '.' + filterStr
            });

            return callback_func(null, list);
        }
    });
}