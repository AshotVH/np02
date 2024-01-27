describe('links', function() {
    var $scope;
    var controller;
    // Load the module that contains the `phoneList` component before each test
    beforeEach(function() {
        module('links')
        // Test the controller
        inject(function(_$rootScope_, $controller) {

            $scope = _$rootScope_.$new();
            controller = $controller("links", {$scope: $scope});

        });
        describe('linksController', function() {

            it('should create a `links` model with 1 natalie', inject(function($componentController) {
                var ctrl = $componentController('links');

                expect(ctrl.natalie).toBe(1);
            }));

        })
    });
    ;

});