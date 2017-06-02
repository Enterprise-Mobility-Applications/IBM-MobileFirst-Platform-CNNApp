
/* JavaScript content from js/controllers.js in folder common */
angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.goTo = function() {
    $state.go('app.details');
  }
});
