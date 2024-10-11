'use strict';
angular.module('vdcam', []).component('vdcam', {
    templateUrl: 'vdcam/vdcam.template.html',
    controller: ['$routeParams', '$scope', '$window', '$http', '$interval',
        function vdcamController($routeParams, $scope, $window, $http, $interval) {
        this.pageTitle = "NP02 VD Camera Control";
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
            $window.location.href = "#!/vdcam/" + fundays;
        };

        this.reload = function () {
            self.timestamp = new Date();
            $http
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=np02cryo")
                .then(function (result) {
                    const res = result.data;
                    self.NP02_MHT0100AI = res["47910779640603"][0];
                    self.NP02_TT0100AI = res["47910796417819"][0];
                    self.NP02_PT0106AI = res["47910813195035"][0];
                });

            $http
                .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=vdcam")
                .then(function (result) {
                    const res = result.data;
                    console.log(res);
                    self.NP_VD_CamT1 = res["48206696153631"][0];
                    self.NP_VD_CamT2 = res["48206712930847"][0];
                    self.NP_VD_CamT3 = res["48206729708063"][0];
            });
        };

        this.promise;

        this.reload();

        $scope.start = function() {
            $scope.stop();
            self.promise = $interval(self.reload, 60000);
        };

        $scope.stop = function() {
            $interval.cancel(self.promise);
        };
        $scope.start();

        $scope.$on('$destroy', function() {
            $scope.stop();
        });
    }
]});