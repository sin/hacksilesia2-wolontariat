angular.module('starter.controllers', [])

  .controller('FeedCtrl', function ($scope) {
  })

  .controller('AddCtrl', function ($scope) {
  })

  .controller('SearchCtrl', function ($scope, Searches) {
    // With the new view caching in Ionic, Controllers are only called
    // when they are recreated or on app start, instead of every page change.
    // To listen for when this page is active (for example, to refresh data),
    // listen for the $ionicView.enter event:
    //
    //$scope.$on('$ionicView.enter', function(e) {
    //});

    $scope.searches = Searches.all();

  })

  .controller('SearchDetailCtrl', function ($scope, $stateParams, Searches) {
    $scope.search = Searches.get($stateParams.searchId);
  })


  .controller('ProfileCtrl', function ($scope, Users) {
    $scope.user = Users.get(1);
    $scope.settings = {
      enableFriends: true
    };
  });
