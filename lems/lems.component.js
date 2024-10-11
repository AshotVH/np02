'use strict';
angular.module('lems', []).component('lems', {
    templateUrl: 'lems/lems.template.html',
    controller: function lemsController($scope, $http, $interval) {
        this.pageTitle = "NP02 LEMs";
        this.natalie = 1;
        var self = this;
        $scope.isBoardContentOpen = new Array(6).fill(false);
        this.toggleBoardContent = function (i){
            $scope.isBoardContentOpen[i] = !$scope.isBoardContentOpen[i];
          }
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

            $http.get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=lems").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP02_DCS_01_TE_board0 = [];

                self.NP02_DCS_01_TE_board0.Name = [];
                self.NP02_DCS_01_TE_board0.Value = [];

                self.NP02_DCS_01_TE_board1 = [];

                self.NP02_DCS_01_TE_board1.Name = [];
                self.NP02_DCS_01_TE_board1.Value = [];

                self.NP02_DCS_01_TE_board2 = [];

                self.NP02_DCS_01_TE_board2.Name = [];
                self.NP02_DCS_01_TE_board2.Value = [];

                self.NP02_DCS_01_TE_board3 = [];

                self.NP02_DCS_01_TE_board3.Name = [];
                self.NP02_DCS_01_TE_board3.Value = [];

                self.NP02_DCS_01_TE_board4 = [];

                self.NP02_DCS_01_TE_board4.Name = [];
                self.NP02_DCS_01_TE_board4.Value = [];

                self.NP02_DCS_01_TE_board5 = [];

                self.NP02_DCS_01_TE_board5.Name = [];
                self.NP02_DCS_01_TE_board5.Value = [];

                for (var i = 0; i < 10; i++) {
                    self.NP02_DCS_01_TE_board0.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board0.Value.push(rArr[i]);
                    self.NP02_DCS_01_TE_board1.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board1.Value.push(rArr[i+16]);
                    self.NP02_DCS_01_TE_board2.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board2.Value.push(rArr[i+32]);
                    self.NP02_DCS_01_TE_board3.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board3.Value.push(rArr[i+48]);
                    self.NP02_DCS_01_TE_board4.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board4.Value.push(rArr[i+64]);
                    self.NP02_DCS_01_TE_board5.Name.push("Ch0" + i);
                    self.NP02_DCS_01_TE_board5.Value.push(rArr[i+80]);
                }

                for (var i = 10; i < 16; i++) {
                    self.NP02_DCS_01_TE_board0.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board0.Value.push(rArr[i]);
                    self.NP02_DCS_01_TE_board1.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board1.Value.push(rArr[i+16]);
                    self.NP02_DCS_01_TE_board2.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board2.Value.push(rArr[i+32]);
                    self.NP02_DCS_01_TE_board3.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board3.Value.push(rArr[i+48]);
                    self.NP02_DCS_01_TE_board4.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board4.Value.push(rArr[i+64]);
                    self.NP02_DCS_01_TE_board5.Name.push("Ch" + i);
                    self.NP02_DCS_01_TE_board5.Value.push(rArr[i+80]);
                }

            });

            self.NP02_DCS_01_CRP2_board0 = ['25-30 top', '31-36 top', 'not used', 'not used', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];
            self.NP02_DCS_01_CRP2_board1 = ['13-18 top', '19-24 top', 'not used', 'not used', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
            self.NP02_DCS_01_CRP2_board2 = ['1-6 top', '7-12 top', 'not used', 'not used', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            self.NP02_DCS_01_CRP1_board3 = ['25-30 top', '31-36 top', 'not used', 'not used', '25', '26', '27', '28', '29', '30', '31', '32', '33', '34', '35', '36'];
            self.NP02_DCS_01_CRP1_board4 = ['13-18 top', 'not used', 'not used', '19-24 top', '13', '14', '15', '16', '17', '18', '19', '20', '21', '22', '23', '24'];
            self.NP02_DCS_01_CRP1_board5 = ['1-6 top', '7-12 top', 'not used', 'not used', '1', '2', '3', '4', '5', '6', '7', '8', '9', '10', '11', '12'];
            //self.NP02_DCS_01_CRP2.push('25-30 top');
            //self.NP02_DCS_01_CRP2.push('31-36 top');
            console.log(self.NP02_DCS_01_CRP2);

            console.log("interval occured");

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