'use strict';
angular.module('zmonitor', []).component('zmonitor', {
    templateUrl: 'zmonitor/zmonitor.template.html',
    controller: function zmonitorController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Ground impedance monitor";
        this.natalie = 1;
        this.TT0101 = "";
        var self = this;

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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=zmonitor")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    // self.NP02_DCS_01_gizmo_RES = res["47364161143323"][0];
                    // self.NP02_DCS_01_gizmo_TH = res["47364161143579"][0];
                    // self.NP02_DCS_01_gizmo_mag = res["47364161143835"][0];
                    // self.NP02_DCS_01_gizmo_I = res["47364161144091"][0];
                    // self.NP02_DCS_01_gizmo_Q = res["47364161144347"][0];
                    self.NP02_DCS_01_gizmo_RES = res["47364161143323"] ? parseFloat(res["47364161143323"][0]).toFixed(2) : false;
                    self.NP02_DCS_01_gizmo_TH = res["47364161143579"] ? parseFloat(res["47364161143579"][0]).toFixed(2) : false;
                    self.NP02_DCS_01_gizmo_mag = res["47364161143835"] ? parseFloat(res["47364161143835"][0]).toFixed(2) : false;
                    self.NP02_DCS_01_gizmo_I = res["47364161144091"] ? parseFloat(res["47364161144091"][0]).toFixed(2) : false;
                    self.NP02_DCS_01_gizmo_Q = res["47364161144347"] ? parseFloat(res["47364161144347"][0]).toFixed(2) : false;
                    
                    console.log("interval occured");

                });
        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();
            self.promise = $interval(self.reload, 60000);
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