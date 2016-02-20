angular.module('starter.services', ['ngResource'])

  .factory('Searches', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var searches = [{
      id: 0,
      name: 'Ben Sparrow',
      lastText: 'You on your way?',
      face: 'img/ben.png'
    }, {
      id: 1,
      name: 'Max Lynx',
      lastText: 'Hey, it\'s me',
      face: 'img/max.png'
    }, {
      id: 2,
      name: 'Adam Bradleyson',
      lastText: 'I should buy a boat',
      face: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Perry Governor',
      lastText: 'Look at my mukluks!',
      face: 'img/perry.png'
    }, {
      id: 4,
      name: 'Mike Harrington',
      lastText: 'This is wicked good ice cream.',
      face: 'img/mike.png'
    }];

    return {
      all: function () {
        return searches;
      },
      remove: function (search) {
        searches.splice(searches.indexOf(search), 1);
      },
      get: function (searchId) {
        for (var i = 0; i < searches.length; i++) {
          if (searches[i].id === parseInt(searchId)) {
            return searches[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Users', function ($resource) {
    return $resource('http://192.168.1.118:8000/users/:id');
  });
