"use strict";
angular.module("multiplexer", []).component("multiplexer", {
    templateUrl: "multiplexer/multiplexer.template.html",
    controller: [
        "$routeParams",
        "$scope",
        "$http",
        "$window",
        "$interval",
        function multiplexerController(
            $routeParams,
            $scope,
            $http,
            $window,
            $interval
        ) {
            this.pageTitle = "NP02 Temperature Multiplexer";
            this.natalie = 1;
            var self = this;
            $scope.isMCardOpen = new Array(8).fill(false);
            this.toggleCard = function (cardNumber) {
                $scope.isMCardOpen[cardNumber] = !$scope.isMCardOpen[cardNumber];
            }
            this.pageChooser = function (page) {
                $window.location.href = "#!/" + page;
            };

            this.reload = function () {
                self.NP02_DCS_01_TE = [];
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
                    .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=multiplexer")
                    .then(function (result) {
                        console.log(result.data);
                        // var rArr = [];
                        // var resjson = angular.toJson(resultArr.data);
                        // var res = JSON.parse(resjson);
                        // for (var i = 0; i < res.length; i++) {
                        //     rArr.push(JSON.parse(res[i]));
                        // }
                        //
                        // self.NP02_DCS_01_TE_card1 = [];
                        //
                        // self.NP02_DCS_01_TE_card1["Name"] = [];
                        // self.NP02_DCS_01_TE_card1["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card2 = [];
                        //
                        // self.NP02_DCS_01_TE_card2["Name"] = [];
                        // self.NP02_DCS_01_TE_card2["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card3 = [];
                        //
                        // self.NP02_DCS_01_TE_card3["Name"] = [];
                        // self.NP02_DCS_01_TE_card3["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card4 = [];
                        //
                        // self.NP02_DCS_01_TE_card4["Name"] = [];
                        // self.NP02_DCS_01_TE_card4["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card5 = [];
                        //
                        // self.NP02_DCS_01_TE_card5["Name"] = [];
                        // self.NP02_DCS_01_TE_card5["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card6 = [];
                        //
                        // self.NP02_DCS_01_TE_card6["Name"] = [];
                        // self.NP02_DCS_01_TE_card6["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card7 = [];
                        //
                        // self.NP02_DCS_01_TE_card7["Name"] = [];
                        // self.NP02_DCS_01_TE_card7["Value"] = [];
                        //
                        // self.NP02_DCS_01_TE_card8 = [];
                        //
                        // self.NP02_DCS_01_TE_card8["Name"] = [];
                        // self.NP02_DCS_01_TE_card8["Value"] = [];
                        //
                        // /*self.NP02_MHT0100AI = rArr[0].Mnish;
                        //     self.NP02_TT0100AI = rArr[1].Mnish;
                        //     self.NP02_PT0106AI = rArr[2].Mnish;*/
                        //
                        // var j = 0;
                        // var k = "";
                        //
                        //
                        // for (var i = 1; i < 9; i++) {
                        //     self.NP02_DCS_01_TE_card6["Name"].push("TE060" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card8["Name"].push("TE080" + i);
                        //     self.NP02_DCS_01_TE_card8["Value"].push(rArr[i + 167].toFixed(1));
                        // }
                        //
                        // for (var i = 1; i < 10; i++) {
                        //     self.NP02_DCS_01_TE_card1["Name"].push("TE010" + i);
                        //     self.NP02_DCS_01_TE_card1["Value"].push(rArr[i - 1].toFixed(1));
                        //
                        //     self.NP02_DCS_01_TE_card2["Name"].push("TE020" + i);
                        //     self.NP02_DCS_01_TE_card2["Value"].push(rArr[i + 23].toFixed(1));
                        //     self.NP02_DCS_01_TE_card3["Name"].push("TE030" + i);
                        //     self.NP02_DCS_01_TE_card3["Value"].push(rArr[i + 47].toFixed(1));
                        //     self.NP02_DCS_01_TE_card4["Name"].push("TE040" + i);
                        //     self.NP02_DCS_01_TE_card4["Value"].push(rArr[i + 71].toFixed(1));
                        //     self.NP02_DCS_01_TE_card5["Name"].push("LT050" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("LT070" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        //
                        // for (var i = 9; i < 13; i++) {
                        //     self.NP02_DCS_01_TE_card6["Name"].push("AIR_06_" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        // }
                        //
                        // for (var i = 9; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card8["Name"].push("AIR_08_" + i);
                        //     self.NP02_DCS_01_TE_card8["Value"].push(rArr[i + 167].toFixed(1));
                        // }
                        //
                        // for (var i = 10; i < 13; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("AIR_05_" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("AIR_07_" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        //
                        // for (var i = 10; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card1["Name"].push("TE01" + i);
                        //     self.NP02_DCS_01_TE_card1["Value"].push(rArr[i - 1].toFixed(1));
                        //     self.NP02_DCS_01_TE_card2["Name"].push("TE02" + i);
                        //     self.NP02_DCS_01_TE_card2["Value"].push(rArr[i + 23].toFixed(1));
                        //     self.NP02_DCS_01_TE_card3["Name"].push("TE03" + i);
                        //     self.NP02_DCS_01_TE_card3["Value"].push(rArr[i + 47].toFixed(1));
                        //     self.NP02_DCS_01_TE_card4["Name"].push("TE04" + i);
                        //     self.NP02_DCS_01_TE_card4["Value"].push(rArr[i + 71].toFixed(1));
                        // }
                        //
                        // for (var i = 13; i < 22; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("TE05" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card6["Name"].push("TE00" + (i - 3));
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("TE07" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        //
                        // for (var i = 22; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("TE05" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card6["Name"].push("AIR_06_" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("TE07" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        //
                        // // console.log(self.NP02_DCS_01_TE_card["Name"][0]);

                        console.log("interval occured");
                    });
            };
            this.promise;
            this.reload();
            $scope.start = function () {
                $scope.stop();

                self.promise = $interval(self.reload, 600000);
            };
            $scope.stop = function () {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on("$destroy", function () {
                $scope.stop();
            });
        },
    ],
});
