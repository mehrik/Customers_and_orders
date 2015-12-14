// require express, path, and bodyParser
var express = require('express');
var path = require('path');
var bodyParser = require('body-parser');
// Have express() set to app var
var app = express();
// set up static client directory
app.use(express.static(path.join(__dirname, './client')));
// require mongoose config which helps connect files to each other
require('./server/config/mongoose.js');
// require routes .js
require('./server/config/routes.js')(app);

app.listen(5000, function() {
    console.log("    //////////////");
    console.log("   ////      ////");
    console.log("  //// 5000 ////");
    console.log(" ////      ////");
    console.log("//////////////");
})