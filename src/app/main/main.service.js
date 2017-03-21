(function(){
  'use strict';

  angular
    .module('goodReadsAngular')
    .factory('authorCreationService', authorCreService);

  function authorCreService($http, $q, $log, toastr) {

    var service = {
      authorCreation: authorCreation
    };

    return service;

    function authorCreation(data) {
      // var data = {
      //   "name": "sneha ",
      //   "bio": "snehabio"
      // };
      console.log("printing the data #####", data);
      return $http.post("http://localhost:8000/authors", data)
        .then(authorCreated)
        .catch(authorCreationError);


      function authorCreated(response) {
        console.log("successful author creation$$$$$$$$", response);
        return response;
      }

      function authorCreationError(error) {
        $log.error('XHR Failed for author creation');
        toastr.error("Error occurred while creating a new author");
        return $q.reject(error);
      }


    }
  }

})();
