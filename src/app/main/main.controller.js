(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .controller('AuthorCreation', AuthorCreation);

  /** @ngInject */
  function AuthorCreation(toastr, authorCreationService, envService) {
    var vm = this;
    vm.data = {};
    console.log(vm);
    vm.authorCreation = function () {
      authorCreationService.authorCreation(vm.data)
        .then(function(results) {
          vm.newAuthor = results;
          toastr.info("Added Author successfully");
          vm.reset();
        }, function(response){
          vm.authorCreationError = response.status + "=" +response.data.message;
          toastr.info("Error in adding a new author");
        });
    };
    vm.reset = function(){
      vm.data = {};
      vm.userForm.$setPristine();
    }
  }
})();
