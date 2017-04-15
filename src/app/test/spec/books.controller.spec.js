(function() {
  'use strict';

  describe('controllers', function(){
    var vm,
      deferred,
      $scope;

    beforeEach(module('goodReadsAngular'));
    beforeEach(inject(function($controller, _$q_, _$rootScope_, _toastr_, _bookCreationService_, _authorCreationService_) {
      deferred = _$q_.defer();
      spyOn(_bookCreationService_, "bookCreation").and.returnValue(deferred.promise);
      spyOn(_authorCreationService_, "authorListFetch").and.returnValue(deferred.promise);
      $scope = _$rootScope_.$new();
      vm = $controller('BookCreation', {
        $scope: $scope,
        bookCreationService: _bookCreationService_,
        authorCreationService: _authorCreationService_
      });
    }));

    describe('after booksController activation', function(){
      it('should create a new book entry', function(){
        spyOn(vm, "reset").and.returnValue("");
        vm.bookCreation();
        deferred.resolve(sample_new_book_nested);
        $scope.$apply();
        expect(vm.newBook.name).toEqual("book1");
      });

      it('should test the fetching of author list', function(){
        deferred.resolve(sample_author_list);
        $scope.$apply();
        expect(vm.authorData[0].name).toEqual("Test author 2");
      });
    });
  });
})();

