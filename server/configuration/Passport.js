var passport = require('passport');

var SocialService = require('../service/SocialService.js');
var GoogleStrategy = require('passport-google').Strategy;
var User = require('../dao/user.js');

var config = {
    google: {
     returnURL: 'https://english-quiz-c9-zelei.c9.io/auth/google/callback',
     realm: 'https://english-quiz-c9-zelei.c9.io'
    }
};

// config
var Passport = function() {

    this.init = function() {    
        passport.use(new GoogleStrategy({
           returnURL: config.google.returnURL,
           realm: config.google.realm
         }, new SocialService().authenticate));
        
        
        
        // seralize and deseralize
        passport.serializeUser(function(user, done) {
            console.log('serializeUser: ' + user._id);
            done(null, user._id);
        });
        
        passport.deserializeUser(function(id, done) {
            User.findById(id, function(err, user){
                console.log(user);
                if(!err) done(null, user);
                else done(err, null);
            });
        });

        return passport; 
    };

};

module.exports = Passport;
