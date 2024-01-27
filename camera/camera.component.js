'use strict';
angular.module('camera', []).component('camera', {
    templateUrl: 'camera/camera.template.html',
    controller: ['$http', '$window', '$interval', '$sce',
        function cameraController($http, $window, $interval, $sce) {
            this.pageTitle = "NP02 Cameras";
            this.natalie = 1;
            this.TT0101 = "";
            var self = this;

            this.config = {
                sources: [
                    {src: $sce.trustAsResourceUrl("http://static.videogular.com/assets/videos/videogular.ogg"), type: "video/ogg"}
                ],
                tracks: [
                    {
                    }
                ],
                theme: "css/videogular.css",
                plugins: {
                    poster: "http://www.videogular.com/assets/images/videogular.png"
                }
            };

            $interval(this.reload, 600000);
        }]
});