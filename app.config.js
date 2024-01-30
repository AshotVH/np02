angular.
module('ng02SlowControlApp').
config(['$locationProvider', '$routeProvider',
    function config($locationProvider, $routeProvider) {
        $locationProvider.hashPrefix('!');
        $routeProvider.
        when('/', {
            template: '<home></home>'
        }).
        when('/bellegarde', {
            template: '<bellegarde></bellegarde>'
        }).
        when('/cachedhist/:elemId', {
            template: '<cachedhist></cachedhist>'
        }).
        when('/comissioning', {
            template: '<comissioning></comissioning>'
        }).
        when('/crptemps', {
            template: '<crptemps></crptemps>'
        }).
        when('/cryogenics', {
            template: '<cryogenics></cryogenics>'
        }).
        when('/cryostat', {
            template: '<cryostat></cryostat>'
        }).
        when('/floor', {
            template: '<floor></floor>'
        }).
        when('/gauges', {
            template: '<gauges></gauges>'
        }).
        when('/groundplanes/:days?', {
            template: '<groundplanes></groundplanes>'
        }).
        when('/histogram/:elemId/:days?', {
            template: '<histogram></histogram>'
        }).
        when('/histogramaverage/:elemId/:days?', {
            template: '<histogramaverage></histogramaverage>'
        }).
        when('/histogramrange/:elemId/:start/:end', {
            template: '<histogramrange></histogramrange>'
        }).
        when('/inside', {
            template: '<inside></inside>'
        }).
        when('/insidelayout', {
            template: '<insidelayout></insidelayout>'
        }).
        when('/jura', {
            template: '<jura></jura>'
        }).
        when('/lausanne', {
            template: '<lausanne></lausanne>'
        }).
        when('/lems', {
            template: '<lems></lems>'
        }).
        when('/links', {
            template: '<links></links>'
        }).
        when('/multiplexer/', {
            template: '<multiplexer></multiplexer>'
        }).
        when('/pds', {
            template: '<pds></pds>'
        }).
        when('/purity', {
            template: '<purity></purity>'
        }).
        when('/saleve', {
            template: '<saleve></saleve>'
        }).
        when('/straingaugeshist/:days?', {
            template: '<straingaugeshist></straingaugeshist>'
        }).
        when('/tinternal', {
            template: '<tinternal></tinternal>'
        }).
        when('/underfloor', {
            template: '<underfloor></underfloor>'
        }).
        when('/zmonitor', {
            template: '<zmonitor></zmonitor>'
        }).
        when('/coldbox', {
            template: '<coldbox></coldbox>'
        }).
        when('/vdcontrol', {
            template: '<vdcontrol></vdcontrol>'
        }).
        when('/pl506', {
            template: '<pl506></pl506>'
        }).
        when('/vdcam', {
            template: '<vdcam></vdcam>'
        }).
        when('/histogramvd/:elemId/:days?', {
            template: '<histogramvd></histogramvd>'
        }).
        when('/testpage/:elemId/:dateRange?', {
            template: '<testpage></testpage>'
        }).
        otherwise('/');
    }
]);