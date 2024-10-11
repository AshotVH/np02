'use strict';
angular.module('saleve', []).component('saleve', {
    templateUrl: 'saleve/saleve.template.html',
    controller: function saleveController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Saleve";
        this.natalie = 1;
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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=saleve")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.M3_SS_VER_04 = res["47901015278619"][0];
                    self.M4_SS_VER_04 = res["47901032055835"][0];
                    self.M3_SS_VER_03 = res["47901048833051"][0];
                    self.M4_SS_VER_03 = res["47901065610267"][0];
                    self.B4_SS_HOR_01 = res["47901082387483"][0];
                    self.DS_SS_01 = res["47901099164699"][0];
                    self.B3_SS_HOR_01 = res["47901115941915"][0];
                    self.B3_SS_HOR_02 = res["47901132719131"][0];
                    self.B3_SS_HOR_03 = res["47901149496347"][0];
                    self.MEM1_SS_VER_01 = res["47901166273563"][0];
                    self.MEM1_SS_HOR_02 = res["47901183050779"][0];
                    self.FRM_SS_VER_02 = res["47901199827995"][0];
                    self.MEM1_SS_HOR_04 = res["47901216605211"][0];
                    self.MEM1_SS_3AX_05_HOR = res["47901233382427"][0];
                    self.MEM1_SS_VER_03 = res["47901250159643"][0];
                    self.M3_SS_VER_02 = res["47901266936859"][0];
                    self.FRM_SS_HOR_01 = res["47901283714075"][0];
                    self.FRM_SS_HOR_03 = res["47901300491291"][0];
                    self.M4_SS_VER_02 = res["47901317268507"][0];
                    self.B2_SS_HOR_01 = res["47901334045723"][0];
                    self.M3_SS_VER_01 = res["47901350822939"][0];
                    self.M4_SS_VER_01 = res["47901367600155"][0];
                    self.TT_CONTACT_BOTTOM = res["47901384377371"][0];
                    self.TT_AMBIANCE_BORROM = res["47901401154587"][0];
                    self.MC_SLS_HOR_4B = res["47901736698907"][0];
                    self.MC_SLS_HOR_3B = res["47901753476123"][0];
                    self.MC_SLS_HOR_2B = res["47901770253339"][0];
                    self.M3_SS_VER_05 = res["47901787030555"][0];
                    self.M4_SS_VER_05 = res["47901803807771"][0];
                    self.MEM1_SS_3AX_05_VER = res["47901820584987"][0];
                    self.MEM1_SS_3AX_05_45 = res["47901837362203"][0];
                    self.TT_CONTACT_TOP = res["47901854139419"][0];
                    self.TT_AMBIENCE_TOP = res["47901870916635"][0];
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