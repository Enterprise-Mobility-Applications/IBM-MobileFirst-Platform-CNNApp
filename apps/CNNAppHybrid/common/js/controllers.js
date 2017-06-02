angular.module('starter.controllers', [])

.controller('AppCtrl', function($scope, $state) {
  $scope.items = [];
  $scope.currentItem = [];
  $scope.tag = '';

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
          //refresher.complete();
        }
      },
      {
        onFailure: function(response) {
          console.log('Failed to call Adapter: ', response);
          //refresher.complete();
        }
      }
    )
  }

  $scope.doRefresh = function() {
    $scope.getData($scope.tag);
    refresher.complete();

      //console.log('Begin async operation', refresher);

      //setTimeout(() => {
        //console.log('Async operation has ended');
        //refresher.complete();
      //}, 2000);
  }

  $scope.getData();
});
