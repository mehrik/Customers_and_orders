// require mongoose
var mongoose = require('mongoose');
// require the fs module for loading files
var fs = require('fs');
var path = require('path');
// connect to the database
mongoose.connect('mongodb://localhost/customers_orders');
// create variable that points to the path where all the models live
var models_path = path.join(__dirname, './../models');
// read all of the files in the models folder
fs.readdirSync(models_path).forEach(function (file) {
    if(file.indexOf('.js') >= 0) {
        // require(models_path + '/' + file);
        require(path.join(models_path, file));
    }
})