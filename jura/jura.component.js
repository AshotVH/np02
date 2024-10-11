'use strict';
angular.module('jura', []).component('jura', {
    templateUrl: 'jura/jura.template.html',
    controller: function juraController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Jura side";
        this.natalie = 1;
        var self = this;

        var element = [];

        element.push('TC_JS_02_A');
        element.push('TC_JS_02_B');
        element.push('BC_JS_03_A');
        element.push('BC_JS_03_B');
        element.push('3B_JS_01');
        element.push('DS_JS_01');

        var elementsend = JSON.stringify(element);

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=np02cryo")
                .then(function (result) {
                    const res = result.data;
                    self.NP02_MHT0100AI = res["47910779640603"][0];
                    self.NP02_TT0100AI = res["47910796417819"][0];
                    self.NP02_PT0106AI = res["47910813195035"][0];
                });
            $http
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=jura")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.TC_JS_02_A = res["47900797174811"][0];
                    self.TC_JS_02_B = res["47900830729243"][0];
                    self.BC_JS_03_A = res["47900847506459"][0];
                    self.BC_JS_03_B = res["47900864283675"][0];
                    self.B3_JS_01 = res["47900881060891"][0];
                    self.DS_JS_01 = res["47900897838107"][0];
                });
        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 150000);
        };

        $scope.stop = function () {
            $interval.cancel(self.promise);
        };
        $scope.start();

        $scope.$on('$destroy', function () {
            $scope.stop();
        });
    }
});