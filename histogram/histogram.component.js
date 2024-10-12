"use strict";
angular.module("histogram", []).component("histogram", {
  templateUrl: "histogram/histogram.template.html",
  controller: [
    "$routeParams",
    "$scope",
    "$window",
    "$http",
    "$interval",
    function histogramController(
      $routeParams,
      $scope,
      $window,
      $http,
      $interval
    )  {
      const self = this;
      this.natalie = 1;
      this.pageTitle = "Histogram";
      this.elemId = $routeParams.elemId;
      this.daysAndHours = '0-6';
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
            // showTable: true,
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
      this.range = function (event, start, end) {
        event.preventDefault();
        if (!start || !end) {
          console.log("no start or end");
          return false;
        }
        if(start>=end){
          console.log("incorrect range");
          return false;
        }
        const startDate = new Date(start);
        const endDate = new Date(end);
        const startDateStr = startDate.toISOString().slice(0, 19);
        const endDateStr = endDate.toISOString().slice(0, 19);
        $interval.cancel;
        $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
            .then(function onSuccess(response) {
              
              const chartData = Object.entries(response.data).map(([key, value]) => {
                return [parseInt(key), value];
              });
              self.drawChart("container", chartData);
            });
        return false;
      };
      this.reload = function () {
        $interval.cancel;
        const [startDateStr, endDateStr] = self.daysAndHoursToUTCDateRange(self.daysAndHours);
        $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
            .then(function onSuccess(response) {
              const chartData = Object.entries(response.data).map(([key, value]) => {
                return [parseInt(key), value];
              });
              self.drawChart("container", chartData);
            });
      };
      this.dayChanger = function (daysAndHours) {
        self.daysAndHours = daysAndHours;
        self.reload();
      };
      this.setDays = function (event) {
        event.preventDefault();
        if (!this.dd || this.dd < 1) return false;
        this.dd = Math.round(this.dd);
        self.daysAndHours = self.dd + '-' + '0';
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
