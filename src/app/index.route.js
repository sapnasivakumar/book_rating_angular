(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .config(routerConfig);

  /** @ngInject */
  function routerConfig($stateProvider, $urlRouterProvider) {
  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'app/main/main.html',
      controller: 'AuthorCreation',
      controllerAs: 'main'
    })
  .state('book', {
      url: '/books',
      templateUrl: 'app/books/books.html',
      controller: 'BookCreation',
      controllerAs: 'book'
    });

  $urlRouterProvider.otherwise('/');
}


  })();

// function routeConfig($routeProvider) {
//   $routeProvider
//     .when('/', {
//       templateUrl: 'app/main/main.html',
//       controller: 'AuthorCreation',
//       controllerAs: 'main'
//     }).when('/books', {
//     templateUrl: 'app/books/books.html',
//     controller: 'BookCreation',
//     controllerAs: 'book'
//   })
//     .otherwise({
//       redirectTo: '/'
//     });
// }


// function routerConfig($stateProvider, $urlRouterProvider) {
//   $stateProvider
//     .state('home', {
//       url: '/',
//       templateUrl: 'app/main/main.html',
//       controller: 'AuthorCreation',
//       controllerAs: 'main'
//     });
//
//   $urlRouterProvider.otherwise('/');
// }
