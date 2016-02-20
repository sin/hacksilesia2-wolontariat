angular.module('starter.controllers', [])

  .controller('FeedCtrl', function ($scope, Posts) {
    $scope.$on('$ionicView.enter', function (e) {
      $scope.posts = Posts.query();
    });
  })

  .controller('AddCtrl', function ($scope, $cordovaCamera) {
    $scope.takeImage = function() {
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

      $cordovaCamera.getPicture(options).then(function(imageData) {
        $scope.srcImage = "data:image/jpeg;base64," + imageData;
      }, function(err) {
        // error
      });
    }
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
