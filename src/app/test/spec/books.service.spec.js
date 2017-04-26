/*global sample_new_book */
(function() {
  'use strict';
  describe('service', function(){
    var bookCreService,
      $httpBackend;
      // $log;
    beforeEach(module('goodReadsAngular'));
    beforeEach(inject(function(_bookCreationService_, _$httpBackend_, _$log_){
      bookCreService = _bookCreationService_;
      $httpBackend = _$httpBackend_;
      // $log = _$log_;
    }));

    describe('bookCreation function', function(){

      it('should exist', function(){
        expect(bookCreService.bookCreation).not.toEqual(null);
      });

      it('should return data', function(){
        var data;
        $httpBackend.when('POST', 'http://localhost:8000/books').respond(200, sample_new_book);
        bookCreService.bookCreation({}).then(function(response){
          data= response.data;
        });
        $httpBackend.flush();
        expect(data.name).toEqual("book1");
        expect(data.isbn).toBe(123);
      });

      // it('should catch an error', function(){
      //   $httpBackend.when('POST', 'http://localhost:8000/books').respond(500);
      //   bookCreService.bookCreation({});
      //   $httpBackend.flush();
      //   console.log("book service ",$log.error.logs);
      //   // expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for book creation'));
      // });


    });
  });

})();
