'use strict';
angular.module('groundplanes', []).component('groundplanes', {
    templateUrl: 'groundplanes/groundplanes.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function groundplanesController($routeParams, $scope, $window, $http, $interval) {
            this.pageTitle = "NP02 High Voltage";
            this.natalie = 1;
            const self = this;

            if ($routeParams.days != null) {
                console.log(this.days);
                this.days = $routeParams.days;
            } else {
                this.days = 0.33;
            }

            var fundays = this.days;

            this.dayChanger = function (fundays) {
                $window.location.href = "#!/groundplanes/" + fundays;
            };

            this.elements = [
                [[47363557163291, 'NP02_DCS_01:Heinz_I.']],
                [[47363691381019, 'NP02_DCS_01:Heinz_V_Raw.']]];

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

                $http
                    .get("php-db-conn/np02cachedvals.php?elemName=groundplanes")
                    .then(function (result) {
                        const res = result.data;
                        console.log(res);
                        self.NP02_DCS_01_Heinz_I = res["47363557163291"][0];
                        self.NP02_DCS_01_Heinz_Limit = res["47363590717723"][0];
                        self.NP02_DCS_01_Heinz_V_Raw = res["47363691381019"][0];
                        // self.NP02_DCS_01_Heinz_OnOff_Sts ? "On" : "Off" = res["47363607494939"][0];
                        self.NP02_DCS_01_FFS_I = res["47955658727963"][0];
                        self.NP02_DCS_01_FFS_V = res["47955658729243"][0];
                        self.NP02_DCS_01_GRID1_I = res["47955675505179"][0];
                        self.NP02_DCS_01_GRID1_V = res["47955675506459"][0];
                        self.NP02_DCS_01_GRID2_I = res["47955692282395"][0];
                        self.NP02_DCS_01_GRID2_V = res["47955692283675"][0];
                        self.NP02_DCS_01_GRID3_I = res["47955742614043"][0];
                        self.NP02_DCS_01_GRID3_V = res["47955742615323"][0];
                        self.NP02_DCS_01_GRID4_I = res["47955725836827"][0];
                        self.NP02_DCS_01_GRID4_V = res["47955725838107"][0];
                        // self.CRP1_top = [];
                        // self.CRP1_bottom = [];
                        // self.CRP2_top = [];
                        // self.CRP2_bottom = [];
                        // self.CRP_LEMS = [];
                        // self.NP02_DCS_01_Heinz_I = rArr[0];
                        // self.NP02_DCS_01_Heinz_Limit = rArr[1];
                        // self.NP02_DCS_01_Heinz_OnOff_Sts = rArr[2];
                        // self.NP02_DCS_01_Heinz_V_Raw = rArr[3];
                        // self.CRP1_top.push(rArr[52]);
                        // self.CRP1_top.push(rArr[53]);
                        // self.CRP1_top.push(rArr[68]);
                        // self.CRP1_top.push(rArr[71]);
                        // self.CRP1_top.push(rArr[84]);
                        // self.CRP1_top.push(rArr[85]);
                        // self.CRP1_top_max = -1;
                        // self.CRP1_bottom_max = -1;
                        // self.CRP2_top_max = -1;
                        // self.CRP2_bottom_max = -1;
                        // for (i = 0; i < self.CRP1_top.length; i++) {
                        //     if (self.CRP1_top[i] > self.CRP1_top_max) {
                        //         self.CRP1_top_max = self.CRP1_top[i];
                        //     }
                        // }
                        // for (i = 56; i < 68; i++) {
                        //     self.CRP1_bottom.push(rArr[i]);
                        // }
                        // for (i = 72; i < 84; i++) {
                        //     self.CRP1_bottom.push(rArr[i]);
                        // }
                        // for (i = 88; i < 100; i++) {
                        //     self.CRP1_bottom.push(rArr[i]);
                        // }
                        // for (i = 0; i < self.CRP1_bottom.length; i++) {
                        //     if (self.CRP1_bottom[i] > self.CRP1_bottom_max) {
                        //         self.CRP1_bottom_max = self.CRP1_bottom[i];
                        //     }
                        // }
                        // self.CRP2_top.push(rArr[4]);
                        // self.CRP2_top.push(rArr[5]);
                        // self.CRP2_top.push(rArr[20]);
                        // self.CRP2_top.push(rArr[21]);
                        // self.CRP2_top.push(rArr[36]);
                        // self.CRP2_top.push(rArr[37]);
                        // for (i = 0; i < self.CRP2_top.length; i++) {
                        //     if (self.CRP2_top[i] > self.CRP2_top_max) {
                        //         self.CRP2_top_max = self.CRP2_top[i];
                        //     }
                        // }
                        // for (i = 8; i < 20; i++) {
                        //     self.CRP2_bottom.push(rArr[i]);
                        // }
                        // for (i = 24; i < 36; i++) {
                        //     self.CRP2_bottom.push(rArr[i]);
                        // }
                        // for (i = 40; i < 52; i++) {
                        //     self.CRP2_bottom.push(rArr[i]);
                        // }
                        // for (i = 0; i < self.CRP2_bottom.length; i++) {
                        //     if (self.CRP2_bottom[i] > self.CRP2_bottom_max) {
                        //         self.CRP2_bottom_max = self.CRP2_bottom[i];
                        //     }
                        // }
                        //
                        // self.NP02_DCS_01_FFS_I = rArr[100];
                        // self.NP02_DCS_01_FFS_V = rArr[101];
                        // self.NP02_DCS_01_GRID4_I = rArr[106];
                        // self.NP02_DCS_01_GRID4_V = rArr[107];
                        // self.NP02_DCS_01_GRID1_I = rArr[102];
                        // self.NP02_DCS_01_GRID1_V = rArr[103];
                        // self.NP02_DCS_01_GRID2_I = rArr[104];
                        // self.NP02_DCS_01_GRID2_V = rArr[105];
                        // self.NP02_DCS_01_GRID3_I = rArr[108];
                        // self.NP02_DCS_01_GRID3_V = rArr[109];


                    });

                console.log("interval occured");

                function getData(chart, days) {
                    var counter = 0;
                    var arr = [];
                    console.log("days = " + days);

                    var len = self.elements[chart].length;
                    for (var j = 0; j < self.elements[chart].length; j++) {
                        var dt = [];
                        $http.get("php-db-conn/histogram.conn.php?elemId=" + self.elements[chart][j][0] + "&days=" + days).then(function onSuccess(response) {
                            dt.push(response.data.records);
                            counter += 1;
                            if (counter === len) {
                                createSeriesOptions(chart, dt);
                            }
                            return response.data.records;
                        }).catch(function onError(data) {
                            counter += 1;
                            dt.push(moment(moment()) + ",0");
                        });
                    }
                }


                function createSeriesOptions(chart, data) {
                    var series = [];
                    var counter = 0;
                    var nm = [];
                    for (var j = 0; j < self.elements[chart].length; j++) {
                        nm.push(self.elements[chart][j][1]);
                    }
                    angular.forEach(nm, function () {
                        series[counter] = {
                            name: nm[counter],
                            type: 'line',
                            data: data[counter],
                            lineWidth: 1.0
                        };
                        counter += 1;

                        if (counter === nm.length) {
                            createChart(series, 'container' + chart);
                            return series;
                        }
                    });
                };

                function createChart(seriesOptions, divID) {
                    var options = seriesOptions;
                    var ch = Highcharts.stockChart(divID, {

                        chart: {
                            zoomType: 'xy'
                        },

                        legend: {
                            enabled: true,
                            align: 'center',
                            verticalAlign: 'top',
                            itemStyle: {
                                fontSize: '0.5vw'
                            }
                        },

                        time: {
                            useUTC: false
                        },

                        scrollbar: {
                            enabled: false
                        },

                        navigator: {
                            enabled: false
                        },

                        rangeSelector: {
                            enabled: false
                        },

                        tooltip: {
                            valueDecimals: 5
                        },

                        xAxis: {
                            type: 'datetime',
                            ordinal: false
                        },

                        yAxis: {
                            useHTML: true,
                        },

                        series: options

                    });
                }

                for (var i = 0; i < self.elements.length; i++) {
                    getData(i, fundays);
                }
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