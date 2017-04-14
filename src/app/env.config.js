/**
 * Created by pradeep on 10/04/17.
 */
(function() {
  'use strict';

  angular
    .module('goodReadsAngular')
    .config(function(envServiceProvider) {

    envServiceProvider.config({
      domains: {
        development: ['localhost'],
        production: ['washer-murphy-41842.bitballoon.com']
      },
      vars: {
        development: {
          apiUrl: 'http://localhost:8000/'
        },
        production: {
          apiUrl: 'https://book-rating.herokuapp.com/'
        }
      }
    });
    envServiceProvider.check();
  });

})();

