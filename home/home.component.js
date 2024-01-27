'use strict';
angular.module('home', []).component('home', {
    templateUrl: 'home/home.template.html',
    controller: function homeController($http, $q, $interval) {
        this.pageTitle = "NP02 Slow Control app";
        this.natalie = 1;
        var self = this;
    }
});