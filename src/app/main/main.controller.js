(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .controller('AuthorCreation', AuthorCreation);

  /** @ngInject */
  function AuthorCreation(toastr, authorCreationService) {
    var vm = this;
    vm.data = {};
    vm.authorCreation = function () {
      console.log("printing the data from the form ########",vm.data);
      var authorData = vm.data;
      authorCreationService.authorCreation(authorData)
        .then(function(results) {
          console.log("inside the then part of the controller", results);
          vm.newAuthor = results;
          toastr.info("Added Author successfully");
        }, function(response){
          console.log("inside the error in controller@@@@@", response);
          vm.authorCreationError = response.status + "=" +response.data.message;
          toastr.info("Error in adding a new author");
        });

    };
  }
})();
