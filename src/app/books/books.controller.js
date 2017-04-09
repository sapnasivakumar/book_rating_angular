(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .controller('BookCreation', BookCreation);

  /** @ngInject */
  function BookCreation(toastr, bookCreationService, authorCreationService) {
    var vm = this;
    vm.data = {};

    authorCreationService.authorListFetch()
      .then(function(results) {
        vm.authorData = results.data;
        // toastr.info("Author List fetched successfully");
      }, function(response){
        vm.authorFetchError = response.status + "=" +response.data.message;
        // toastr.info("Error in fetching the author list");
      });

    vm.bookCreation = function () {
      bookCreationService.bookCreation(vm.data)
        .then(function(results) {
          // console.log("inside the then part of the controller");
          vm.newBook = results;
          toastr.info("Added Author successfully");
          // console.log("vm author id ", vm.data.author_id);
          vm.reset();
        }, function(response){
          // console.log("inside the error in controller@@@@@");
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
