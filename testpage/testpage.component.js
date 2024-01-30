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
            const defaultDaysAndHours = '0-6';
            this.utcToLocalDate = function (date) {
                date.setTime(date.getTime() - date.getTimezoneOffset() * 60000);
                return date;
            };
            this.localDateToUtc = function (date) {
                date.setTime(date.getTime() + date.getTimezoneOffset() * 60000);
                return date;
            };

            this.daysAndHoursToDateRange = function (daysAndHours) {
                const [days, hours] = [parseInt(daysAndHours.split('-')[0]), parseInt(daysAndHours.split('-')[1])];
                const dateEnd = self.utcToLocalDate(new Date());
                const dateStart = new Date();
                dateStart.setTime(dateEnd.getTime() - days * 86400000 - hours * 3600000);
                const dateEndStr = dateEnd.toISOString().slice(0, 19);
                const dateStartStr = dateStart.toISOString().slice(0, 19);
                return dateStartStr + '__' + dateEndStr;
            }
            this.dayChanger = function (daysAndHours) {
                const dateRangeStr = self.daysAndHoursToDateRange(daysAndHours);
                $window.location.href = "#!/testpage/" + self.elemId + "/" + dateRangeStr;
            };
            if (!$routeParams.dateRange) {
                self.dayChanger(defaultDaysAndHours);
            }
            this.dateRange = $routeParams.dateRange;

            this.toggleDataTable = function () {
                const highchartsDataTable = document.getElementsByClassName(
                    "highcharts-data-table"
                )[0];
                highchartsDataTable.classList.toggle("hidden");
            };

            this.range = function (start, end) {
                const startDate = new Date(start);
                const endDate = new Date(end);
                const dateRangeStr = startDate.toISOString().slice(0, 19) + "_" + endDate.toISOString().slice(0, 19);
                const d = new Date();
                d.setTime(d.getTime() - d.getTimezoneOffset() * 60000);
                console.log(d.toISOString());
                $window.location.href = "#!/testpage/" + self.elemId + "/" + dateRangeStr;
                return false;
            };

            function drawChart(containerId, chartData) {
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

            this.reload = function () {
                $interval.cancel;

                const [dateStartStr, dateEndStr] = [self.dateRange.split('__')[0], self.dateRange.split('__')[1]];
                $http.get("php-db-conn/np02histogram.php?elemid=" + self.elemId + "&datestart=" + dateStartStr + "&dateend=" + dateEndStr)
                    .then(function onSuccess(response) {
                        const highchartsData = Object.entries(response.data).map(([key, value]) => {
                            return [parseInt(key), value];
                        });
                        // console.log(response.data);
                        // ----------------------------
                        drawChart("container", highchartsData);
                        // ------------------------------------
                        $routeParams.timeRange = dateInterval;
                        // console.log($routeParams);
                    });
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
