describe('coldbox', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('coldbox')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("coldbox", {$scope: $scope});

        });
        describe('coldboxController', function() {

            it('should create a `coldbox` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('inside');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});