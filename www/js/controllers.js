angular.module('starter.controllers', [])

  .controller('FeedCtrl', function ($scope, Posts, Users, Organizations, Categories) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.posts = Posts.query();
      $scope.posts.$promise.then(function (res) {
        angular.forEach(res, function (value) {
          value.user = Users.get({id: value.user});
          value.organisation = Organizations.get({id: value.organisation});
          value.organisation.$promise.then(function () {
            value.organisation.category = Categories.get({id: value.organisation.category});
          });
        })
      });
    });
  })

  .controller('AddCtrl', function ($scope, $cordovaCamera, Organizations, Users, Posts) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.post = {
        location: "Katowice",
        date: new Date(),
        user: 1
      };
      $scope.user = Users.get({id: 1});
      $scope.organisations = Organizations.query();
      $scope.save = function () {
          Posts.save($scope.post);
      };
    });
    $scope.takeImage = function () {
      var options = {
        quality: 80,
        destinationType: Camera.DestinationType.DATA_URL,
        sourceType: Camera.PictureSourceType.CAMERA,
        allowEdit: true,
        encodingType: Camera.EncodingType.JPEG,
        targetWidth: 250,
        targetHeight: 250,
        popoverOptions: CameraPopoverOptions,
        saveToPhotoAlbum: false
      };

      $cordovaCamera.getPicture(options).then(function (imageData) {
        $scope.srcImage = "data:image/jpeg;base64," + imageData;
      }, function (err) {
        // error
      });
    }
  })

  .controller('SearchCtrl', function ($scope, Users) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.users = Users.query();
    });
  })

  .controller('ProfileCtrl', function ($scope, Users) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.user = Users.get({id: 1});
    });
  });
