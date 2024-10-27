'use strict';
angular.module('insidelayout', []).component('insidelayout', {
    templateUrl: 'insidelayout/insidelayout.template.html',
    controller: function insidelayoutController($scope, $http, $interval) {
        this.pageTitle = "NP02 Membrane";
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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=insidelayout")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP02_DCS_01_TSS_001_AA_BA = res["47897559194395"][0];
                    self.NP02_DCS_01_TSS_001_AB_BB = res["47897575971611"][0];
                    self.NP02_DCS_01_TSS_001_AC_BC = res["47897760520987"][0];
                    self.NP02_DCS_01_TSS_001_AD_BD = res["47897659857691"][0];
                    self.NP02_DCS_01_TSS_001_AE_BE = res["47897861184283"][0];
                    self.NP02_DCS_01_TSS_002_AA_BA = res["47897592748827"][0];
                    self.NP02_DCS_01_TSS_002_AB_BB = res["47897676634907"][0];
                    self.NP02_DCS_01_TSS_002_AD_BD = res["47897794075419"][0];
                    self.NP02_DCS_01_TSS_002_AE_BE = res["47897894738715"][0];
                    self.NP02_DCS_01_TSS_002_AF_BF = res["47897693412123"][0];
                    self.NP02_DCS_01_TSS_002_AH_BH = res["47897609526043"][0];
                    self.NP02_DCS_01_TSS_002_AI_BI = res["47897626303259"][0];
                    self.NP02_DCS_01_TSS_002_AJ_BJ = res["47897810852635"][0];
                    self.NP02_DCS_01_TSS_002_AK_BK = res["47897827629851"][0];
                    self.NP02_DCS_01_TSS_002_AL_BL = res["47897844407067"][0];
                    self.NP02_DCS_01_TSS_002_AM_BM = res["47897710189339"][0];
                    self.NP02_DCS_01_TSS_002_AN_BN = res["47897726966555"][0];
                    self.NP02_DCS_01_TSS_002_AO_BO = res["47897743743771"][0];
                    self.NP02_DCS_01_TSS_002_AP_BP = res["47897911515931"][0];
                    self.NP02_DCS_01_TSS_002_AQ_BQ = res["47897928293147"][0];
                    self.NP02_DCS_01_TSS_002_AR_BR = res["47897945070363"][0];

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