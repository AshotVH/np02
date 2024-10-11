'use strict';
angular.module('lausanne', []).component('lausanne', {
    templateUrl: 'lausanne/lausanne.template.html',
    controller: function lausanneController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Lausanne side";
        this.natalie = 1;
        var self = this;

        var element = [];

        element.push('TC_LS_02_A');
        element.push('TC_LS_02_B');
        element.push('BC_LS_03_A');
        element.push('BC_LS_03_B');
        element.push('3B_LS_01');
        element.push('MEM_LS_03');
        element.push('MEM_LS_02');
        element.push('MC_LJS_02');
        element.push('MC_LJS_03_A');
        element.push('MC_LJS_03_B');

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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=lausanne")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.MC_LJS_02 = res["47900964946971"][0];
                    self.MC_LJS_03_A = res["47900981724187"][0];
                    self.MC_LJS_03_B = res["47900998501403"][0];
                    self.TC_LS_02_A = res["47901619258395"][0];
                    self.TC_LS_02_B = res["47901636035611"][0];
                    self.BC_LS_03_A = res["47901652812827"][0];
                    self.BC_LS_03_B = res["47901669590043"][0];
                    self.B3_LS_01 = res["47901686367259"][0];
                    self.MEM_LS_03 = res["47901703144475"][0];
                    self.MEM_LS_02 = res["47901719921691"][0];
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