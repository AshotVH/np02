'use strict';
angular.module('floor', []).component('floor', {
    templateUrl: 'floor/underfloor.template.html',
    controller: function crptempsController($scope, $http, $window, $interval) {
        this.pageTitle = "NP02 floor temperatures";
        this.natalie = 1;
        var self = this;

        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

        this.reload = function () {

            $http.get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=np02cryo").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(res[i]);
                }

                self.NP02_MHT0100AI = rArr[0];
                self.NP02_TT0100AI = rArr[1];
                self.NP02_PT0106AI = rArr[2];

                self.timestamp = rArr[rArr.length-1] * 1000;

            });

            $http.get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=floor").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP02_DCS_01_AIR_08_13 = rArr[0];
                self.NP02_DCS_01_AIR_08_14 = rArr[1];
                self.NP02_DCS_01_AIR_08_15 = rArr[2];
                self.NP02_DCS_01_AIR_08_16 = rArr[3];
                self.NP02_DCS_01_AIR_08_17 = rArr[4];
                self.NP02_DCS_01_AIR_08_18 = rArr[5];
                /*self.NP02_MHT0100AI = rArr[0];
                self.NP02_TT0100AI = rArr[1];
                self.NP02_PT0106AI = rArr[2];*/
                console.log("interval occured");

            });
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 150000);
        };

        $scope.stop = function() {
            $interval.cancel(self.promise);
        };
        $scope.start();

        $scope.$on('$destroy', function() {
            $scope.stop();
        });
    }
});