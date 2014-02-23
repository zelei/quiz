// dependencies
var context = __dirname;

var http = require('http');

var Passport = require('./server/configuration/Passport');
var Express = require('./server/configuration/Express');
var Mongoose = require('./server/configuration/Mongoose');
var Routes = require('./server/configuration/Routes');
var AppController = require('./server/controller/AppController');

var passport = new Passport().init();
var app = new Express(context).init();

new Mongoose().connect(process.env.IP,'data');
new Routes().init(app, new AppController(), passport);

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
