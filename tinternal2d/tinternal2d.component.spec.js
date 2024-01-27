describe('tinternal2d', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('tinternal2d')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("tinternal2d", {$scope: $scope});

        });
        describe('tinternal2dController', function() {

            it('should create a `tinternal2d` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('tinternal2d');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});