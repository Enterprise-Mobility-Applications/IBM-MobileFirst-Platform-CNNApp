angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.goTo = function() {
    $state.go('app.details');
  }
});
