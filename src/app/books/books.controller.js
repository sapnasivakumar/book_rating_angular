(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .controller('BookCreation', BookCreation);

  /** @ngInject */
  function BookCreation(toastr, bookCreationService, authorCreationService, envService) {
    var vm = this;
    vm.data = {};
    authorCreationService.authorListFetch()
      .then(function(results) {
        vm.authorData = results.data;
        console.log("authordata%%%%%",vm.authorData);
      }, function(response){
        vm.authorFetchError = response.status + "=" +response.data.message;
      });

    vm.bookCreation = function () {
      bookCreationService.bookCreation(vm.data)
        .then(function(results) {
          vm.newBook = results.data;
          console.log("newBook$$$$$$$",vm.newBook);
          toastr.info("Added Author successfully");
          vm.reset();
        }, function(response){
          vm.bookCreationError = response.status + "=" +response.data.message;
          toastr.info("Error in adding a new author");
        });
    };
    vm.reset = function(){
      vm.data = {};
      vm.userForm.$setPristine();
    }
  }
})();
