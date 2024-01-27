'use strict';
angular.module('underfloor', []).component('underfloor', {
    templateUrl: 'underfloor/underfloor.template.html',
    controller: function crptempsController($scope, $http, $window, $interval) {
        this.pageTitle = "NP02 underfloor temperatures";
        this.natalie = 1;
        var self = this;

        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

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
                .get("php-db-conn/np02cachedvals.php?elemName=underfloor")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP02_DCS_01_AIR_06_13 = res["47899773786907"][0];
                    self.NP02_DCS_01_AIR_06_14 = res["47899790564123"][0];
                    self.NP02_DCS_01_AIR_06_15 = res["47899807341339"][0];
                    self.NP02_DCS_01_AIR_06_16 = res["47899824118555"][0];
                    self.NP02_DCS_01_AIR_06_17 = res["47899840895771"][0];
                    self.NP02_DCS_01_AIR_06_18 = res["47899857672987"][0];
                    self.NP02_DCS_01_AIR_06_19 = res["47899874450203"][0];
                    self.NP02_DCS_01_AIR_06_20 = res["47899891227419"][0];
                    self.NP02_DCS_01_AIR_06_21 = res["47899908004635"][0];
                    // self.NP02_DCS_01_AIR_06_13 = rArr[0];
                    // self.NP02_DCS_01_AIR_06_14 = rArr[1];
                    // self.NP02_DCS_01_AIR_06_15 = rArr[2];
                    // self.NP02_DCS_01_AIR_06_16 = rArr[3];
                    // self.NP02_DCS_01_AIR_06_17 = rArr[4];
                    // self.NP02_DCS_01_AIR_06_18 = rArr[5];
                    // self.NP02_DCS_01_AIR_06_19 = rArr[6];
                    // self.NP02_DCS_01_AIR_06_20 = rArr[7];
                    // self.NP02_DCS_01_AIR_06_21 = rArr[8];

                    console.log("interval occured");

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