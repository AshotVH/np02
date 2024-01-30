"use strict";
angular.module("testpage", []).component("testpage", {
    templateUrl: "testpage/testpage.template.html",
    controller: [
        "$routeParams",
        "$scope",
        "$window",
        "$http",
        "$interval",
        function testpageController(
            $routeParams,
            $scope,
            $window,
            $http,
            $interval
        ) {
            const self = this;
            this.natalie = 1;
            this.pageTitle = "Histogram";
            this.elemId = $routeParams.elemId;
            this.daysAndHours = '0-6';
            this.dd = function (){
                console.log($scope.dd);
            };
            this.daysAndHoursToUTCDateRange = function (daysAndHours) {
                const [days, hours] = [parseInt(daysAndHours.split('-')[0]), parseInt(daysAndHours.split('-')[1])];
                const endDate = new Date();
                const startDate = new Date();
                startDate.setTime(endDate.getTime() - days * 86400000 - hours * 3600000);
                const endDateStr = endDate.toISOString().slice(0, 19);
                const startDateStr = startDate.toISOString().slice(0, 19);
                return [startDateStr, endDateStr];
            };
            this.toggleDataTable = function () {
                const highchartsDataTable = document.getElementsByClassName(
                    "highcharts-data-table"
                )[0];
                highchartsDataTable.classList.toggle("hidden");
            };


            this.drawChart = function (containerId, chartData) {
                Highcharts.chart(containerId, {
                    chart: {
                        zoomType: "xy",
                    },
                    title: {
                        text: ''
                    },
                    time: {
                        useUTC: false,
                    },
                    credits: {
                        enabled: false
                    },
                    boost: {
                        useGPUTranslations: true,
                    },
                    xAxis: {
                        type: "datetime",
                        ordinal: false,

                    },
                    yAxis: {
                        title: {
                            text: " "
                        }
                    },
                    legend: {
                        enabled: false
                    },
                    exporting: {
                        showTable: true,
                        csv: {
                            columnHeaderFormatter: function (item, key) {
                                if (!item || item instanceof Highcharts.Axis) {
                                    return "Timestamps";
                                } else {
                                    return item.name;
                                }
                            },
                        },
                    },
                    series: [
                        {
                            data: chartData,
                            type: "line",
                            lineWidth: 1.0,
                            tooltip: {
                                valueDecimals: 5,
                                xDateFormat: '%Y-%b-%e, %H:%M:%S'
                            },
                            name: "Values",
                            color: "#ff0000",
                        },
                    ],
                });
            }

            this.getData = function (startDateStr, endDateStr) {
                let chartData;
                $http.get("php-db-conn/np02histogram.php?elemid=" + self.elemId + "&startdate=" + startDateStr + "&enddate=" + endDateStr)
                    .then(function onSuccess(response) {
                        chartData = Object.entries(response.data).map(([key, value]) => {
                            return [parseInt(key), value];
                        });
                        // console.log(response.data);

                    });
                return chartData;
            };
            this.range = function (start, end) {
                const startDate = new Date(start);
                const endDate = new Date(end);
                const startDateStr = startDate.toISOString().slice(0, 19);
                const endDateStr = endDate.toISOString().slice(0, 19);
                console.log(startDateStr);
                console.log(endDateStr);
                $interval.cancel;
                self.drawChart("container", self.getData(startDateStr, endDateStr));
                return false;
            };

            this.reload = function () {
                $interval.cancel;
                const [startDateStr, endDateStr] = self.daysAndHoursToUTCDateRange(self.daysAndHours);
                console.log(startDateStr);
                console.log(endDateStr);
                const chartData = self.getData(startDateStr, endDateStr);
                self.drawChart("container", chartData);
            };
            this.dayChanger = function (daysAndHours) {
                self.daysAndHours = daysAndHours;
                self.reload();
            };


            this.promise;

            this.reload();

            $scope.start = function () {
                $scope.stop();
                self.promise = $interval(self.reload, 300000);
            };

            $scope.stop = function () {
                $interval.cancel(self.promise);
            };
            $scope.start();

            $scope.$on("$destroy", function () {
                $scope.stop();
            });
        },
    ],
});
