var AppController = function() {

    this.index = function(req, res){
      res.render('index', { });
    };
    
    this.quiz = function(req, res){
      res.render('quiz', { });
    };
    
    this.ping = function(req, res){
      res.send("pong!", 200);
    };

};

module.exports = AppController;
