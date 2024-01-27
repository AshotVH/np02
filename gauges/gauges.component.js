'use strict';
angular.module('gauges', []).component('gauges', {
    templateUrl: 'gauges/gauges.template.html',
    controller: function gaugesController($scope, $http, $interval) {
        this.pageTitle = "NP02 Gauges";
        this.natalie = 1;
        var self = this;

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

            });

            $http.get("php-db-conn/cachedVals.conn.php?elemId=gauges").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                /*self.NP02_MHT0100AI = rArr[0];
                self.NP02_TT0100AI = rArr[1];
                self.NP02_PT0106AI = rArr[2];*/
                console.log("interval occured");
            self.timestamp = rArr[rArr.length-1];
});
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();

            self.promise = $interval(self.reload, 60000);
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