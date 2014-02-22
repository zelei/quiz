// dependencies
var http = require('http');

var Passport = require('./server/configuration/Passport.js');
var Express = require('./server/configuration/Express');
var Mongoose = require('./server/configuration/Mongoose');

var routes = require('./routes');

var passport = new Passport().init();
var app = new Express().init(__dirname);
new Mongoose().connect(process.env.IP,'data');

var User = require('./server/dao/user.js');

// routes
app.get('/', routes.index);
app.get('/ping', routes.ping);

app.get('/account', ensureAuthenticated, function(req, res){
  User.findById(req.session.passport.user, function(err, user) {
    if(err) { 
      console.log(err); 
    } else {
      res.render('account', { user: user});
    }
  });
});

app.get('/auth/google',
  passport.authenticate('google'),
  function(req, res){
  });
  
app.get('/auth/google/callback', 
  passport.authenticate('google', { failureRedirect: '/' }),
  function(req, res) {
    res.redirect('/account');
  });
  
app.get('/logout', function(req, res){
  req.logout();
  res.redirect('/');
});

function ensureAuthenticated(req, res, next) {
  if (req.isAuthenticated()) { return next(); }
  res.redirect('/');
}

var server = http.createServer(app);

server.listen(process.env.PORT || 3000, process.env.IP || "0.0.0.0", function(){
  var addr = server.address();
  console.log("Server listening at", addr.address + ":" + addr.port);
});
