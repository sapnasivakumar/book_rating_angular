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
      });

    $urlRouterProvider.otherwise('/');
  }

})();
