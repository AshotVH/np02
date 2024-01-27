'use strict';
angular.module('comissioning', []).component('comissioning', {
    templateUrl: 'comissioning/comissioning.template.html',
    controller: function comissioningController($scope, $http, $interval) {
        this.pageTitle = "NP02 comissioning";
        this.natalie = 1;
        const self = this;

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
                .get("php-db-conn/np02cachedvals.php?elemName=comissioning")
                .then(function (result) {
                    const res = result.data;

                    self.NP02_DCS_01_2PT4910 = res["47926298542363"][0];
                    self.NP02_DCS_01_2PDT4915 = res["47926332096795"][0];
                    self.NP02_DCS_01_2QT4710 = res["47926348874011"][0];
                    self.NP02_DCS_01_2QT4720 = res["47926365651227"][0];
                    self.NP02_DCS_01_2QT4730 = res["47926382428443"][0];
                    // self.NP04_DCS_01_Heinz_V_Raw = res["47363691381019"][0];
                    // self.NP02_DCS_01_Heinz_I = res["47363557163291"][0];
                    self.NP02_DCS_01_LE0301FK = res["47911366843163"][0];
                    self.NP02_DCS_01_LE0302FK = res["47911383620379"][0];
                    self.NP02_DCS_01_LE0101 = res["47960339513627"][0];
                    self.NP02_DCS_01_CRP_1_1_POS = res["47960691835419"][0];
                    self.NP02_DCS_01_LE0102 = res["47960373068059"][0];
                    self.NP02_DCS_01_CRP_1_2_POS = res["47960775721499"][0];
                    self.NP02_DCS_01_LE0103 = res["47960389845275"][0];
                    self.NP02_DCS_01_CRP_1_3_POS = res["47960792498715"][0];
                    self.NP02_DCS_01_LE0104 = res["47960406622491"][0];
                    self.NP02_DCS_01_CRP_1_4_POS = res["47960809275931"][0];
                    self.NP02_DCS_01_LE0201 = res["47960423399707"][0];
                    self.NP02_DCS_01_CRP_2_1_POS = res["47960708612635"][0];
                    self.NP02_DCS_01_LE0202 = res["47960440176923"][0];
                    self.NP02_DCS_01_CRP_2_2_POS = res["47960826053147"][0];
                    self.NP02_DCS_01_LE0203 = res["47960456954139"][0];
                    self.NP02_DCS_01_CRP_2_3_POS = res["47960842830363"][0];
                    self.NP02_DCS_01_LE0204 = res["47960473731355"][0];
                    self.NP02_DCS_01_CRP_2_4_POS = res["47960859607579"][0];
                    self.NP02_DCS_01_LE0301 = res["47960490508571"][0];
                    self.NP02_DCS_01_CRP_3_1_POS = res["47960725389851"][0];
                    self.NP02_DCS_01_LE0302 = res["47960507285787"][0];
                    self.NP02_DCS_01_CRP_3_2_POS = res["47960876384795"][0];
                    self.NP02_DCS_01_LE0303 = res["47960524063003"][0];
                    self.NP02_DCS_01_CRP_3_3_POS = res["47960893162011"][0];
                    self.NP02_DCS_01_LE0304 = res["47960540840219"][0];
                    self.NP02_DCS_01_CRP_3_4_POS = res["47960909939227"][0];
                    self.NP02_DCS_01_LE0401 = res["47960557617435"][0];
                    self.NP02_DCS_01_CRP_4_1_POS = res["47960742167067"][0];
                    self.NP02_DCS_01_LE0402 = res["47960574394651"][0];
                    self.NP02_DCS_01_CRP_4_2_POS = res["47960926716443"][0];
                    self.NP02_DCS_01_LE0403 = res["47960591171867"][0];
                    self.NP02_DCS_01_CRP_4_3_POS = res["47960943493659"][0];
                    self.NP02_DCS_01_LE0404 = res["47960607949083"][0];
                    self.NP02_DCS_01_CRP_4_4_POS = res["47960960270875"][0];
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

        $scope.$on('$destroy', function () {
            $scope.stop();
        });
    }
});