'use strict';
angular.module('histogramRange', []).component('histogramRange', {
    templateUrl: 'histogramRange/histogramRange.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function histogramRangeController($routeParams, $scope, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            this.s = $routeParams.start;
            console.log($routeParams);
            this.e = $routeParams.end;
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            this.respdata = [];
            var self = this;
            var fundays = this.days;
            var dd = 0;
            var start = this.s;
            var end = this.e;

            this.range = function (start, end) {
                $window.location.href = "#!/histogramRange/" + this.elemId + "/" + start + "/" + end;
            };

            this.reload = function () {
                $interval.cancel;
                //$window.location.reload();
                //};

                $http.get("php-db-conn/histogramRange.conn.php?elemId=" + self.elemId + "&start=" + start + "&end=" + end).then(function onSuccess(response) {
                    //if (response != undefined && typeof response == "object") {
                    var title = self.elemId;
                    console.log("interval occured");

                    console.log(response.data.records);

                    //self.PlotData.push(self.values);
                    //self.PlotCat.push(self.labels);

                    if (self.elemId === "47363557163291" || self.elemId === "47363691381019" || self.elemId === "47363607494939") {
                        Highcharts.chart('container', {

                            chart: {
                                zoomType: 'xy'
                            },

                            time: {
                                useUTC: false
                            },

                            title: {
                                text: self.elemId
                            },

                            tooltip: {
                                valueDecimals: 5
                            },

                            xAxis: {
                                type: 'datetime',
                                ordinal: false
                            },

                            series: [{
                                data: response.data.records,
                                type: 'line',
                                lineWidth: 1.0,
                                tooltip: {
                                    valueDecimals: 5
                                },
                                name: 'Values',
                                color: '#ff0000'
                            }]

                        });
                    } else {
                        Highcharts.stockChart('container', {

                            chart: {
                                zoomType: 'xy'
                            },

                            rangeSelector: false,

                            time: {
                                useUTC: false
                            },

                            title: {
                                text: self.elemId
                            },

                            scrollbar: {
                                enabled: false
                            },

                            navigator: {
                                enabled: false
                            },

                            xAxis: {
                                type: 'datetime',
                                ordinal: false
                            },

                            series: [{
                                type: 'line',
                                data: response.data.records,
                                lineWidth: 1.0,
                                tooltip: {
                                    valueDecimals: 5
                                },
                                name: 'Values',
                                color: '#ff0000'
                            }]

                        });
                    }

                    //self.respdata = response.data.records;
                    //for (var i = 0; i < self.respdata.length; i++) {
                    //self.respdata[i][0] = moment.unix(self.respdata[i][0]/1000).format('DD/MM/YYYY HH:mm:ss');
                    //}


                    //} else {
                    //self.dayChanger(3);
                    //}
                }).catch(function onError(data) {
                    console.log(data);
                });
            }

            // this.promise;

            this.reload();

            /*$scope.start = function() {
                $scope.stop();
                self.promise = $interval(self.reload, 300000);
            };

            $scope.stop = function() {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on('$destroy', function() {
                $scope.stop();
            });*/
        }
    ]
});