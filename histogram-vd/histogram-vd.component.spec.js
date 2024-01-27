describe('histogram-vd', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogram-vd')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogram-vd", {$scope: $scope});

        });
        describe('histogram-vdController', function() {

            it('should create a `histogram-vd` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogram-vd');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});