(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .controller('MainController', MainController);

  /** @ngInject */
  function MainController() {
    var vm = this;
    activate();

    function activate() {
      console.log("inside the activate function ");
    }
  }
})();
