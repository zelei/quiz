var angular = angular || {};

var quizApp = angular.module('quizApp', []);
 
quizApp.controller('QuizCtrl', function ($scope) {
  
    $scope.TYPE = {
        G : {}, I : {}, GI : {}, BI : {}
    };
    
    $scope.score = 0;
    
    $scope.isFinished = false;
    
    $scope.currentWord = "";
    
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
            increaseScore();
        }
        
        if((getIndex() !== getWordCount())) {
           increaseIndex();
           setCurrentWord();
           setPercent(getWordCount(), getIndex());
        } else {
          $scope.isFinished = true;  
        }
    
    };
    
    $scope.percent = function() {
        return (100 / getWordCount()) * getIndex();
    };
    
    var getIndex = function() {
        return index + 1;
    };
    
    var setPercent = function(wordCount, index) {
        $scope.percent = (100 / wordCount) * index;
    };
    
    var setCurrentWord = function() {
        $scope.currentWord = words[index].question;
    };
    
    var getWordCount = function() {
        return words.length;
    };
    
    var getCurrentQuestion = function() {
        return words[index];
    };
    
    var isGoodAnswer = function(solution) {
        return getCurrentQuestion().solution === solution;
    };
    
    var increaseIndex = function() {
        index += 1;
    };

    var increaseScore = function() {
        $scope.score+=1;
    };

    setCurrentWord();
    setPercent(getWordCount(), getIndex());

});