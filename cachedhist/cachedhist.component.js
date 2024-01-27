'use strict';
angular.module('cachedhist', []).component('cachedhist', {
    templateUrl: 'cachedhist/cachedhist.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function cachedhistController($routeParams, $scope, $window, $http, $interval) {
            this.elemId = $routeParams.elemId;
            this.pageTitle = this.elemId;
            this.natalie = 1;
            this.width = 90;
            this.respdata = [];
            var self = this;

            this.dayChanger = function (funcdays) {
                $window.location.href = "#!/cachedhist/" + this.elemId;
            };
            this.reload = function () {
                $interval.cancel;
                //$window.location.reload();
                //};

                $http.get("php-db-conn/cachehist.conn.php?elemId=" + self.elemId).then(function onSuccess(response) {
                    //if (response != undefined && typeof response == "object") {
                    var title = self.elemId;
                    console.log("interval occured");

                    console.log(response.data);

                    //self.PlotData.push(self.values);
                    //self.PlotCat.push(self.labels);

                    if (self.elemId === "NP02_DCS_01_Heinz_I" || self.elemId === "NP02_DCS_01_Heinz_V_Cathode." || self.elemId === "NP02_DCS_01_Heinz_V_Raw") {
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
                                type: 'datetime'
                            },

                            series: [{
                                data: response.data,
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

                            rangeSelector: {
                                allButtonsEnabled: true,
                                buttons: [{
                                    count: 1,
                                    type: 'hour',
                                    text: '1 hour'
                                }, {
                                    count: 6,
                                    type: 'hour',
                                    text: '6 hours'
                                }, {
                                    count: 12,
                                    type: 'hour',
                                    text: '12 hours'
                                }, {
                                    count: 1,
                                    type: 'day',
                                    text: '1 day'
                                }, {
                                    count: 3,
                                    type: 'day',
                                    text: '3 days'
                                }, {
                                    count: 7,
                                    type: 'day',
                                    text: '7 days'
                                }],
                                buttonTheme: {
                                    width: 60
                                },
                                selected: 3
                            },

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

                            tooltip: {
                                valueDecimals: 5
                            },

                            xAxis: {
                                type: 'datetime'
                            },

                            series: [{
                                data: response.data,
                                lineWidth: 1.0,
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
            };

            this.promise;

            this.reload();

            $scope.start = function() {
                $scope.stop();
                if (self.days < 2) {
                    self.promise = $interval(self.reload, 60000);
                } else {
                    self.promise = $interval(self.reload, 300000);
                }
            };

            $scope.stop = function() {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on('$destroy', function() {
                $scope.stop();
            });
        }
    ]
});