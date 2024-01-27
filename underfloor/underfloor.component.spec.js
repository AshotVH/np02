describe('underfloor', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('underfloor')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("underfloor", {$scope: $scope});

        });
        describe('crptempsController', function() {

            it('should create a `crptemps` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('underfloor');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});