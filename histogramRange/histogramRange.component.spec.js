describe('histogramRange', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogramRange')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogramRange", {$scope: $scope});

        });
        describe('histogramRangeController', function() {

            it('should create a `histogramRange` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogramRange');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});