'use strict';
angular.module('pl506', []).component('pl506', {
    templateUrl: 'pl506/pl506.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function pl506Controller($routeParams, $scope, $window, $http, $interval) {
            this.pageTitle = "NP02 VD PL506 Control";
            this.natalie = 1;
            var self = this;

            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 0.33;
            }

            var fundays = this.days;

            this.dayChanger = function (fundays) {
                $window.location.href = "#!/pl506/" + fundays;
            };

            this.reload = function () {
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
                    .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=pl506")
                    .then(function (result) {
                        const res = result.data;
                        console.log(res);


                        // // self.NP_VD_Wiener_NP04_PS_CE_06_Status_On = rArr[21];
                        // // self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_Status_On = rArr[22];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_MeasurementSenseVoltage = rArr[23];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_MeasurementCurrent = rArr[24];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_MeasurementTemperature = rArr[25];
                        // // self.NP_VD_Wiener_NP04_PS_CE_06_Channel0_Status_On = rArr[26];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel0_MeasurementSenseVoltage = rArr[27];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel0_MeasurementCurrent = rArr[28];
                        // // self.NP_VD_Wiener_NP04_PS_CE_06_Channel1_Status_On = rArr[29];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel1_MeasurementSenseVoltage = rArr[30];
                        // self.NP_VD_Wiener_NP04_PS_CE_06_Channel1_MeasurementCurrent = rArr[31];
                        //
                        // if (rArr[21] == 1) {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Status_On = "On";
                        // }
                        // else {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Status_On = "Off";
                        // };
                        //
                        // if (rArr[22] == 1) {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_Status_On = "On";
                        // }
                        // else {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel2_Status_On = "Off";
                        // };
                        //
                        // if (rArr[26] == 1) {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel0_Status_On = "On";
                        // }
                        // else {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel0_Status_On = "Off";
                        // };
                        //
                        // if (rArr[29] == 1) {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel1_Status_On = "On";
                        // }
                        // else {
                        //     self.NP_VD_Wiener_NP04_PS_CE_06_Channel1_Status_On = "Off";
                        // };

                    });
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
    ]
});