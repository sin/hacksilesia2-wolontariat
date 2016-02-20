angular.module('starter.services', ['ngResource'])

  .factory('Organizations', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var organizations = [{
      id: 0,
      name: 'Miasto Ogrodów',
      about: 'Lorem ipsum.',
      category: null,
      logo: 'img/ben.png'
    }, {
      id: 1,
      name: 'Schronisko Zwierzak',
      about: 'Lorem ipsum.',
      category: null,
      logo: 'img/max.png'
    }, {
      id: 2,
      name: 'Miasto Ogrodów',
      about: 'Lorem ipsum.',
      category: null,
      logo: 'img/adam.jpg'
    }, {
      id: 3,
      name: 'Hospicjum',
      about: 'Lorem ipsum.',
      category: null,
      logo: 'img/perry.png'
    }, {
      id: 4,
      name: 'OFF Festival',
      about: 'Lorem ipsum.',
      category: null,
      logo: 'img/mike.png'
    }];

    return {
      query: function () {
        return organizations;
      },
      get: function (organizationId) {
        for (var i = 0; i < organizations.length; i++) {
          if (organizations[i].id === parseInt(organizationId)) {
            return organizations[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Posts', function () {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var posts = [{
      id: 0,
      user: 1,
      organization: 1,
      title: 'Pomagam zwierzakom',
      about: 'Lorem ipsum.',
      photo: 'img/adam.jpg'
    }, {
      id: 1,
      user: 2,
      organization: 2,
      title: 'Coś tam',
      about: 'Lorem ipsum.',
      photo: 'img/mike.png'
    }, {
      id: 2,
      user: 2,
      organization: 1,
      title: 'Sprzedaję bilety',
      about: 'Lorem ipsum.',
      photo: 'img/perry.png'
    }];

    return {
      query: function () {
        return posts;
      },
      get: function (postId) {
        for (var i = 0; i < posts.length; i++) {
          if (posts[i].id === parseInt(postId)) {
            return posts[i];
          }
        }
        return null;
      }
    };
  })

  .factory('Users', function ($resource) {
    return $resource('http://192.168.1.118:8000/user/:id');
  })

  .factory('Categories', function ($resource) {
    // Might use a resource here that returns a JSON array

    // Some fake testing data
    var categories = [{
      id: 0,
      name: 'Kultura',
      photo: 'img/adam.jpg'
    }, {
      id: 1,
      name: 'Hospicjum',
      photo: 'img/max.png'
    }];

    return {
      query: function () {
        return categories;
      },
      get: function (catId) {
        for (var i = 0; i < categories.length; i++) {
          if (categories[i].id === parseInt(catId)) {
            return categories[i];
          }
        }
        return null;
      }
    };
  });
