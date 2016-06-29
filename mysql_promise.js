/**
 * Created by zhaosiyang on 2016-06-28.
 */

var mysql = require("mysql");

var config = function(options){
    var pool = mysql.createPool(options);
    return function(queryString, params) {
        return new Promise(function (fullfill, reject) {
            pool.getConnection(function (err, connection) {
                if (err) {
                    reject(err);
                }
                else {
                    connection.query(queryString, params, function (err, entries) {
                        connection.release();
                        if (err) {
                            reject(err);
                        }
                        else {
                            fullfill(entries);
                        }
                    });
                }
            });
        });
    };
};

module.exports = {
    config: config
};