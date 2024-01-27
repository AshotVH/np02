describe('histogramvd', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogramvd')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogramvd", {$scope: $scope});

        });
        describe('histogramvdController', function() {

            it('should create a `histogramvd` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogramvd');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});