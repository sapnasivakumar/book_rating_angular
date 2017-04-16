(function() {
  'use strict';
  describe('service', function(){
    var authorCreService,
      $httpBackend,
      $log;
    beforeEach(module('goodReadsAngular'));
    beforeEach(inject(function(_authorCreationService_, _$httpBackend_, _$log_){
      authorCreService = _authorCreationService_;
      $httpBackend = _$httpBackend_;
      $log = _$log_;
    }));

    describe('authorCreation function', function(){

      it('should exist', function(){
        expect(authorCreService.authorCreation).not.toEqual(null);
      });

      it('should return data', function(){
        var data;
        $httpBackend.when('POST', 'http://localhost:8000/authors').respond(200, sample_new_author);
        authorCreService.authorCreation({}).then(function(response){
          data= response.data;
        });
        $httpBackend.flush();
        expect(data.name).toEqual("nmjk");
        expect(data.bio).toEqual("fsxzc");
      });

      // it('should catch an error', function(){
      //   $httpBackend.when('POST', 'http://localhost:8000/authors').respond(500);
      //   authorCreService.authorCreation({});
      //   $httpBackend.flush();
      //   console.log("printing the error msg",$log.error.logs[0]);
      //   // expect($log.error.logs).toEqual(jasmine.stringMatching('XHR Failed for book creation'));
      // });


    });
  });

})();
