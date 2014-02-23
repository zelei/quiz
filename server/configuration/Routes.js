var User = require('../dao/user.js');

// config
var Routes = function() {

    this.init = function(app, routes, passport) {
        
        app.get('/', routes.index);
        
        app.get('/quiz', ensureAuthenticated, routes.quiz);
        
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
            res.redirect('/quiz');
          });
          
        app.get('/logout', function(req, res){
          req.logout();
          res.redirect('/');
        });
        
        function ensureAuthenticated(req, res, next) {
          if (req.isAuthenticated()) { return next(); }
          res.redirect('/');
        }

        return passport; 
    };

};

module.exports = Routes;
