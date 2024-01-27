describe('testpage', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('testpage')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("testpage", {$scope: $scope});

        });
        describe('testpageController', function() {

            it('should create a `histogram` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('testpage');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});