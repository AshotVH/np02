'use strict';
angular.module('pds', []).component('pds', {
    templateUrl: 'pds/pds.template.html',
    controller: function pdsController($scope, $http, $window, $interval) {
        this.pageTitle = "NP02 PDS";
        this.natalie = 1;
        var self = this;

        this.pageChooser = function (page) {
            $window.location.href = "#!/" + page;
        };

        this.reload = function () {

            $http.get("php-db-conn/cachedVals.conn.php?elemId=np02cryo").then(function (resultArr) {
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

                self.imgPath = "img/PMTEvDisp.png";

            });

        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 30000);
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