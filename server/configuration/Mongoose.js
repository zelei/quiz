var mongoose = require('mongoose');


var Database = function() {

    this.connect = function(ip, schema) {
        mongoose.connect('mongodb://'+ip+'/'+schema);
        return mongoose;
    };
    
};

module.exports = Database;

