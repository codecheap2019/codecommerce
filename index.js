const app = angular.module("app", []);

  app.controller("MainCtrl", function($scope) {
    $scope.heading = "AngularJS";
    $scope.text = "Be nice to other people; they outnumber you 5.5 billion to one. ";
  });