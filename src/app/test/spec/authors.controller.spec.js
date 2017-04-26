/*global sample_new_author*/
(function() {
  'use strict';

  describe('controllers', function(){
    var vm,
      deferred,
      $scope;

    beforeEach(module('goodReadsAngular'));
    beforeEach(inject(function($controller, _$q_, _$rootScope_, _toastr_, _authorCreationService_) {
      deferred = _$q_.defer();
      spyOn(_authorCreationService_, "authorCreation").and.returnValue(deferred.promise);
      $scope = _$rootScope_.$new();
      vm = $controller('AuthorCreation', {
        $scope: $scope,
        authorCreationService: _authorCreationService_
      });
    }));

    describe('after authorsController activation', function(){
      it('should create a new author entry', function(){
        spyOn(vm, "reset").and.returnValue("");
        vm.authorCreation();
        deferred.resolve(sample_new_author);
        $scope.$apply();
        expect(vm.newAuthor.name).toEqual("nmjk");
      });
    });
  });
})();

