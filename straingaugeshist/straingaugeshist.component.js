"use strict";
angular.module("straingaugeshist", []).component("straingaugeshist", {
  templateUrl: "straingaugeshist/straingaugeshist.template.html",
  controller: [
    "$routeParams",
    "$scope",
    "$window",
    "$http",
    "$interval",
    function straingaugeshistController(
      $routeParams,
      $scope,
      $window,
      $http,
      $interval
    ) {
      this.pageTitle = this.elemId;
      this.natalie = 1;
      this.width = 90;
      var self = this;
      if ($routeParams.days != null) {
        console.log(self.day);
        self.day = $routeParams.days;
      } else {
        self.day = 0.33;
      }
      $scope.isChartsButtonsVisible = false;
      this.toggleChartButtons = function () {
        $scope.isChartsButtonsVisible = !$scope.isChartsButtonsVisible;
      };
      $scope.isGChartOpen = new Array(8).fill(true);
      $scope.isGChartOpen[0] = true;

      this.setChartWidth = function () {
        const val = document.getElementsByClassName("gauges_container");
        let numberOfChartOpen = 0;
        for (let i of $scope.isGChartOpen) {
          if (i == true) {
            numberOfChartOpen++;
          }
        }
        if (numberOfChartOpen == 1) {
          for (let item of val) {
            item.style.Width = "100%";
          }
        } else if (numberOfChartOpen == 2) {
          for (let item of val) {
            item.style.Width = "48%";
          }
        } else if (numberOfChartOpen == 3) {
          for (let item of val) {
            item.style.Width = "32%";
          }
        } else {
          for (let item of val) {
            item.style.Width = "24%";
          }
        }
      };
      this.showChart = function (chartNumber) {
        $scope.isGChartOpen[chartNumber] = !$scope.isGChartOpen[chartNumber];
        this.setChartWidth();
        $interval(function () {
          $window.dispatchEvent(new Event("resize"));
        }, 100);
      };
      this.dayChanger = function (fundays) {
        $window.location.href = "#!/straingaugeshist/" + fundays;
      };

      this.sideChanger = function (side) {
        switch (side) {
          case 0:
            $window.location = "#!/bellegarde";
            break;
          case 1:
            $window.location = "#!/jura";
            break;
          case 2:
            $window.location = "#!/lausanne";
            break;
          case 3:
            $window.location = "#!/saleve";
            break;
          default:
        }
      };

      this.elements = [
        [
          /*[47900797174811,"TC_JS_02_A"],*/
          // [47900830729243,"TC_JS_02_B"],
          // [47900847506459,"BC_JS_03_A"],
          // [47900864283675,"BC_JS_03_B"],
          // [47900881060891,"3B_JS_01"],
          [47901619258395, "TC_LS_02_A"],
          [47901636035611, "TC_LS_02_B"],
          [47901652812827, "BC_LS_03_A"],
          [47901669590043, "BC_LS_03_B"],
          [47901686367259, "3B_LS_01"],
        ],
        [
          [47901166273563, "1MEM_SS_VER_01"],
          [47901183050779, "1MEM_SS_HOR_02"],
          [47901250159643, "1MEM_SS_VER_03"],
          [47901216605211, "1MEM_SS_HOR_04"],
          [47901233382427, "1MEM_SS_3AX_05_HOR"],
          [47901703144475, "MEM_LS_03"],
          [47901719921691, "MEM_LS_02"],
          [47901820584987, "1MEM_SS_3AX_05_VER"],
          [47901837362203, "1MEM_SS_3AX_05_45"],
        ],
        [
          [47900914615323, "MC_BJS_02"],
          [47900931392539, "MC_BJS_03_A"],
          [47900948169755, "MC_BJS_03_B"],
          [47900964946971, "MC_LJS_02"],
          [47900981724187, "MC_LJS_03_A"],
          [47900998501403, "MC_LJS_03_B"],
          [47901417931803, "MC_BSS_HOR_4B"],
          [47901434709019, "MC_BSS_HOR_3B"],
          [47901451486235, "MC_BSS_HOR_2B"],
          [47901736698907, "MC_SLS_HOR_4B"],
          [47901753476123, "MC_SLS_HOR_3B"],
          [47901770253339, "MC_SLS_HOR_2B"],
        ],
        [
          [47901015278619, "3M_SS_VER_04"],
          [47901032055835, "4M_SS_VER_04"],
          [47901048833051, "3M_SS_VER_03"],
          [47901065610267, "4M_SS_VER_03"],
          [47901266936859, "3M_SS_VER_02"],
          [47901317268507, "4M_SS_VER_02"],
          [47901350822939, "3M_SS_VER_01"],
          [47901367600155, "4M_SS_VER_01"],
          [47901787030555, "3M_SS_VER_05"],
          [47901803807771, "4M_SS_VER_05"],
        ],
        [
          [47901468263451, "4M_BS_VER_05"],
          [47901485040667, "4M_BS_VER_04"],
          [47901501817883, "4M_BS_VER_03"],
          [47901518595099, "3B_BS_HOR_01"],
          [47901535372315, "3B_BS_HOR_02"],
          [47901552149531, "3B_BS_HOR_03"],
          [47901568926747, "4B_BS_VER_02"],
          [47901585703963, "2B_BS_HOR_01"],
          [47901602481179, "4M_BS_VER_01"],
        ],
        [
          [47901082387483, "4B_SS_HOR_01"],
          [47901115941915, "3B_SS_HOR_01"],
          [47901132719131, "3B_SS_HOR_02"],
          [47901149496347, "3B_SS_HOR_03"],
          [47901199827995, "FRM_SS_VER_02"],
          [47901283714075, "FRM_SS_HOR_01"],
          [47901300491291, "FRM_SS_HOR_03"],
          [47901334045723, "2B_SS_HOR_01"],
        ],
        [
          [47900897838107, "DS_JS_01"],
          [47901099164699, "DS_SS_01"],
        ],
        [
          [47901384377371, "TT_CONTACT_BOTTOM"],
          [47901401154587, "TT_AMBIANCE_BOTTOM"],
          [47901854139419, "TT_CONTACT_TOP"],
          [47901870916635, "TT_AMBIENCE_TOP"],
        ],
      ];

      function getData(chart, days) {
        var counter = 0;
        var arr = [];
        console.log("days = " + days);

        var len = self.elements[chart].length;
        for (var j = 0; j < self.elements[chart].length; j++) {
          var dt = [];
          $http
            .get(
              "php-db-conn/histogram.conn.php?elemId=" +
                self.elements[chart][j][0] +
                "&days=" +
                days
            )
            .then(function onSuccess(response) {
              dt.push(response.data.records);
              counter += 1;
              if (counter === len) {
                self.createSeriesOptions(chart, dt);
              }
              return response.data.records;
            })
            .catch(function onError(data) {
              counter += 1;
              dt.push(moment(moment()) + ",0");
            });
        }
      }

      this.createSeriesOptions = function (chart, data) {
        var series = [];
        var counter = 0;
        var nm = [];
        for (var j = 0; j < self.elements[chart].length; j++) {
          nm.push(self.elements[chart][j][1]);
        }
        angular.forEach(nm, function () {
          series[counter] = {
            name: nm[counter],
            type: "line",
            data: data[counter],
            lineWidth: 1.0,
          };
          counter += 1;

          if (counter === nm.length) {
            createChart(series, "container" + chart);
            return series;
          }
        });
      };

      function createChart(seriesOptions, divID) {
        var options = seriesOptions;
        var ch = Highcharts.stockChart(divID, {
          chart: {
            zoomType: "xy",
          },

          legend: {
            enabled: true,
            align: "center",
            verticalAlign: "top",
            itemStyle: {
              fontSize: "0.5vw",
            },
          },

          time: {
            useUTC: false,
          },

          boost: {
            useGPUTranslations: true,
          },

          scrollbar: {
            enabled: false,
          },

          navigator: {
            enabled: false,
          },

          rangeSelector: {
            enabled: false,
          },

          tooltip: {
            valueDecimals: 5,
          },

          xAxis: {
            type: "datetime",
            ordinal: false,
          },

          yAxis: {
            useHTML: true,
          },

          series: options,
        });

        switch (divID) {
          case "container6":
            Highcharts.setOptions({
              yAxis: {
                useHTML: true,
                title: {
                  text: "\u2103",
                },
              },
            });
            break;
          case "container5":
            Highcharts.setOptions({
              yAxis: {
                useHTML: true,
                title: {
                  text: "mm",
                },
              },
            });
            break;
          default:
            Highcharts.setOptions({
              yAxis: {
                useHTML: true,
                title: {
                  text: "\u03bcm/m",
                },
              },
            });
        }
      }

      this.reload = function (days) {
        $interval.cancel;

        for (var i = 0; i < self.elements.length; i++) {
          getData(i, days);
        }
      };

      this.promise;

      this.reload(this.day);

      $scope.start = function () {
        $scope.stop();
        self.promise = $interval(function () {
          self.reload(self.day);
        }, 60000);
        console.log("interval occured");
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
