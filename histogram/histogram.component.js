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
      this.sensorName = "";
      this.daysAndHours = '0-6';
      self.activeDayBtn = 1;
      self.average = false;
      $scope.buttonIsActive = [false, false, false, false, false, false, false];
      $scope.buttonIsActive[self.activeDayBtn] = true;
      $scope.buttonIsLodaing = [false, false, false, false, false, false, false];
      $scope.setDaysBtnLoading = false;
      $scope.rangeBtnLoading = false;
      $scope.requestsList = new Array(9).fill(false);
      $scope.requestsList[1] = true;
    // -------------------------------------------------------
      // $http.get('config/lems.conf') 
    
      //   .then(function(response) {
      //     console.log(response.data);
      //     return response.data; 
      //   }, function(error) {
      //     console.error('Error loading config file', error);
      //   });
    // -------------------------------------------------------
      $scope.average_selected = false;
     
      this.daysAndHoursToBtnNum = function (daysAndHours){
        switch(daysAndHours){
          case '0-1': 
            return 0;
          case '0-6':
            return 1;
          case '0-12':
           return 2;
          case '1-0':
            return 3;
          case '3-0':
            return 4;
          case '7-0':
            return 5;
          case '10-0':
            return 6;
        }
      }
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
      this.drawChart = function (containerId, chartData, charttitle, chartColor = "red") {
        Highcharts.chart(containerId, {
          chart: {
            zoomType: "xy",
          },
          title: {
            text: charttitle,
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
              color: chartColor,
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
        $scope.rangeBtnLoading = true;
        if($scope.average_selected){
          $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram_average/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
          .then(function onSuccess(response) {
            // console.log(response.data);
            const chartData = Object.entries(response.data).map(([key, value]) => {
              return [parseInt(key), value];
            });
            self.drawChart("container", chartData, "Average", "blue");
            $scope.rangeBtnLoading = false;
            $scope.requestsList.fill(false);
            $scope.requestsList[8] = true;

          });
        } else {
          
          $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
          .then(function onSuccess(response) {
            // console.log(response.data);
            const chartData = Object.entries(response.data).map(([key, value]) => {
              return [parseInt(key), value];
            });
            self.drawChart("container", chartData);
            $scope.rangeBtnLoading = false;
            $scope.requestsList.fill(false);
            $scope.requestsList[8] = true;

          });
        }
    
      return false;
      };
      this.reload = function (setDaysBtnPressed = false) {
        $interval.cancel;
        // console.log($scope.setDaysBtnLoading);
       
        const [startDateStr, endDateStr] = self.daysAndHoursToUTCDateRange(self.daysAndHours);
        if($scope.average_selected) {
          $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram_average/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
          .then(function onSuccess(response) {
            // console.log(response.data);
            const chartData = Object.entries(response.data).map(([key, value]) => {
              return [parseInt(key), value];
            });
            if(!self.charttitle){
              self.charttitle = "";
            }
            self.drawChart("container", chartData, self.charttitle, "blue");
            const loadingBtnNum = self.daysAndHoursToBtnNum(self.daysAndHours);
            $scope.buttonIsLodaing[loadingBtnNum] = false;
           
            if(setDaysBtnPressed){
              $scope.requestsList.fill(false);
              $scope.requestsList[7] = true;
              $scope.setDaysBtnLoading = false;
            } else {
              $scope.requestsList.fill(false);
              $scope.requestsList[self.daysAndHoursToBtnNum(self.daysAndHours)] = true;
              // console.log($scope.requestsList); 
            }
    
          });
        } else {
          $http.get("https://np02-data-api-slow-control.app.cern.ch/np02histogram/" + self.elemId + "/" + startDateStr + "/" + endDateStr)
          .then(function onSuccess(response) {
            // console.log(response.data);
            const chartData = Object.entries(response.data).map(([key, value]) => {
              return [parseInt(key), value];
            });
            if(!self.charttitle){
              self.charttitle = "";
            }
            self.drawChart("container", chartData, self.charttitle);
            const loadingBtnNum = self.daysAndHoursToBtnNum(self.daysAndHours);
            $scope.buttonIsLodaing[loadingBtnNum] = false;
           
            if(setDaysBtnPressed){
              $scope.requestsList.fill(false);
              $scope.requestsList[7] = true;
              $scope.setDaysBtnLoading = false;
            } else {
              $scope.requestsList.fill(false);
              $scope.requestsList[self.daysAndHoursToBtnNum(self.daysAndHours)] = true;
              // console.log($scope.requestsList); 
            }
    
          });
        };
      
      };
      this.dayChanger = function (daysAndHours, btnNum) {
        
        self.loadingDayBtn = btnNum;
        $scope.buttonIsLodaing[self.loadingDayBtn] = true;
        self.activeDayBtn = btnNum;
        for (let i = 0; i < $scope.buttonIsActive.length; i++){
          if (i == self.activeDayBtn){
            $scope.buttonIsActive[i] = true;
            
          } else {
            $scope.buttonIsActive[i] = false;
           
          }
        }

        console.log(self.loadingDayBtn);
   
        
        self.daysAndHours = daysAndHours;
        self.reload();
      };
      this.setDays = function (event) {
        event.preventDefault();
        if (!self.dd || self.dd < 1) return false;
        self.dd = Math.round(self.dd);
        self.daysAndHours = self.dd + '-' + '0';
        $scope.setDaysBtnLoading = true;
        
        self.reload(true);
        
      };
      // this.promise;
      this.reload();
      // $scope.start = function () {
      //   $scope.stop();
      //   self.promise = $interval(self.reload, 300000);
      // };
      // $scope.stop = function () {
      //   $interval.cancel(self.promise);
      // };
      // $scope.start();
      // $scope.$on("$destroy", function () {
      //   $scope.stop();
      // });
    },
  ],
});
