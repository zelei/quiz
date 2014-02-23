var express = require('express');
var passport = require('passport');
var ect = require('ect');
var app = express();

var Web = function(context) {

    this.context = context;

    this.init = function() {
        app.configure(function() {
          app.engine('.ect', ect({ watch: true, root: context }).render);
          
          app.set('views', context + '/views');
          app.set('view engine', '.ect');
          
          app.use(express.logger());
          app.use(express.cookieParser());
          app.use(express.bodyParser());
          app.use(express.methodOverride());
          app.use(express.session({ secret: 'my_precious' }));
          app.use(passport.initialize());
          app.use(passport.session());
          app.use(app.router);
          app.use(express.static(context + '/public'));
        });
        
        return app;
    };
    
};



module.exports = Web;

