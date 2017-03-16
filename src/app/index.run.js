(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .run(runBlock);

  /** @ngInject */
  function runBlock($log) {

    $log.debug('runBlock end');
  }

})();
