angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.items = [];
  $scope.currentItem = [];

  $scope.goTo = function(item) {
    $state.go('app.details');
    $scope.currentItem = item;
    
  }

  $scope.getData = function(tag) {
    WL.Client.invokeProcedure(
      {
        adapter: 'CNN_RSS_Adapter',
        procedure: 'getStoriesFiltered',
        parameters: [tag]
      },
      {
        onSuccess: function(response) {
          console.log('Called the Adapter: ', response);
          $scope.items = response.invocationResult.Items;
          $scope.$apply();
        }
      },
      {
        onFailure: function(response) {
          console.log('Failed to call Adapter: ', response);
        }
      }
    )
  }

  $scope.getData();
});
