'use strict';
angular.module('tinternal', []).component('tinternal', {
    templateUrl: 'tinternal/tinternal.template.html',
    controller: function tinternalController($scope, $http, $window, $interval) {
        this.pageTitle = "NP02 T-Internal";
        this.natalie = 1;
        var self = this;

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
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=tinternal")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP02_DCS_01_TE[8] = res["47898968480539"]?res["47898968480539"][0]:"N/A";
                    self.NP02_DCS_01_TE[9] = res["47899002034971"]?res["47899002034971"][0]:"N/A";
                    self.NP02_DCS_01_TE[10] = res["47899018812187"]?res["47899018812187"][0]:"N/A";
                    self.NP02_DCS_01_TE[11] = res["47899052366619"]?res["47899052366619"][0]:"N/A";
                    self.NP02_DCS_01_TE[0] = res["47897961847579"]?res["47897961847579"][0]:"N/A";
                    self.NP02_DCS_01_TE[1] = res["47897978624795"]?res["47897978624795"][0]:"N/A";
                    self.NP02_DCS_01_TE[2] = res["47897995402011"]?res["47897995402011"][0]:"N/A";
                    self.NP02_DCS_01_TE[3] = res["47898012179227"]?res["47898012179227"][0]:"N/A";
                    self.NP02_DCS_01_TE[12] = res["47899069143835"]?res["47899069143835"][0]:"N/A";
                    self.NP02_DCS_01_TE[13] = res["47899102698267"]?res["47899102698267"][0]:"N/A";
                    self.NP02_DCS_01_TE[14] = res["47899119475483"]?res["47899119475483"][0]:"N/A";
                    self.NP02_DCS_01_TE[15] = res["47899153029915"]?res["47899153029915"][0]:"N/A";
                    self.NP02_DCS_01_TE[4] = res["47898364500763"]?res["47898364500763"][0]:"N/A";
                    self.NP02_DCS_01_TE[5] = res["47898448386843"]?res["47898448386843"][0]:"N/A";
                    self.NP02_DCS_01_TE[6] = res["47898582604571"]?res["47898582604571"][0]:"N/A";
                    self.NP02_DCS_01_TE[7] = res["47898649713435"]?res["47898649713435"][0]:"N/A";
                    self.NP02_DCS_01_TE[45] = res["47899975113499"]?res["47899975113499"][0]:"N/A";
                    self.NP02_DCS_01_TE[46] = res["47899991890715"]?res["47899991890715"][0]:"N/A";
                    self.NP02_DCS_01_TE[47] = res["47900008667931"]?res["47900008667931"][0]:"N/A";
                    self.NP02_DCS_01_TE[48] = res["47900025445147"]?res["47900025445147"][0]:"N/A";
                    self.NP02_DCS_01_TE[49] = res["47900042222363"]?res["47900042222363"][0]:"N/A";
                    self.NP02_DCS_01_TE[50] = res["47900058999579"]?res["47900058999579"][0]:"N/A";
                    self.NP02_DCS_01_TE[51] = res["47900075776795"]?res["47900075776795"][0]:"N/A";
                    self.NP02_DCS_01_TE[52] = res["47900092554011"]?res["47900092554011"][0]:"N/A";
                    self.NP02_DCS_01_TE[53] = res["47900109331227"]?res["47900109331227"][0]:"N/A";
                    self.NP02_DCS_01_TE[70] = res["47900444875547"]?res["47900444875547"][0]:"N/A";
                    self.NP02_DCS_01_TE[71] = res["47900461652763"]?res["47900461652763"][0]:"N/A";
                    self.NP02_DCS_01_TE[72] = res["47900478429979"]?res["47900478429979"][0]:"N/A";
                    self.NP02_DCS_01_TE[73] = res["47900495207195"]?res["47900495207195"][0]:"N/A";
                    self.NP02_DCS_01_TE[66] = res["47900377766683"]?res["47900377766683"][0]:"N/A";
                    self.NP02_DCS_01_TE[67] = res["47900394543899"]?res["47900394543899"][0]:"N/A";
                    self.NP02_DCS_01_TE[68] = res["47900411321115"]?res["47900411321115"][0]:"N/A";
                    self.NP02_DCS_01_TE[69] = res["47900428098331"]?res["47900428098331"][0]:"N/A";
                    self.NP02_DCS_01_TE[62] = res["47900310657819"]?res["47900310657819"][0]:"N/A";
                    self.NP02_DCS_01_TE[63] = res["47900327435035"]?res["47900327435035"][0]:"N/A";
                    self.NP02_DCS_01_TE[64] = res["47900344212251"]?res["47900344212251"][0]:"N/A";
                    self.NP02_DCS_01_TE[65] = res["47900360989467"]?res["47900360989467"][0]:"N/A";
                    // -------------------------------------------------
                    self.NP02_DCS_01_TE[58] = res["47900243548955"] ? res["47900243548955"][0] : "N/A";
                    self.NP02_DCS_01_TE[59] = res["47900260326171"] ? res["47900260326171"][0] : "N/A";
                    self.NP02_DCS_01_TE[60] = res["47900277103387"] ? res["47900277103387"][0] : "N/A";
                    self.NP02_DCS_01_TE[61] = res["47900293880603"] ? res["47900293880603"][0] : "N/A";
                    self.NP02_DCS_01_TE[54] = res["47900176440091"] ? res["47900176440091"][0] : "N/A";
                    self.NP02_DCS_01_TE[55] = res["47900193217307"] ? res["47900193217307"][0] : "N/A";
                    self.NP02_DCS_01_TE[56] = res["47900209994523"] ? res["47900209994523"][0] : "N/A";
                    self.NP02_DCS_01_TE[57] = res["47900226771739"] ? res["47900226771739"][0] : "N/A";
                    self.NP02_DCS_01_TE[16] = res["47899169807131"] ? res["47899169807131"][0] : "N/A";
                    self.NP02_DCS_01_TE[17] = res["47899186584347"] ? res["47899186584347"][0] : "N/A";
                    self.NP02_DCS_01_TE[18] = res["47899203361563"] ? res["47899203361563"][0] : "N/A";
                    self.NP02_DCS_01_TE[19] = res["47899220138779"] ? res["47899220138779"][0] : "N/A";
                    self.NP02_DCS_01_TE[20] = res["47899236915995"] ? res["47899236915995"][0] : "N/A";

                    // -------------------------------------------------
                    self.NP02_DCS_01_TE[21] = res["47899253693211"] ? res["47899253693211"][0] : "N/A";
                    self.NP02_DCS_01_TE[22] = res["47899270470427"] ? res["47899270470427"][0] : "N/A";
                    self.NP02_DCS_01_TE[23] = res["47899287247643"] ? res["47899287247643"][0] : "N/A";
                    self.NP02_DCS_01_TE[24] = res["47899304024859"] ? res["47899304024859"][0] : "N/A";
                    self.NP02_DCS_01_TE[41] = res["47899639569179"] ? res["47899639569179"][0] : "N/A";
                    self.NP02_DCS_01_TE[42] = res["47899656346395"] ? res["47899656346395"][0] : "N/A";
                    self.NP02_DCS_01_TE[43] = res["47899673123611"] ? res["47899673123611"][0] : "N/A";
                    self.NP02_DCS_01_TE[44] = res["47899689900827"] ? res["47899689900827"][0] : "N/A";
                    self.NP02_DCS_01_TE[37] = res["47899572460315"] ? res["47899572460315"][0] : "N/A";
                    self.NP02_DCS_01_TE[38] = res["47899589237531"] ? res["47899589237531"][0] : "N/A";
                    self.NP02_DCS_01_TE[39] = res["47899606014747"] ? res["47899606014747"][0] : "N/A";
                    self.NP02_DCS_01_TE[40] = res["47899622791963"] ? res["47899622791963"][0] : "N/A";
                    self.NP02_DCS_01_TE[33] = res["47899505351451"] ? res["47899505351451"][0] : "N/A";
                    self.NP02_DCS_01_TE[34] = res["47899522128667"] ? res["47899522128667"][0] : "N/A";

                    // --------------------------------------------------------
                    self.NP02_DCS_01_TE[35] = res["47899538905883"] ? res["47899538905883"][0] : "N/A";
                    self.NP02_DCS_01_TE[36] = res["47899555683099"] ? res["47899555683099"][0] : "N/A";
                    self.NP02_DCS_01_TE[29] = res["47899438242587"] ? res["47899438242587"][0] : "N/A";
                    self.NP02_DCS_01_TE[30] = res["47899455019803"] ? res["47899455019803"][0] : "N/A";
                    self.NP02_DCS_01_TE[31] = res["47899471797019"] ? res["47899471797019"][0] : "N/A";
                    self.NP02_DCS_01_TE[32] = res["47899488574235"] ? res["47899488574235"][0] : "N/A";
                    self.NP02_DCS_01_TE[25] = res["47899371133723"] ? res["47899371133723"][0] : "N/A";
                    self.NP02_DCS_01_TE[26] = res["47899387910939"] ? res["47899387910939"][0] : "N/A";
                    self.NP02_DCS_01_TE[27] = res["47899404688155"] ? res["47899404688155"][0] : "N/A";
                    self.NP02_DCS_01_TE[28] = res["47899421465371"] ? res["47899421465371"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_13 = res["47900579093275"] ? res["47900579093275"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_14 = res["47900595870491"] ? res["47900595870491"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_15 = res["47900612647707"] ? res["47900612647707"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_16 = res["47900629424923"] ? res["47900629424923"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_17 = res["47900646202139"] ? res["47900646202139"][0] : "N/A";
                    self.NP02_DCS_01_AIR_08_18 = res["47900662979355"] ? res["47900662979355"][0] : "N/A";
                    console.log("interval occured");
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