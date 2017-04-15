(function(){
  'use strict';

  angular
    .module('goodReadsAngular')
    .factory('bookCreationService', bookCreService);

  function bookCreService($http, $q, $log, toastr, envService) {

    var service = {
      bookCreation: bookCreation
    };

    var apiUrl = envService.read('apiUrl');

    return service;

    function bookCreation(formData) {
      return $http.post(apiUrl+'books', formData)
        .then(bookCreated)
        .catch(bookCreationError);


      function bookCreated(response) {
        return response;
      }

      function bookCreationError(error) {
        $log.error('XHR Failed for book creation');
        toastr.error("Error occurred while creating a new author");
        return $q.reject(error);
      }


    }
  }

})();
