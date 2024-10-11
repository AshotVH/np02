'use strict';
angular.module('bellegarde', []).component('bellegarde', {
    templateUrl: 'bellegarde/bellegarde.template.html',
    controller: function bellegardeController($scope, $http, $q, $interval) {
        this.pageTitle = "NP02 Bellegarde side";
        this.natalie = 1;
        const self = this;

        var element = [];

        element.push('MC_BSS_HOR_4B');
        element.push('MC_BSS_HOR_3B');
        element.push('MC_BSS_HOR_2B');
        element.push('4M_BS_VER_05');
        element.push('4M_BS_VER_04');
        element.push('4M_BS_VER_03');
        element.push('3B_BS_HOR_01');
        element.push('3B_BS_HOR_02');
        element.push('3B_BS_HOR_03');
        element.push('4B_BS_VER_02');
        element.push('2B_BS_HOR_01');
        element.push('4M_BS_VER_01');
        element.push('MC_BJS_02');
        element.push('MC_BJS_03_A');
        element.push('MC_BJS_03_B');

        var elementsend = JSON.stringify(element);

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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=bellegarde")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.MC_BJS_02 = res["47900914615323"][0];
                    self.MC_BJS_03_A = res["47900931392539"][0];
                    self.MC_BJS_03_B = res["47900948169755"][0];
                    self.MC_BSS_HOR_4B = res["47901417931803"][0];
                    self.MC_BSS_HOR_3B = res["47901434709019"][0];
                    self.MC_BSS_HOR_2B = res["47901451486235"][0];
                    self.M4_BS_VER_05 = res["47901468263451"][0];
                    self.M4_BS_VER_04 = res["47901485040667"][0];
                    self.M4_BS_VER_03 = res["47901501817883"][0];
                    self.B3_BS_HOR_01 = res["47901518595099"][0];
                    self.B3_BS_HOR_02 = res["47901535372315"][0];
                    self.B3_BS_HOR_03 = res["47901552149531"][0];
                    self.B4_BS_VER_02 = res["47901568926747"][0];
                    self.B2_BS_HOR_01 = res["47901585703963"][0];
                    self.M4_BS_VER_01 = res["47901602481179"][0];
                });
        };

        this.promise;

        this.reload();

        $scope.start = function () {
            $scope.stop();

            self.promise = $interval(self.reload, 150000);
        };

        $scope.stop = function () {
            $interval.cancel(self.promise);
        };
        $scope.start();

        $scope.$on('$destroy', function () {
            $scope.stop();
        });
    }
});