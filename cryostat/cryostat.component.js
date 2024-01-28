"use strict";
angular.module("cryostat", []).component("cryostat", {
    templateUrl: "cryostat/cryostat.template.html",
    controller: function cryostatController($scope, $http, $interval) {
        this.pageTitle = "NP02 Cryostat";
        this.natalie = 1;
        var self = this;
        self.kelvinsign = " &#8490;";
        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("php-db-conn/np02cachedvals.php?elemName=np02cryo")
                .then(function (result) {
                    const res = result.data;
                    self.NP02_MHT0100AI = res["47910779640603"][0];
                    self.NP02_TT0100AI = res["47910796417819"][0];
                    self.NP02_PT0106AI = res["47910813195035"][0];
                });
            $http
                .get("php-db-conn/np02cachedvals.php?elemName=cryostat")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);

                    self.NP02_DCS_01_TSS_001_AA_BA = res["47897559194395"][0];
                    self.NP02_DCS_01_TSS_001_AA_BB = res["47897575971611"][0];
                    self.NP02_DCS_01_TSS_002_AA_BA = res["47897592748827"][0];
                    self.NP02_DCS_01_TSS_002_AH_BH = res["47897609526043"][0];
                    self.NP02_DCS_01_TSS_002_AI_BI = res["47897626303259"][0];
                    self.NP02_DCS_01_TSS_001_AD_BD = res["47897659857691"][0];
                    self.NP02_DCS_01_TSS_002_AB_BB = res["47897676634907"][0];
                    self.NP02_DCS_01_TSS_002_AF_BF = res["47897693412123"][0];
                    self.NP02_DCS_01_TSS_002_AM_BM = res["47897710189339"][0];
                    self.NP02_DCS_01_TSS_002_AN_BN = res["47897726966555"][0];
                    self.NP02_DCS_01_TSS_002_AO_BO = res["47897743743771"][0];
                    self.NP02_DCS_01_TSS_001_AE_BE = res["47897861184283"][0];
                    self.NP02_DCS_01_TSS_002_AE_BE = res["47897894738715"][0];
                    self.NP02_DCS_01_TSS_002_AP_BP = res["47897911515931"][0];
                    self.NP02_DCS_01_TSS_002_AQ_BQ = res["47897928293147"][0];
                    self.NP02_DCS_01_TSS_002_AR_BR = res["47897945070363"][0];
                    self.NP02_DCS_01_TSS_001_AC_BC = res["47897760520987"][0];
                    self.NP02_DCS_01_TSS_002_AD_BD = res["47897794075419"][0];
                    self.NP02_DCS_01_TSS_002_AJ_BJ = res["47897810852635"][0];
                    self.NP02_DCS_01_TSS_002_AK_BK = res["47897827629851"][0];
                    self.NP02_DCS_01_TSS_002_AL_BL = res["47897844407067"][0];
                    self.NP02_DCS_01_TE0010 = res["47899773786907"][0];
                    self.NP02_DCS_01_TE0011 = res["47899790564123"][0];
                    self.NP02_DCS_01_TE0012 = res["47899807341339"][0];
                    self.NP02_DCS_01_TE0013 = res["47899824118555"][0];
                    self.NP02_DCS_01_TE0014 = res["47899840895771"][0];
                    self.NP02_DCS_01_TE0015 = res["47899857672987"][0];
                    self.NP02_DCS_01_TE0016 = res["47899874450203"][0];
                    self.NP02_DCS_01_TE0017 = res["47899891227419"][0];
                    self.NP02_DCS_01_TE0018 = res["47899908004635"][0];
                    self.NP02_PE0100AI = res["47910964189979"][0];
                    self.NP02_DCS_01_2PT3210 = res["47943277084955"][0];
                    self.NP02_PE0102AI = res["47910997744411"][0];
                    self.NP02_DCS_01_2PT3220 = res["47943293862171"][0];
                    self.NP02_PE0101AI = res["47910980967195"][0];
                    self.NP02_DCS_01_AI2_6_Spare = res["47911064853275"][0];
                    self.NP02_DCS_01_AI2_7_Spare = res["47911081630491"][0];
                    self.NP02_DCS_01_2PT4910 = res["47926298542363"][0];
                    self.NP02_DCS_01_2PDT4915 = res["47926332096795"][0];
                    self.NP02_PE0104AI = res["47911031298843"][0];
                    self.NP02_PE0105AI = res["47911048076059"][0];
                });

            console.log("interval occured");
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

        $scope.$on("$destroy", function () {
            $scope.stop();
        });
    },
});
