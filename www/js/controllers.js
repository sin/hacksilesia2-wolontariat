angular.module('starter.controllers', [])

  .controller('FeedCtrl', function ($scope, Posts) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.posts = Posts.query();
    });
  })

  .controller('AddCtrl', function ($scope) {
  })

  .controller('OrganizationsCtrl', function ($scope, Organizations) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.organizations = Organizations.query();
    });
  })

  .controller('ProfileCtrl', function ($scope, Users) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.user = Users.get(0);
    });
  });
