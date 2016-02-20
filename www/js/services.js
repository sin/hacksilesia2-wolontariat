angular.module('starter.services', ['ngResource'])

  .factory('Organizations', function ($resource) {
    return $resource('http://192.168.1.118:8000/organisation/:id')
  })

  .factory('Posts', function ($resource) {
    return $resource('http://192.168.1.118:8000/post/:id')
  })

  .factory('Users', function ($resource) {
    return $resource('http://192.168.1.118:8000/user/:id');
  })

  .factory('Categories', function ($resource) {
    return $resource('http://192.168.1.118:8000/category/:id')
  })

  .factory('Orders', function ($resource) {
    return $resource('http://192.168.1.118:8000/order/:id')
  });
