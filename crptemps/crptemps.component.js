'use strict';
angular.module('crptemps', []).component('crptemps', {
    templateUrl: 'crptemps/crptemps.template.html',
    controller: function crptempsController($scope, $http, $window, $interval) {
        this.pageTitle = "NP02 CRP temperatures";
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

            });

            $http.get("php-db-conn/cachedVals.conn.php?elemId=crptemps").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                for (var j = 0; j < rArr.length; j++) {
                    if ((rArr[j] < 80) || (rArr[j] > 350)) {
                        console.log("Error in value");
                        rArr[j] = -1;
                    }
                }

                self.NP02_DCS_01_TE_card2 = [];

                self.NP02_DCS_01_TE_card2["Name"] = [];
                self.NP02_DCS_01_TE_card2["Value"] = [];

                self.NP02_DCS_01_TE_card3 = [];

                self.NP02_DCS_01_TE_card3["Name"] = [];
                self.NP02_DCS_01_TE_card3["Value"] = [];

                self.NP02_DCS_01_TE_card4 = [];

                self.NP02_DCS_01_TE_card4["Name"] = [];
                self.NP02_DCS_01_TE_card4["Value"] = [];

                var j = 0;
                var k = "";

                for (var i = 1; i < 10; i++) {
                    self.NP02_DCS_01_TE_card2["Name"].push("TE010" + i);
                    self.NP02_DCS_01_TE_card2["Value"].push(rArr[i-1]);
                    self.NP02_DCS_01_TE_card3["Name"].push("TE020" + i);
                    self.NP02_DCS_01_TE_card3["Value"].push(rArr[i+23]);
                    console.log(rArr[i+23]);

                }

                for (var i = 0; i < 8; i++) {
                    self.NP02_DCS_01_TE_card4["Value"].push(rArr[i+48]);
                }

                self.NP02_DCS_01_TE_card4.Name[0] = "TE0413";
                self.NP02_DCS_01_TE_card4.Name[1] = "TE0415";
                self.NP02_DCS_01_TE_card4.Name[2] = "TE0416";
                self.NP02_DCS_01_TE_card4.Name[3] = "TE0418";
                self.NP02_DCS_01_TE_card4.Name[4] = "TE0419";
                self.NP02_DCS_01_TE_card4.Name[5] = "TE0421";
                self.NP02_DCS_01_TE_card4.Name[6] = "TE0422";
                self.NP02_DCS_01_TE_card4.Name[7] = "TE0424";


                for (var i = 10; i < 25; i++) {
                    self.NP02_DCS_01_TE_card2["Name"].push("TE01" + i);
                    self.NP02_DCS_01_TE_card2["Value"].push(rArr[i-1]);
                    self.NP02_DCS_01_TE_card3["Name"].push("TE02" + i);
                    self.NP02_DCS_01_TE_card3["Value"].push(rArr[i+23]);
                    console.log(rArr[i+23]);

                }
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