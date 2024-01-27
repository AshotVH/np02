'use strict';
angular.module('vdcontrol', []).component('vdcontrol', {
    templateUrl: 'vdcontrol/vdcontrol.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function vdcontrolController($routeParams, $scope, $window, $http, $interval) {
        this.pageTitle = "NP02 VD HV CRP Control";
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
            $window.location.href = "#!/vdcontrol/" + fundays;
        };

        // this.elements = [  //hat hat nshats a WTF??? inchi a mi hat el nested?
        //     [[47363557163291,'NP02_DCS_01:Heinz_I.']],
        //     [[47363691381019,'NP02_DCS_01:Heinz_V_Raw.']]];

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

            $http.get("php-db-conn/cachedValsVd.conn.php?elemId=vd").then(function (resultArr) {
                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }
                    // self.NP_VD_Wiener_NP04-PS-CE-02_Status_On = rArr[32];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_Status_On = rArr[33];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_MeasurementTerminalVoltage = rArr[34];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_MeasurementCurrent = rArr[35];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_MeasurementTemperature = rArr[36];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_Status_On = rArr[37];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_MeasurementTerminalVoltage = rArr[38];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_MeasurementCurrent = rArr[39];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_MeasurementTemperature = rArr[40];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_Status_On = rArr[41];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_MeasurementTerminalVoltage = rArr[42];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_MeasurementCurrent = rArr[43];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_MeasurementTemperature = rArr[44];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_Status_On = rArr[45];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_MeasurementTerminalVoltage = rArr[46];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_MeasurementCurrent = rArr[47];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_MeasurementTemperature = rArr[48];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_Status_On = rArr[49];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_MeasurementTerminalVoltage = rArr[50];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_MeasurementCurrent = rArr[51];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_MeasurementTemperature = rArr[52];
                    // self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_Status_On = rArr[53];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_MeasurementTerminalVoltage = rArr[54];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_MeasurementCurrent = rArr[55];
                    self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_MeasurementTemperature = rArr[56];

                    if (rArr[32] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Status_On = "Off";
                    };

                    if (rArr[33] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel00_Status_On = "Off";
                    };

                    if (rArr[37] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel02_Status_On = "Off";
                    };                    
                    
                    if (rArr[41] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board1_Channel03_Status_On = "Off";
                    };

                    if (rArr[45] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel00_Status_On = "Off";
                    };

                    if (rArr[49] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel02_Status_On = "Off";
                    };

                    if (rArr[53] == 1) {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_Status_On = "On";
                    }
                    else {
                        self.NP_VD_Wiener_NP04_PS_CE_02_Board2_Channel03_Status_On = "Off";
                    };

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
]});