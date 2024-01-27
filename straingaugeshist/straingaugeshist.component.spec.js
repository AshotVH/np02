describe('straingaugeshist', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('straingaugeshist')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("straingaugeshist", {$scope: $scope});

        });
        describe('straingaugeshistController', function() {

            it('should create a `straingaugeshist` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('straingaugeshist');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});