'use strict';
angular.module('purity', []).component('purity', {
    templateUrl: 'purity/purity.template.html',
    controller: function purityController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Purity monitors";
        this.natalie = 1;
        var self = this;

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

            });

            $http.get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=purity").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }


                /*self.NP02_MHT0100AI = rArr[0];
                self.NP02_TT0100AI = rArr[1];
                self.NP02_PT0106AI = rArr[2];*/

                self.NP02_DCS_01_PrM0_PrM_e_lifetime = rArr[3];
                self.NP02_DCS_01_PrM0_PrM_corrected_e_lifetime = rArr[4];
                self.NP02_DCS_01_PrM0_PrM_e_driftime = rArr[5];
                self.NP02_DCS_01_PrM0_PrM_Q_C = rArr[6];
                self.NP02_DCS_01_PrM0_PrM_T_C = rArr[7];
                self.NP02_DCS_01_PrM0_PrM_BL_C = rArr[8];
                self.NP02_DCS_01_PrM0_PrM_Q_A = rArr[9];
                self.NP02_DCS_01_PrM0_PrM_T_A = rArr[10];
                self.NP02_DCS_01_PrM0_PrM_BL_A = rArr[11];
                self.NP02_DCS_01_PrM1_PrM_e_lifetime = rArr[12];
                self.NP02_DCS_01_PrM1_PrM_corrected_e_lifetime = rArr[13];
                self.NP02_DCS_01_PrM1_PrM_e_driftime = rArr[14];
                self.NP02_DCS_01_PrM1_PrM_Q_C = rArr[15];
                self.NP02_DCS_01_PrM1_PrM_T_C = rArr[16];
                self.NP02_DCS_01_PrM1_PrM_BL_C = rArr[17];
                self.NP02_DCS_01_PrM1_PrM_Q_A = rArr[18];
                self.NP02_DCS_01_PrM1_PrM_T_A = rArr[19];
                self.NP02_DCS_01_PrM1_PrM_BL_A = rArr[20];
                self.NP02_DCS_01_PrM2_PrM_e_lifetime = rArr[21];
                self.NP02_DCS_01_PrM2_PrM_corrected_e_lifetime = rArr[22];
                self.NP02_DCS_01_PrM2_PrM_e_driftime = rArr[23];
                self.NP02_DCS_01_PrM2_PrM_Q_C = rArr[24];
                self.NP02_DCS_01_PrM2_PrM_T_C = rArr[25];
                self.NP02_DCS_01_PrM2_PrM_BL_C = rArr[26];
                self.NP02_DCS_01_PrM2_PrM_Q_A = rArr[27];
                self.NP02_DCS_01_PrM2_PrM_T_A = rArr[28];
                self.NP02_DCS_01_PrM2_PrM_BL_A = rArr[29];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel00_Status_On = rArr[30];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel00_MeasurementSenseVoltage__online___value = rArr[31];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel00_MeasurementCurrent__online___value = rArr[32];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel00_MeasurementTemperature__online___value = rArr[33];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel01_Status_On = rArr[34];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel01_MeasurementSenseVoltage__online___value = rArr[35];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel01_MeasurementCurrent__online___value = rArr[36];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel01_MeasurementTemperature__online___value = rArr[37];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel02_Status_On = rArr[38];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel02_MeasurementSenseVoltage__online___value = rArr[39];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel02_MeasurementCurrent__online___value = rArr[40];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board2_Channel02_MeasurementTemperature__online___value = rArr[41];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel00_Status_On = rArr[42];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel00_MeasurementSenseVoltage__online___value = rArr[43];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel00_MeasurementCurrent__online___value = rArr[44];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel00_MeasurementTemperature__online___value = rArr[45];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel01_Status_On = rArr[46];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel01_MeasurementSenseVoltage__online___value = rArr[47];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel01_MeasurementCurrent__online___value = rArr[48];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel01_MeasurementTemperature__online___value = rArr[49];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel02_Status_On = rArr[50];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel02_MeasurementSenseVoltage__online___value = rArr[51];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel02_MeasurementCurrent__online___value = rArr[52];
                self.NP02_DCS_01_Wiener_MPOD_PrM_Board3_Channel02_MeasurementTemperature__online___value = rArr[53];

                console.log("interval occured");

                self.timestamp = rArr[rArr.length-1] * 1000;
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