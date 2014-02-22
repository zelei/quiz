var User = require('../dao/user.js');

var Service = function() {
    
    this.authenticate = function(accessToken, refreshToken, profile, done) {
        User.findOne({ oauthID: profile.id }, function(err, user) {
            if(err) { console.log(err); }
            if (!err && user !== null) {
                done(null, user);
                return; 
            } 
           
            var socialUser = createUser(profile);
            socialUser.save(function(err) {
                if(err) { 
                    console.log(err); 
                } else {
                    console.log("saving user ...");
                    done(null, socialUser);
                }
            });
       
        });
     
    };
    
    function createUser(profile) {
        return new User({
           oauthID: profile.id,
           name: profile.displayName,
           created: Date.now()
        });  
    }

};

module.exports = Service;