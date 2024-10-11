"use strict";
angular.module("coldbox", []).component("coldbox", {
    templateUrl: "coldbox/coldbox.template.html",
    controller: function coldboxController(
        $scope,
        $http,
        $interval,
        $timeout,
        $window
    ) {
        this.pageTitle = "NP02 coldbox";
        this.natalie = 1;
        const self = this;

        angular.element(document).ready(function () {
            $timeout(function () {
                if ($window.innerWidth >= 1024) {
                    return;
                }
                const line1 = new LeaderLine(
                    document.getElementById("CRP_temp_1"),
                    document.getElementsByClassName("crp_temp_1_on_image")[0],
                    {size: 2, path: "straight"}
                );
                const line2 = new LeaderLine(
                    document.getElementById("CRP_temp_2"),
                    document.getElementsByClassName("crp_temp_2_on_image")[0],
                    {size: 2, path: "straight"}
                );
                const line3 = new LeaderLine(
                    document.getElementById("CRP_temp_3"),
                    document.getElementsByClassName("crp_temp_3_on_image")[0],
                    {size: 2, path: "straight"}
                );
                const line4 = new LeaderLine(
                    document.getElementById("CRP_temp_4"),
                    document.getElementsByClassName("crp_temp_4_on_image")[0],
                    {size: 2, path: "straight"}
                );
                const line5 = new LeaderLine(
                    document.getElementById("level_meter"),
                    document.getElementsByClassName("level_meter_on_image")[0],
                    {size: 2, path: "straight"}
                );
                line1.position();
                line2.position();
                line3.position();
                line4.position();
                line5.position();
                angular.element($window).on("resize", function () {
                    if ($window.innerWidth >= 1024) {
                        line1.hide();
                        line2.hide();
                        line3.hide();
                        line4.hide();
                        line5.hide();
                    } else {
                        line1.show();
                        line2.show();
                        line3.show();
                        line4.show();
                        line5.show();
                    }
                });
            }, 100);
        });

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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=coldbox")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP_VD_HV_Vmon = res["48205186203935"][0];
                    self.NP_VD_HV_Imon = res["48205202981151"][0];
                    self.NP_VD_crpressure = res["48206494826783"][0];
                    self.NP_VD_SGFT = res["48206645821727"][0];
                    self.NP_VD_3T1001 = res["48202552181279"][0];
                    self.NP_VD_3T1002 = res["48202568958495"][0];
                    self.NP_VD_3T1003 = res["48202602512927"][0];
                    self.NP_VD_3T1004 = res["48202636067359"][0];
                    self.NP_VD_3T1001 = res["48202552181279"][0];
                    self.NP_VD_3T1002 = res["48202568958495"][0];
                    self.NP_VD_3T1003 = res["48202602512927"][0];
                    self.NP_VD_3T1004 = res["48202636067359"][0];
                    self.NP_VD_3T0012 = res["48202535404063"][0];
                    self.NP_VD_3T0011 = res["48202518626847"][0];
                    self.NP_VD_3T0010 = res["48202501849631"][0];
                    self.NP_VD_3T0009 = res["48202485072415"][0];
                    self.NP_VD_3T0008 = res["48202468295199"][0];
                    self.NP_VD_3T0007 = res["48201461662239"][0];
                    self.NP_VD_3T0006 = res["48201444885023"][0];
                    self.NP_VD_3T0005 = res["48201428107807"][0];
                    self.NP_VD_3T0004 = res["48201411330591"][0];
                    self.NP_VD_3T0003 = res["48201394553375"][0];
                    self.NP_VD_3T0002 = res["48201377776159"][0];
                    self.NP_VD_3T0001 = res["48201360998943"][0];

                    // self.NP_VD_HV_Vmon = rArr[0];
                    // self.NP_VD_HV_Imon = rArr[1];
                    // self.NP_VD_3T0012 = rArr[2];
                    // self.NP_VD_3T0011 = rArr[3];
                    // self.NP_VD_3T0010 = rArr[4];
                    // self.NP_VD_3T0009 = rArr[5];
                    // self.NP_VD_3T0008 = rArr[6];
                    // self.NP_VD_3T0007 = rArr[7];
                    // self.NP_VD_3T0006 = rArr[8];
                    // self.NP_VD_3T0005 = rArr[9];
                    // self.NP_VD_3T0004 = rArr[10];
                    // self.NP_VD_3T0003 = rArr[11];
                    // self.NP_VD_3T0002 = rArr[12];
                    // self.NP_VD_3T0001 = rArr[13];
                    // self.NP_VD_3T1001 = rArr[14];
                    // self.NP_VD_3T1002 = rArr[15];
                    // self.NP_VD_3T1003 = rArr[16];
                    // self.NP_VD_3T1004 = rArr[17];
                    // self.NP_VD_levelmeter = rArr[18];
                    // self.NP_VD_SGFT = rArr[19];
                    // self.NP_VD_crpressure = rArr[20];
                    // self.NP_VD_Board1_Channel00_MeasurementCurrent = rArr[4];
                    // self.NP_VD_Board1_Channel00_MeasurementTerminalVoltage = rArr[5];
                    // self.NP_VD_Board1_Channel00_Status_On = rArr[6];
                    // self.NP_VD_Board1_Channel02_MeasurementCurrent = rArr[7];
                    // self.NP_VD_Board1_Channel02_MeasurementTerminalVoltage = rArr[8];
                    // self.NP_VD_Board1_Channel02_Status_On = rArr[9];
                    // self.NP_VD_Board1_Channel03_MeasurementCurrent = rArr[10];
                    // self.NP_VD_Board1_Channel03_MeasurementTerminalVoltage = rArr[11];
                    // self.NP_VD_Board1_Channel03_Status_On = rArr[12];
                    // self.NP_VD_Board2_Channel00_MeasurementCurrent = rArr[13];
                    // self.NP_VD_Board2_Channel00_MeasurementTerminalVoltage = rArr[14];
                    // self.NP_VD_Board2_Channel00_Status_On = rArr[15];
                    // self.NP_VD_Board2_Channel02_MeasurementCurrent = rArr[16];
                    // self.NP_VD_Board2_Channel02_MeasurementTerminalVoltage = rArr[17];
                    // self.NP_VD_Board2_Channel02_Status_On = rArr[18];
                    // self.NP_VD_Board2_Channel03_MeasurementCurrent = rArr[19];
                    // self.NP_VD_Board2_Channel03_MeasurementTerminalVoltage = rArr[20];
                    // self.NP_VD_Board2_Channel03_Status_On = rArr[21];
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

        $scope.$on("$destroy", function () {
            $scope.stop();
        });
    },
});
