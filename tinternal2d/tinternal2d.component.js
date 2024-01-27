'use strict';
angular.module('tinternal2d', []).component('tinternal2d', {
    templateUrl: 'tinternal2d/tinternal2d.template.html',
    controller: function tinternal2dController($http, $interval) {
        this.pageTitle = "NP02 T-Internal";
        this.natalie = 1;
        var self = this;

        this.reload = function () {

            var element = [];

            element.push("AnalogInput-00007");
            element.push("AnalogInput-00008");
            element.push("AnalogInput-00009");

            element.push('NP02_DCS_01_TE0085_');
            element.push('NP02_DCS_01_TE0086_');
            element.push('NP02_DCS_01_TE0087_');
            element.push('NP02_DCS_01_TE0088_');
            element.push('NP02_DCS_01_TE0089_');
            element.push('NP02_DCS_01_TE0090_');
            element.push('NP02_DCS_01_TE0091_');
            element.push('NP02_DCS_01_TE0092_');
            element.push('NP02_DCS_01_TE0093_');
            element.push('NP02_DCS_01_TE0094_');
            element.push('NP02_DCS_01_TE0095_');
            element.push('NP02_DCS_01_TE0096_');

            element.push('NP02_DCS_01_TE0103_');
            element.push('NP02_DCS_01_TE0104_');
            element.push('NP02_DCS_01_TE0105_');
            element.push('NP02_DCS_01_TE0106_');
            element.push('NP02_DCS_01_TE0107_');
            element.push('NP02_DCS_01_TE0108_');
            element.push('NP02_DCS_01_TE0109_');
            element.push('NP02_DCS_01_TE0110_');
            element.push('NP02_DCS_01_TE0111_');
            element.push('NP02_DCS_01_TE0112_');
            element.push('NP02_DCS_01_TE0113_');
            element.push('NP02_DCS_01_TE0114_');

            var elementsend = JSON.stringify(element);

            $http.get("php-db-conn/cachedVals.conn.php?elemId=" + elementsend).then(function (resultArr) {

                var rArr = [];
                var resjson = angular.toJson(resultArr.data);
                var res = JSON.parse(resjson);
                for (var i = 0; i < res.length; i++) {
                    rArr.push(JSON.parse(res[i]));
                }

                self.NP02_MHT0100AI = rArr[0].records.Mnish;
                self.NP02_TT0100AI = rArr[1].records.Mnish;
                self.NP02_PT0106AI = rArr[2].records.Mnish;

                self.NP02_DCS_01_TE0085_ = rArr[3].records.Mnish;
                self.NP02_DCS_01_TE0086_ = rArr[4].records.Mnish;
                self.NP02_DCS_01_TE0087_ = rArr[5].records.Mnish;
                self.NP02_DCS_01_TE0088_ = rArr[6].records.Mnish;
                self.NP02_DCS_01_TE0089_ = rArr[7].records.Mnish;
                self.NP02_DCS_01_TE0090_ = rArr[8].records.Mnish;
                self.NP02_DCS_01_TE0091_ = rArr[9].records.Mnish;
                self.NP02_DCS_01_TE0092_ = rArr[10].records.Mnish;
                self.NP02_DCS_01_TE0093_ = rArr[11].records.Mnish;
                self.NP02_DCS_01_TE0094_ = rArr[12].records.Mnish;
                self.NP02_DCS_01_TE0095_ = rArr[13].records.Mnish;
                self.NP02_DCS_01_TE0096_ = rArr[14].records.Mnish;

                self.NP02_DCS_01_TE0103_ = rArr[15].records.Mnish;
                self.NP02_DCS_01_TE0104_ = rArr[16].records.Mnish;
                self.NP02_DCS_01_TE0105_ = rArr[17].records.Mnish;
                self.NP02_DCS_01_TE0106_ = rArr[18].records.Mnish;
                self.NP02_DCS_01_TE0107_ = rArr[19].records.Mnish;
                self.NP02_DCS_01_TE0108_ = rArr[20].records.Mnish;
                self.NP02_DCS_01_TE0109_ = rArr[21].records.Mnish;
                self.NP02_DCS_01_TE0110_ = rArr[22].records.Mnish;
                self.NP02_DCS_01_TE0111_ = rArr[23].records.Mnish;
                self.NP02_DCS_01_TE0112_ = rArr[24].records.Mnish;
                self.NP02_DCS_01_TE0113_ = rArr[25].records.Mnish;
                self.NP02_DCS_01_TE0114_ = rArr[26].records.Mnish;

                console.log("interval occured");
            self.timestamp = rArr[rArr.length-1];
});

        };

        this.reload();
        $interval(this.reload, 30000);
    }
});