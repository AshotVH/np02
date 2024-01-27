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

            console.log($routeParams);
            console.log($routeParams.timeRange);
            this.elemId = $routeParams.elemId;
            // if (!$routeParams.timeRange){
            //     $routeParams.timeRange = "booo";
            //
            // }
            this.timeRange = $routeParams.timeRange;
            this.toggleDataTable = function () {
                const highchartsDataTable = document.getElementsByClassName(
                    "highcharts-data-table"
                )[0];
                highchartsDataTable.classList.toggle("hidden");
            };
            this.dayChanger = function (timeRange) {
                $window.location.href = "#!/testpage/" + this.elemId + "/" + timeRange;

            };

            this.range = function (start, end) {
                console.log(start);
                console.log(end);

                const startDate = new Date(start);
                console.log(startDate.toISOString());
                const endDate = new Date(end);
                const dateRangeStr = startDate.toISOString().slice(0, 19) + "_" + endDate.toISOString().slice(0, 19);
                const d = new Date();
                console.log(d);
                console.log(d.toISOString());

                d.setTime(d.getTime() - d.getTimezoneOffset() * 60000);
                console.log("current time");
                console.log(d);
                console.log(d.toISOString());

                $window.location.href = "#!/testpage/" + this.elemId + "/" + dateRangeStr;

                // console.log(end);
                // const date = new Date(end);
                // console.log(date.toISOString());
                // const cd = new Date();
                // console.log(cd);
                // console.log(cd.toISOString());
                return false;

            };

            this.average = function () {
                $window.location.href =
                    "#!/histogramaverage/" + this.elemId + "/" + fundays;
            };
            function drawChart(containerId, chartData){
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
                if (!$routeParams.timeRange) {
                    $http.get("php-db-conn/np02histogram.php?elemid=" + self.elemId + "&rangetype=last&range=00:07")
                        .then(function onSuccess(response) {
                            const dateInterval = response.data.dateInterval;
                            delete response.data.dateInterval;
                            console.log(dateInterval);
                            const highchartsData = Object.entries(response.data).map(([key, value]) => {
                                return [parseInt(key), value];
                            });
                            console.log(response.data);
                            // ----------------------------
                            drawChart("container", highchartsData);
                            // ------------------------------------
                        });
                }
                else {


                }

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
