describe('insidelayout', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('insidelayout')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("isnide", {$scope: $scope});

        });
        describe('isnideController', function() {

            it('should create a `insidelayout` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('insidelayout');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});