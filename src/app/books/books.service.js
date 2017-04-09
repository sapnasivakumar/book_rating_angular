/**
 * Created by pradeep on 06/04/17.
 */
(function(){
  'use strict';

  angular
    .module('goodReadsAngular')
    .factory('bookCreationService', bookCreService);

  function bookCreService($http, $q, $log, toastr) {

    var service = {
      bookCreation: bookCreation
    };

    return service;

    function bookCreation(formData) {
      var data = {
        "name": "book1 ",
        "isbn": "123",
        "description": "adadada",
        "author_id": 2,
        "rating": 3
      };
      console.log("printing the data #####", formData);
      return $http.post("http://localhost:8000/books", formData)
        .then(bookCreated)
        .catch(bookCreationError);


      function bookCreated(response) {
        console.log("successful author creation$$$$$$$$", response);
        return response;
      }

      function bookCreationError(error) {
        $log.error('XHR Failed for author creation');
        toastr.error("Error occurred while creating a new author");
        return $q.reject(error);
      }


    }
  }

})();
