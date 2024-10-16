describe('histogram', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('histogram')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("histogram", {$scope: $scope});

        });
        describe('histogramController', function() {

            it('should create a `histogram` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('histogram');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});