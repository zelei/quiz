var quizApp = angular.module('quizApp', []);
 
quizApp.controller('QuizCtrl', function ($scope) {
  
  $scope.TYPE = {
    G : {},
    I : {},
    GI : {},
    BI : {}
  };
  
  $scope.score = 0;
  
  $scope.isFinished = false;
  
  var index = 0;
  
  var words = [
    {'question': 'anticipate', 'solution' : $scope.TYPE.G},
    {'question': 'anticipate2', 'solution' : $scope.TYPE.I},
    {'question': 'anticipate3', 'solution' : $scope.TYPE.GI},
    {'question': 'anticipate4', 'solution' : $scope.TYPE.BI},
    {'question': 'anticipate', 'solution' : $scope.TYPE.G},
    {'question': 'anticipate2', 'solution' : $scope.TYPE.I},
    {'question': 'anticipate3', 'solution' : $scope.TYPE.GI},
    {'question': 'anticipate4', 'solution' : $scope.TYPE.BI},
    {'question': 'anticipate', 'solution' : $scope.TYPE.G},
    {'question': 'anticipate2', 'solution' : $scope.TYPE.I},
    {'question': 'anticipate3', 'solution' : $scope.TYPE.GI},
    {'question': 'anticipate4', 'solution' : $scope.TYPE.BI},
    {'question': 'anticipate5', 'solution' : $scope.TYPE.G}
  ];
  
  $scope.setAnswer = function(solution) {
  
    if(isGoodAnswer(solution)) {
        $scope.score+=1;
    }
    
    if(! ($scope.getIndex() == $scope.getWordCount())) {
       increaseIndex();
    } else {
      $scope.isFinished = true;  
    }
    
  };
  
  $scope.getCurrentWord = function() {
    return words[index].question;
  };
  
  $scope.getIndex = function() {
    return index + 1;
  };
  
  $scope.getWordCount = function() {
    return words.length;
  };
  
  $scope.getPercent = function() {
    return (100 / $scope.getWordCount()) * $scope.getIndex();
  };

  getCurrentQuestion = function() {
    return words[index];
  };
  
  isGoodAnswer = function(solution) {
    return getCurrentQuestion().solution === solution;
  }
  
  increaseIndex = function() {
    index = index + 1;
  }

});