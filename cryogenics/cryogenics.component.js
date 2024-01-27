'use strict';
angular.module('cryogenics', []).component('cryogenics', {
    templateUrl: 'cryogenics/cryogenics.template.html',
    controller: function cryogenicsController($scope, $http, $interval) {
        this.pageTitle = "NP02 cryogenics";
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
                .get("php-db-conn/np02cachedvals.php?elemName=cryogenics")
                .then(function (result) {
                    const res = result.data;

                    // self.NP02_DCS_01_2PT4910 = rArr[0];
                    // self.NP02_DCS_01_2QT4711 = rArr[1];
                    // self.NP02_DCS_01_2PDT4915 = rArr[2];
                    // self.NP02_DCS_01_2QT4710 = rArr[3];
                    // self.NP02_DCS_01_2QT4720 = rArr[4];
                    // self.NP02_DCS_01_2QT4730 = rArr[5];
                    // self.NP02_DCS_01_2CV4202 = rArr[6];
                    // self.NP02_DCS_01_2DPT4500 = rArr[7];
                    // self.NP02_DCS_01_2PT4432 = rArr[8];
                    // self.NP02_DCS_01_mp_DipSubFloat = rArr[9];
                    self.NP02_DCS_01_2PT4910 = res["47926298542363"][0];
                    self.NP02_DCS_01_2PDT4915 = res["47926332096795"][0];
                    self.NP02_DCS_01_2QT4710 = res["47926348874011"][0];
                    self.NP02_DCS_01_2QT4720 = res["47926365651227"][0];
                    self.NP02_DCS_01_2QT4730 = res["47926382428443"][0];
                    self.NP02_DCS_01_2CV4202 = res["47926399205659"][0];
                    self.NP02_DCS_01_2DPT4500 = res["47926415982875"][0];
                    self.NP02_DCS_01_2PT4432 = res["47926432760091"][0];
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