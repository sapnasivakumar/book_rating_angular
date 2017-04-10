(function(){
  'use strict';

  angular
    .module('goodReadsAngular')
    .factory('authorCreationService', authorCreService);

  function authorCreService($http, $q, $log, toastr, envService) {

    var service = {
      authorCreation: authorCreation,
      authorListFetch: authorListFetch
    };



    var apiUrl = envService.read('apiUrl');
    console.log("printing the apiurl $$$$$$$",apiUrl);


    return service;




    function authorCreation(data) {
      console.log("printing the data #####", data);
      return $http.post(envService.read('apiUrl') + 'authors', data)
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

    function authorListFetch() {
      return $http.get(envService.read('apiUrl') + 'authors')
        .then(authorListFetched)
        .catch(authorListFetchError);


      function authorListFetched(response) {
        console.log("successful author list fetched ############", response.data);
        return response;
      }

      function authorListFetchError(error) {
        $log.error('XHR Failed for author list fetching');
        toastr.error("Error occurred while fetching author list");
        return $q.reject(error);
      }

    }
  }

})();
