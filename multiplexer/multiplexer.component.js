"use strict";
angular.module("multiplexer", []).component("multiplexer", {
    templateUrl: "multiplexer/multiplexer.template.html",
    controller: [
        "$routeParams",
        "$scope",
        "$http",
        "$window",
        "$interval",
        function multiplexerController(
            $routeParams,
            $scope,
            $http,
            $window,
            $interval
        ) {
            this.pageTitle = "NP02 Temperature Multiplexer";
            this.natalie = 1;
            var self = this;
            $scope.isMCardOpen = new Array(8).fill(false);
            this.toggleCard = function (cardNumber) {
                $scope.isMCardOpen[cardNumber] = !$scope.isMCardOpen[cardNumber];
            }
            this.pageChooser = function (page) {
                $window.location.href = "#!/" + page;
            };

            this.reload = function () {
                self.NP02_DCS_01_TE = [];
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
                    .get("https://np02-data-api-slow-control.app.cern.ch/np02cachedvals?elemname=multiplexer")
                    .then(function (result) {
                        const res = result.data;
                        console.log(res);
                           
                        self.NP02_DCS_01_TE_card1 = [];
                        self.NP02_DCS_01_TE_card1["Name"] = [];
                        self.NP02_DCS_01_TE_card1["Value"] = [];
                        self.NP02_DCS_01_TE_card2 = [];
                        self.NP02_DCS_01_TE_card2["Name"] = [];
                        self.NP02_DCS_01_TE_card2["Value"] = [];
                        self.NP02_DCS_01_TE_card3 = [];
                        self.NP02_DCS_01_TE_card3["Name"] = [];
                        self.NP02_DCS_01_TE_card3["Value"] = [];
                        self.NP02_DCS_01_TE_card4 = [];
                        self.NP02_DCS_01_TE_card4["Name"] = [];
                        self.NP02_DCS_01_TE_card4["Value"] = [];
                        self.NP02_DCS_01_TE_card5 = [];
                        self.NP02_DCS_01_TE_card5["Name"] = [];
                        self.NP02_DCS_01_TE_card5["Value"] = [];
                        self.NP02_DCS_01_TE_card6 = [];
                        self.NP02_DCS_01_TE_card6["Name"] = [];
                        self.NP02_DCS_01_TE_card6["Value"] = [];
                        self.NP02_DCS_01_TE_card7 = [];
                        self.NP02_DCS_01_TE_card7["Name"] = [];
                        self.NP02_DCS_01_TE_card7["Value"] = [];
                        self.NP02_DCS_01_TE_card8 = [];
                        self.NP02_DCS_01_TE_card8["Name"] = [];
                        self.NP02_DCS_01_TE_card8["Value"] = [];
                        // ****************************** C A R D 1 ****************************************************
                        self.NP02_DCS_01_TE_card1["Name"][0] = "TE0101"
                        self.NP02_DCS_01_TE_card1["Value"][0] = res["47897559194395"] ? parseFloat(res["47897559194395"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][1] = "TE0102"
                        self.NP02_DCS_01_TE_card1["Value"][1] = res["47897575971611"] ? parseFloat(res["47897575971611"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][2] = "TE0103"
                        self.NP02_DCS_01_TE_card1["Value"][2] = res["47897592748827"] ? parseFloat(res["47897592748827"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][3] = "TE0104"
                        self.NP02_DCS_01_TE_card1["Value"][3] = res["47897609526043"] ? parseFloat(res["47897609526043"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][4] = "TE0105"
                        self.NP02_DCS_01_TE_card1["Value"][4] = res["47897626303259"] ? parseFloat(res["47897626303259"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][5] = "TE0106"
                        self.NP02_DCS_01_TE_card1["Value"][5] = res["47897643080475"] ? parseFloat(res["47897643080475"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][6] = "TE0107"
                        self.NP02_DCS_01_TE_card1["Value"][6] = res["47897659857691"] ? parseFloat(res["47897659857691"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][7] = "TE0108"
                        self.NP02_DCS_01_TE_card1["Value"][7] = res["47897676634907"] ? parseFloat(res["47897676634907"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][8] = "TE0109"
                        self.NP02_DCS_01_TE_card1["Value"][8] = res["47897693412123"] ? parseFloat(res["47897693412123"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][9] = "TE0110"
                        self.NP02_DCS_01_TE_card1["Value"][9] = res["47897710189339"] ? parseFloat(res["47897710189339"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][10] = "TE0111"
                        self.NP02_DCS_01_TE_card1["Value"][10] = res["47897726966555"] ? parseFloat(res["47897726966555"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][11] = "TE0112"
                        self.NP02_DCS_01_TE_card1["Value"][11] = res["47897743743771"] ? parseFloat(res["47897743743771"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][12] = "TE0113"
                        self.NP02_DCS_01_TE_card1["Value"][12] = res["47897760520987"] ? parseFloat(res["47897760520987"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][13] = "TE0114"
                        self.NP02_DCS_01_TE_card1["Value"][13] = res["47897777298203"] ? parseFloat(res["47897777298203"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][14] = "TE0115"
                        self.NP02_DCS_01_TE_card1["Value"][14] = res["47897794075419"] ? parseFloat(res["47897794075419"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][15] = "TE0116"
                        self.NP02_DCS_01_TE_card1["Value"][15] = res["47897810852635"] ? parseFloat(res["47897810852635"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][16] = "TE0117"
                        self.NP02_DCS_01_TE_card1["Value"][16] = res["47897827629851"] ? parseFloat(res["47897827629851"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][17] = "TE0118"
                        self.NP02_DCS_01_TE_card1["Value"][17] = res["47897844407067"] ? parseFloat(res["47897844407067"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][18] = "TE0119"
                        self.NP02_DCS_01_TE_card1["Value"][18] = res["47897861184283"] ? parseFloat(res["47897861184283"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][19] = "TE0120"
                        self.NP02_DCS_01_TE_card1["Value"][19] = res["47897877961499"] ? parseFloat(res["47897877961499"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][20] = "TE0121"
                        self.NP02_DCS_01_TE_card1["Value"][20] = res["47897894738715"] ? parseFloat(res["47897894738715"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][21] = "TE0122"
                        self.NP02_DCS_01_TE_card1["Value"][21] = res["47897911515931"] ? parseFloat(res["47897911515931"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][22] = "TE0123"
                        self.NP02_DCS_01_TE_card1["Value"][22] = res["47897928293147"] ? parseFloat(res["47897928293147"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card1["Name"][23] = "TE0124"
                        self.NP02_DCS_01_TE_card1["Value"][23] = res["47897945070363"] ? parseFloat(res["47897945070363"][0]).toFixed(1) : false;
                        // ***********************************  C A R D 2  **********************************
                        self.NP02_DCS_01_TE_card2["Name"][0] = "TE0201"
                        self.NP02_DCS_01_TE_card2["Value"][0] = res["47897961847579"] ? parseFloat(res["47897961847579"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][1] = "TE0202"
                        self.NP02_DCS_01_TE_card2["Value"][1] = res["47897978624795"] ? parseFloat(res["47897978624795"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][2] = "TE0203"
                        self.NP02_DCS_01_TE_card2["Value"][2] = res["47897995402011"] ? parseFloat(res["47897995402011"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][3] = "TE0204"
                        self.NP02_DCS_01_TE_card2["Value"][3] = res["47898012179227"] ? parseFloat(res["47898012179227"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][4] = "TE0205"
                        self.NP02_DCS_01_TE_card2["Value"][4] = res["47898028956443"] ? parseFloat(res["47898028956443"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][5] = "TE0206"
                        self.NP02_DCS_01_TE_card2["Value"][5] = res["47898045733659"] ? parseFloat(res["47898045733659"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][6] = "TE0207"
                        self.NP02_DCS_01_TE_card2["Value"][6] = res["47898062510875"] ? parseFloat(res["47898062510875"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][7] = "TE0208"
                        self.NP02_DCS_01_TE_card2["Value"][7] = res["47898079288091"] ? parseFloat(res["47898079288091"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][8] = "TE0209"
                        self.NP02_DCS_01_TE_card2["Value"][8] = res["47898096065307"] ? parseFloat(res["47898096065307"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][9] = "TE0210"
                        self.NP02_DCS_01_TE_card2["Value"][9] = res["47898112842523"] ? parseFloat(res["47898112842523"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][10] = "TE0211"
                        self.NP02_DCS_01_TE_card2["Value"][10] = res["47898129619739"] ? parseFloat(res["47898129619739"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][11] = "TE0212"
                        self.NP02_DCS_01_TE_card2["Value"][11] = res["47898146396955"] ? parseFloat(res["47898146396955"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][12] = "TE0213"
                        self.NP02_DCS_01_TE_card2["Value"][12] = res["47898163174171"] ? parseFloat(res["47898163174171"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][13] = "TE0214"
                        self.NP02_DCS_01_TE_card2["Value"][13] = res["47898179951387"] ? parseFloat(res["47898179951387"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][14] = "TE0215"
                        self.NP02_DCS_01_TE_card2["Value"][14] = res["47898196728603"] ? parseFloat(res["47898196728603"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][15] = "TE0216"
                        self.NP02_DCS_01_TE_card2["Value"][15] = res["47898213505819"] ? parseFloat(res["47898213505819"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][16] = "TE0217"
                        self.NP02_DCS_01_TE_card2["Value"][16] = res["47898230283035"] ? parseFloat(res["47898230283035"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][17] = "TE0218"
                        self.NP02_DCS_01_TE_card2["Value"][17] = res["47898247060251"] ? parseFloat(res["47898247060251"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][18] = "TE0219"
                        self.NP02_DCS_01_TE_card2["Value"][18] = res["47898263837467"] ? parseFloat(res["47898263837467"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][19] = "TE0220"
                        self.NP02_DCS_01_TE_card2["Value"][19] = res["47898280614683"] ? parseFloat(res["47898280614683"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][20] = "TE0221"
                        self.NP02_DCS_01_TE_card2["Value"][20] = res["47898297391899"] ? parseFloat(res["47898297391899"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][21] = "TE0222"
                        self.NP02_DCS_01_TE_card2["Value"][21] = res["47898314169115"] ? parseFloat(res["47898314169115"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][22] = "TE0223"
                        self.NP02_DCS_01_TE_card2["Value"][22] = res["47898330946331"] ? parseFloat(res["47898330946331"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card2["Name"][23] = "TE0224"
                        self.NP02_DCS_01_TE_card2["Value"][23] = res["47898347723547"] ? parseFloat(res["47898347723547"][0]).toFixed(1) : false;
                        // **********************************  C A R D 3  ***********************************
                        self.NP02_DCS_01_TE_card3["Name"][0] = "TE0301"
                        self.NP02_DCS_01_TE_card3["Value"][0] = res["47898364500763"] ? parseFloat(res["47898364500763"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][1] = "TE0302"
                        self.NP02_DCS_01_TE_card3["Value"][1] = res["47898381277979"] ? parseFloat(res["47898381277979"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][2] = "TE0303"
                        self.NP02_DCS_01_TE_card3["Value"][2] = res["47898398055195"] ? parseFloat(res["47898398055195"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][3] = "TE0304"
                        self.NP02_DCS_01_TE_card3["Value"][3] = res["47898414832411"] ? parseFloat(res["47898414832411"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][4] = "TE0305"
                        self.NP02_DCS_01_TE_card3["Value"][4] = res["47898431609627"] ? parseFloat(res["47898431609627"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][5] = "TE0306"
                        self.NP02_DCS_01_TE_card3["Value"][5] = res["47898448386843"] ? parseFloat(res["47898448386843"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][6] = "TE0307"
                        self.NP02_DCS_01_TE_card3["Value"][6] = res["47898465164059"] ? parseFloat(res["47898465164059"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][7] = "TE0308"
                        self.NP02_DCS_01_TE_card3["Value"][7] = res["47898481941275"] ? parseFloat(res["47898481941275"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][8] = "TE0309"
                        self.NP02_DCS_01_TE_card3["Value"][8] = res["47898498718491"] ? parseFloat(res["47898498718491"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][9] = "TE0310"
                        self.NP02_DCS_01_TE_card3["Value"][9] = res["47898515495707"] ? parseFloat(res["47898515495707"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][10] = "TE0311"
                        self.NP02_DCS_01_TE_card3["Value"][10] = res["47898532272923"] ? parseFloat(res["47898532272923"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][11] = "TE0312"
                        self.NP02_DCS_01_TE_card3["Value"][11] = res["47898549050139"] ? parseFloat(res["47898549050139"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][12] = "TE0313"
                        self.NP02_DCS_01_TE_card3["Value"][12] = res["47898565827355"] ? parseFloat(res["47898565827355"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][13] = "TE0314"
                        self.NP02_DCS_01_TE_card3["Value"][13] = res["47898582604571"] ? parseFloat(res["47898582604571"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][14] = "TE0315"
                        self.NP02_DCS_01_TE_card3["Value"][14] = res["47898599381787"] ? parseFloat(res["47898599381787"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][15] = "TE0316"
                        self.NP02_DCS_01_TE_card3["Value"][15] = res["47898616159003"] ? parseFloat(res["47898616159003"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][16] = "TE0317"
                        self.NP02_DCS_01_TE_card3["Value"][16] = res["47898632936219"] ? parseFloat(res["47898632936219"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][17] = "TE0318"
                        self.NP02_DCS_01_TE_card3["Value"][17] = res["47898649713435"] ? parseFloat(res["47898649713435"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][18] = "TE0319"
                        self.NP02_DCS_01_TE_card3["Value"][18] = res["47898666490651"] ? parseFloat(res["47898666490651"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][19] = "TE0320"
                        self.NP02_DCS_01_TE_card3["Value"][19] = res["47898683267867"] ? parseFloat(res["47898683267867"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][20] = "TE0321"
                        self.NP02_DCS_01_TE_card3["Value"][20] = res["47898700045083"] ? parseFloat(res["47898700045083"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][21] = "TE0322"
                        self.NP02_DCS_01_TE_card3["Value"][21] = res["47898716822299"] ? parseFloat(res["47898716822299"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][22] = "TE0323"
                        self.NP02_DCS_01_TE_card3["Value"][22] = res["47898733599515"] ? parseFloat(res["47898733599515"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card3["Name"][23] = "TE0324"
                        self.NP02_DCS_01_TE_card3["Value"][23] = res["47898750376731"] ? parseFloat(res["47898750376731"][0]).toFixed(1) : false;
                        // *********************************  C A R D 4  ************************************
                        self.NP02_DCS_01_TE_card4["Name"][0] = "TE0401"
                        self.NP02_DCS_01_TE_card4["Value"][0] = res["47898767153947"] ? parseFloat(res["47898767153947"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][1] = "TE0402"
                        self.NP02_DCS_01_TE_card4["Value"][1] = res["47898783931163"] ? parseFloat(res["47898783931163"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][2] = "TE0403"
                        self.NP02_DCS_01_TE_card4["Value"][2] = res["47898800708379"] ? parseFloat(res["47898800708379"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][3] = "TE0404"
                        self.NP02_DCS_01_TE_card4["Value"][3] = res["47898817485595"] ? parseFloat(res["47898817485595"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][4] = "TE0405"
                        self.NP02_DCS_01_TE_card4["Value"][4] = res["47898834262811"] ? parseFloat(res["47898834262811"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][5] = "TE0406"
                        self.NP02_DCS_01_TE_card4["Value"][5] = res["47898851040027"] ? parseFloat(res["47898851040027"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][6] = "TE0407"
                        self.NP02_DCS_01_TE_card4["Value"][6] = res["47898867817243"] ? parseFloat(res["47898867817243"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][7] = "TE0408"
                        self.NP02_DCS_01_TE_card4["Value"][7] = res["47898884594459"] ? parseFloat(res["47898884594459"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][8] = "TE0409"
                        self.NP02_DCS_01_TE_card4["Value"][8] = res["47898901371675"] ? parseFloat(res["47898901371675"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][9] = "TE0410"
                        self.NP02_DCS_01_TE_card4["Value"][9] = res["47898918148891"] ? parseFloat(res["47898918148891"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][10] = "TE0411"
                        self.NP02_DCS_01_TE_card4["Value"][10] = res["47898934926107"] ? parseFloat(res["47898934926107"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][11] = "TE0412"
                        self.NP02_DCS_01_TE_card4["Value"][11] = res["47898951703323"] ? parseFloat(res["47898951703323"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][12] = "TE0413"
                        self.NP02_DCS_01_TE_card4["Value"][12] = res["47898968480539"] ? parseFloat(res["47898968480539"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][13] = "TE0414"
                        self.NP02_DCS_01_TE_card4["Value"][13] = res["47898985257755"] ? parseFloat(res["47898985257755"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][14] = "TE0415"
                        self.NP02_DCS_01_TE_card4["Value"][14] = res["47899002034971"] ? parseFloat(res["47899002034971"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][15] = "TE0416"
                        self.NP02_DCS_01_TE_card4["Value"][15] = res["47899018812187"] ? parseFloat(res["47899018812187"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][16] = "TE0417"
                        self.NP02_DCS_01_TE_card4["Value"][16] = res["47899035589403"] ? parseFloat(res["47899035589403"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][17] = "TE0418"
                        self.NP02_DCS_01_TE_card4["Value"][17] = res["47899052366619"] ? parseFloat(res["47899052366619"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][18] = "TE0419"
                        self.NP02_DCS_01_TE_card4["Value"][18] = res["47899069143835"] ? parseFloat(res["47899069143835"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][19] = "TE0420"
                        self.NP02_DCS_01_TE_card4["Value"][19] = res["47899085921051"] ? parseFloat(res["47899085921051"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][20] = "TE0421"
                        self.NP02_DCS_01_TE_card4["Value"][20] = res["47899102698267"] ? parseFloat(res["47899102698267"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][21] = "TE0422"
                        self.NP02_DCS_01_TE_card4["Value"][21] = res["47899119475483"] ? parseFloat(res["47899119475483"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][22] = "TE0423"
                        self.NP02_DCS_01_TE_card4["Value"][22] = res["47899136252699"] ? parseFloat(res["47899136252699"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card4["Name"][23] = "TE0424"
                        self.NP02_DCS_01_TE_card4["Value"][23] = res["47899153029915"] ? parseFloat(res["47899153029915"][0]).toFixed(1) : false;
                        // ******************************  C A R D 5  ***************************************
                        self.NP02_DCS_01_TE_card5["Name"][0] = "LT0501"
                        self.NP02_DCS_01_TE_card5["Value"][0] = res["47899169807131"] ? parseFloat(res["47899169807131"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][1] = "LT0502"
                        self.NP02_DCS_01_TE_card5["Value"][1] = res["47899186584347"] ? parseFloat(res["47899186584347"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][2] = "LT0503"
                        self.NP02_DCS_01_TE_card5["Value"][2] = res["47899203361563"] ? parseFloat(res["47899203361563"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][3] = "LT0504"
                        self.NP02_DCS_01_TE_card5["Value"][3] = res["47899220138779"] ? parseFloat(res["47899220138779"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][4] = "LT0505"
                        self.NP02_DCS_01_TE_card5["Value"][4] = res["47899236915995"] ? parseFloat(res["47899236915995"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][5] = "LT0506"
                        self.NP02_DCS_01_TE_card5["Value"][5] = res["47899253693211"] ? parseFloat(res["47899253693211"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][6] = "LT0507"
                        self.NP02_DCS_01_TE_card5["Value"][6] = res["47899270470427"] ? parseFloat(res["47899270470427"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][7] = "LT0508"
                        self.NP02_DCS_01_TE_card5["Value"][7] = res["47899287247643"] ? parseFloat(res["47899287247643"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][8] = "LT0509"
                        self.NP02_DCS_01_TE_card5["Value"][8] = res["47899304024859"] ? parseFloat(res["47899304024859"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][9] = "AIR_05_10"
                        self.NP02_DCS_01_TE_card5["Value"][9] = res["47899320802075"] ? parseFloat(res["47899320802075"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][10] = "AIR_05_11"
                        self.NP02_DCS_01_TE_card5["Value"][10] = res["47899337579291"] ? parseFloat(res["47899337579291"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][11] = "AIR_05_12"
                        self.NP02_DCS_01_TE_card5["Value"][11] = res["47899354356507"] ? parseFloat(res["47899354356507"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][12] = "TE0513"
                        self.NP02_DCS_01_TE_card5["Value"][12] = res["47899371133723"] ? parseFloat(res["47899371133723"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][13] = "TE0514"
                        self.NP02_DCS_01_TE_card5["Value"][13] = res["47899387910939"] ? parseFloat(res["47899387910939"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][14] = "TE0515"
                        self.NP02_DCS_01_TE_card5["Value"][14] = res["47899404688155"] ? parseFloat(res["47899404688155"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][15] = "TE0516"
                        self.NP02_DCS_01_TE_card5["Value"][15] = res["47899421465371"] ? parseFloat(res["47899421465371"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][16] = "TE0517"
                        self.NP02_DCS_01_TE_card5["Value"][16] = res["47899438242587"] ? parseFloat(res["47899438242587"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][17] = "TE0518"
                        self.NP02_DCS_01_TE_card5["Value"][17] = res["47899455019803"] ? parseFloat(res["47899455019803"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][18] = "TE0519"
                        self.NP02_DCS_01_TE_card5["Value"][18] = res["47899471797019"] ? parseFloat(res["47899471797019"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][19] = "TE0520"
                        self.NP02_DCS_01_TE_card5["Value"][19] = res["47899488574235"] ? parseFloat(res["47899488574235"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][20] = "TE0521"
                        self.NP02_DCS_01_TE_card5["Value"][20] = res["47899505351451"] ? parseFloat(res["47899505351451"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][21] = "TE0522"
                        self.NP02_DCS_01_TE_card5["Value"][21] = res["47899522128667"] ? parseFloat(res["47899522128667"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][22] = "TE0523"
                        self.NP02_DCS_01_TE_card5["Value"][22] = res["47899538905883"] ? parseFloat(res["47899538905883"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card5["Name"][23] = "TE0524"
                        self.NP02_DCS_01_TE_card5["Value"][23] = res["47899555683099"] ? parseFloat(res["47899555683099"][0]).toFixed(1) : false;
                        // ******************************  C A R D 6  ***************************************
                        self.NP02_DCS_01_TE_card6["Name"][0] = "TE0601"
                        self.NP02_DCS_01_TE_card6["Value"][0] = res["47899572460315"] ? parseFloat(res["47899572460315"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][1] = "TE0602"
                        self.NP02_DCS_01_TE_card6["Value"][1] = res["47899589237531"] ? parseFloat(res["47899589237531"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][2] = "TE0603"
                        self.NP02_DCS_01_TE_card6["Value"][2] = res["47899606014747"] ? parseFloat(res["47899606014747"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][3] = "TE0604"
                        self.NP02_DCS_01_TE_card6["Value"][3] = res["47899622791963"] ? parseFloat(res["47899622791963"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][4] = "TE0605"
                        self.NP02_DCS_01_TE_card6["Value"][4] = res["47899639569179"] ? parseFloat(res["47899639569179"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][5] = "TE0606"
                        self.NP02_DCS_01_TE_card6["Value"][5] = res["47899656346395"] ? parseFloat(res["47899656346395"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][6] = "TE0607"
                        self.NP02_DCS_01_TE_card6["Value"][6] = res["47899673123611"] ? parseFloat(res["47899673123611"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][7] = "TE0608"
                        self.NP02_DCS_01_TE_card6["Value"][7] = res["47899689900827"] ? parseFloat(res["47899689900827"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][8] = "AIR_06_9"
                        self.NP02_DCS_01_TE_card6["Value"][8] = res["47899706678043"] ? parseFloat(res["47899706678043"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][9] = "AIR_06_10"
                        self.NP02_DCS_01_TE_card6["Value"][9] = res["47899723455259"] ? parseFloat(res["47899723455259"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][10] = "AIR_06_11"
                        self.NP02_DCS_01_TE_card6["Value"][10] = res["47899740232475"] ? parseFloat(res["47899740232475"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][11] = "AIR_06_12"
                        self.NP02_DCS_01_TE_card6["Value"][11] = res["47899757009691"] ? parseFloat(res["47899757009691"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][12] = "TE0010"
                        self.NP02_DCS_01_TE_card6["Value"][12] = res["47899773786907"] ? parseFloat(res["47899773786907"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][13] = "TE0011"
                        self.NP02_DCS_01_TE_card6["Value"][13] = res["47899790564123"] ? parseFloat(res["47899790564123"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][14] = "TE0012"
                        self.NP02_DCS_01_TE_card6["Value"][14] = res["47899807341339"] ? parseFloat(res["47899807341339"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][15] = "TE0013"
                        self.NP02_DCS_01_TE_card6["Value"][15] = res["47899824118555"] ? parseFloat(res["47899824118555"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][16] = "TE0014"
                        self.NP02_DCS_01_TE_card6["Value"][16] = res["47899840895771"] ? parseFloat(res["47899840895771"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][17] = "TE0015"
                        self.NP02_DCS_01_TE_card6["Value"][17] = res["47899857672987"] ? parseFloat(res["47899857672987"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][18] = "TE0016"
                        self.NP02_DCS_01_TE_card6["Value"][18] = res["47899874450203"] ? parseFloat(res["47899874450203"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][19] = "TE0017"
                        self.NP02_DCS_01_TE_card6["Value"][19] = res["47899891227419"] ? parseFloat(res["47899891227419"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][20] = "TE0018"
                        self.NP02_DCS_01_TE_card6["Value"][20] = res["47899908004635"] ? parseFloat(res["47899908004635"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][21] = "AIR_06_22"
                        self.NP02_DCS_01_TE_card6["Value"][21] = res["47899924781851"] ? parseFloat(res["47899924781851"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][22] = "AIR_06_23"
                        self.NP02_DCS_01_TE_card6["Value"][22] = res["47899941559067"] ? parseFloat(res["47899941559067"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card6["Name"][23] = "AIR_06_24"
                        self.NP02_DCS_01_TE_card6["Value"][23] = res["47899958336283"] ? parseFloat(res["47899958336283"][0]).toFixed(1) : false;
                        // ******************************  C A R D 7  ***************************************
                        self.NP02_DCS_01_TE_card7["Name"][0] = "LT0701"
                        self.NP02_DCS_01_TE_card7["Value"][0] = res["47899975113499"] ? parseFloat(res["47899975113499"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][1] = "LT0702"
                        self.NP02_DCS_01_TE_card7["Value"][1] = res["47899991890715"] ? parseFloat(res["47899991890715"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][2] = "LT0703"
                        self.NP02_DCS_01_TE_card7["Value"][2] = res["47900008667931"] ? parseFloat(res["47900008667931"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][3] = "LT0704"
                        self.NP02_DCS_01_TE_card7["Value"][3] = res["47900025445147"] ? parseFloat(res["47900025445147"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][4] = "LT0705"
                        self.NP02_DCS_01_TE_card7["Value"][4] = res["47900042222363"] ? parseFloat(res["47900042222363"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][5] = "LT0706"
                        self.NP02_DCS_01_TE_card7["Value"][5] = res["47900058999579"] ? parseFloat(res["47900058999579"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][6] = "LT0707"
                        self.NP02_DCS_01_TE_card7["Value"][6] = res["47900075776795"] ? parseFloat(res["47900075776795"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][7] = "LT0708"
                        self.NP02_DCS_01_TE_card7["Value"][7] = res["47900092554011"] ? parseFloat(res["47900092554011"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][8] = "LT0709"
                        self.NP02_DCS_01_TE_card7["Value"][8] = res["47900109331227"] ? parseFloat(res["47900109331227"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][9] = "AIR_07_10"
                        self.NP02_DCS_01_TE_card7["Value"][9] = res["47900126108443"] ? parseFloat(res["47900126108443"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][10] = "AIR_07_11"
                        self.NP02_DCS_01_TE_card7["Value"][10] = res["47900142885659"] ? parseFloat(res["47900142885659"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][11] = "AIR_07_12"
                        self.NP02_DCS_01_TE_card7["Value"][11] = res["47900159662875"] ? parseFloat(res["47900159662875"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][12] = "TE0713"
                        self.NP02_DCS_01_TE_card7["Value"][12] = res["47900176440091"] ? parseFloat(res["47900176440091"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][13] = "TE0714"
                        self.NP02_DCS_01_TE_card7["Value"][13] = res["47900193217307"] ? parseFloat(res["47900193217307"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][14] = "TE0715"
                        self.NP02_DCS_01_TE_card7["Value"][14] = res["47900209994523"] ? parseFloat(res["47900209994523"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][15] = "TE0716"
                        self.NP02_DCS_01_TE_card7["Value"][15] = res["47900226771739"] ? parseFloat(res["47900226771739"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][16] = "TE0717"
                        self.NP02_DCS_01_TE_card7["Value"][16] = res["47900243548955"] ? parseFloat(res["47900243548955"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][17] = "TE0718"
                        self.NP02_DCS_01_TE_card7["Value"][17] = res["47900260326171"] ? parseFloat(res["47900260326171"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][18] = "TE0719"
                        self.NP02_DCS_01_TE_card7["Value"][18] = res["47900277103387"] ? parseFloat(res["47900277103387"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][19] = "TE0720"
                        self.NP02_DCS_01_TE_card7["Value"][19] = res["47900293880603"] ? parseFloat(res["47900293880603"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][20] = "TE0721"
                        self.NP02_DCS_01_TE_card7["Value"][20] = res["47900310657819"] ? parseFloat(res["47900310657819"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][21] = "TE0722"
                        self.NP02_DCS_01_TE_card7["Value"][21] = res["47900327435035"] ? parseFloat(res["47900327435035"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][22] = "TE0723"
                        self.NP02_DCS_01_TE_card7["Value"][22] = res["47900344212251"] ? parseFloat(res["47900344212251"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card7["Name"][23] = "TE0724"
                        self.NP02_DCS_01_TE_card7["Value"][23] = res["47900360989467"] ? parseFloat(res["47900360989467"][0]).toFixed(1) : false;
                        // ******************************  C A R D 8  ***************************************
                        self.NP02_DCS_01_TE_card8["Name"][0] = "TE0801"
                        self.NP02_DCS_01_TE_card8["Value"][0] = res["47900377766683"] ? parseFloat(res["47900377766683"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][1] = "TE0802"
                        self.NP02_DCS_01_TE_card8["Value"][1] = res["47900394543899"] ? parseFloat(res["47900394543899"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][2] = "TE0803"
                        self.NP02_DCS_01_TE_card8["Value"][2] = res["47900411321115"] ? parseFloat(res["47900411321115"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][3] = "TE0804"
                        self.NP02_DCS_01_TE_card8["Value"][3] = res["47900428098331"] ? parseFloat(res["47900428098331"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][4] = "TE0805"
                        self.NP02_DCS_01_TE_card8["Value"][4] = res["47900444875547"] ? parseFloat(res["47900444875547"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][5] = "TE0806"
                        self.NP02_DCS_01_TE_card8["Value"][5] = res["47900461652763"] ? parseFloat(res["47900461652763"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][6] = "TE0807"
                        self.NP02_DCS_01_TE_card8["Value"][6] = res["47900478429979"] ? parseFloat(res["47900478429979"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][7] = "TE0808"
                        self.NP02_DCS_01_TE_card8["Value"][7] = res["47900495207195"] ? parseFloat(res["47900495207195"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][8] = "AIR_08_9"
                        self.NP02_DCS_01_TE_card8["Value"][8] = res["47900511984411"] ? parseFloat(res["47900511984411"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][9] = "AIR_08_10"
                        self.NP02_DCS_01_TE_card8["Value"][9] = res["47900528761627"] ? parseFloat(res["47900528761627"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][10] = "AIR_08_11"
                        self.NP02_DCS_01_TE_card8["Value"][10] = res["47900545538843"] ? parseFloat(res["47900545538843"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][11] = "AIR_08_12"
                        self.NP02_DCS_01_TE_card8["Value"][11] = res["47900562316059"] ? parseFloat(res["47900562316059"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][12] = "AIR_08_13"
                        self.NP02_DCS_01_TE_card8["Value"][12] = res["47900579093275"] ? parseFloat(res["47900579093275"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][13] = "AIR_08_14"
                        self.NP02_DCS_01_TE_card8["Value"][13] = res["47900595870491"] ? parseFloat(res["47900595870491"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][14] = "AIR_08_15"
                        self.NP02_DCS_01_TE_card8["Value"][14] = res["47900612647707"] ? parseFloat(res["47900612647707"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][15] = "AIR_08_16"
                        self.NP02_DCS_01_TE_card8["Value"][15] = res["47900629424923"] ? parseFloat(res["47900629424923"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][16] = "AIR_08_17"
                        self.NP02_DCS_01_TE_card8["Value"][16] = res["47900646202139"] ? parseFloat(res["47900646202139"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][17] = "AIR_08_18"
                        self.NP02_DCS_01_TE_card8["Value"][17] = res["47900662979355"] ? parseFloat(res["47900662979355"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][18] = "AIR_08_19"
                        self.NP02_DCS_01_TE_card8["Value"][18] = res["47900679756571"] ? parseFloat(res["47900679756571"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][19] = "AIR_08_20"
                        self.NP02_DCS_01_TE_card8["Value"][19] = res["47900696533787"] ? parseFloat(res["47900696533787"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][20] = "AIR_08_21"
                        self.NP02_DCS_01_TE_card8["Value"][20] = res["47900713311003"] ? parseFloat(res["47900713311003"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][21] = "AIR_08_22"
                        self.NP02_DCS_01_TE_card8["Value"][21] = res["47900730088219"] ? parseFloat(res["47900730088219"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][22] = "AIR_08_23"
                        self.NP02_DCS_01_TE_card8["Value"][22] = res["47900746865435"] ? parseFloat(res["47900746865435"][0]).toFixed(1) : false;
                        self.NP02_DCS_01_TE_card8["Name"][23] = "AIR_08_24"
                        self.NP02_DCS_01_TE_card8["Value"][23] = res["47900763642651"] ? parseFloat(res["47900763642651"][0]).toFixed(1) : false;
                               
                        console.log(self.NP02_DCS_01_TE_card2['Value'][0])
                        // let boo = result.data;
                        // console.log(Object.keys(boo).length);
                        // console.log(result.data);
                        // var rArr = [];
                        // var resjson = angular.toJson(result.data);
                        // var res = JSON.parse(resjson);
                        // for (var i = 0; i < res.length; i++) {
                        //     rArr.push(JSON.parse(res[i]));
                        // }
                     
                        
                        
                        
                      
                        
                        /*self.NP02_MHT0100AI = rArr[0].Mnish;
                            self.NP02_TT0100AI = rArr[1].Mnish;
                            self.NP02_PT0106AI = rArr[2].Mnish;*/
                        
                        // var j = 0;
                        // var k = "";
                        
                        
                        // for (var i = 1; i < 9; i++) {
                        //     self.NP02_DCS_01_TE_card6["Name"].push("TE060" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card8["Name"].push("TE080" + i);
                        //     self.NP02_DCS_01_TE_card8["Value"].push(rArr[i + 167].toFixed(1));
                        // }
                        
                        // for (var i = 1; i < 10; i++) {
                        //     self.NP02_DCS_01_TE_card1["Name"].push("TE010" + i);
                        //     self.NP02_DCS_01_TE_card1["Value"].push(rArr[i - 1].toFixed(1));
                        
                        //     self.NP02_DCS_01_TE_card2["Name"].push("TE020" + i);
                        //     self.NP02_DCS_01_TE_card2["Value"].push(rArr[i + 23].toFixed(1));
                        //     self.NP02_DCS_01_TE_card3["Name"].push("TE030" + i);
                        //     self.NP02_DCS_01_TE_card3["Value"].push(rArr[i + 47].toFixed(1));
                        //     self.NP02_DCS_01_TE_card4["Name"].push("TE040" + i);
                        //     self.NP02_DCS_01_TE_card4["Value"].push(rArr[i + 71].toFixed(1));
                        //     self.NP02_DCS_01_TE_card5["Name"].push("LT050" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("LT070" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        
                        // for (var i = 9; i < 13; i++) {
                        //     self.NP02_DCS_01_TE_card6["Name"].push("AIR_06_" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        // }
                        
                        // for (var i = 9; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card8["Name"].push("AIR_08_" + i);
                        //     self.NP02_DCS_01_TE_card8["Value"].push(rArr[i + 167].toFixed(1));
                        // }
                        
                        // for (var i = 10; i < 13; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("AIR_05_" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("AIR_07_" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        
                        // for (var i = 10; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card1["Name"].push("TE01" + i);
                        //     self.NP02_DCS_01_TE_card1["Value"].push(rArr[i - 1].toFixed(1));
                        //     self.NP02_DCS_01_TE_card2["Name"].push("TE02" + i);
                        //     self.NP02_DCS_01_TE_card2["Value"].push(rArr[i + 23].toFixed(1));
                        //     self.NP02_DCS_01_TE_card3["Name"].push("TE03" + i);
                        //     self.NP02_DCS_01_TE_card3["Value"].push(rArr[i + 47].toFixed(1));
                        //     self.NP02_DCS_01_TE_card4["Name"].push("TE04" + i);
                        //     self.NP02_DCS_01_TE_card4["Value"].push(rArr[i + 71].toFixed(1));
                        // }
                        
                        // for (var i = 13; i < 22; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("TE05" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card6["Name"].push("TE00" + (i - 3));
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("TE07" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        
                        // for (var i = 22; i < 25; i++) {
                        //     self.NP02_DCS_01_TE_card5["Name"].push("TE05" + i);
                        //     self.NP02_DCS_01_TE_card5["Value"].push(rArr[i + 95].toFixed(1));
                        //     self.NP02_DCS_01_TE_card6["Name"].push("AIR_06_" + i);
                        //     self.NP02_DCS_01_TE_card6["Value"].push(rArr[i + 119].toFixed(1));
                        //     self.NP02_DCS_01_TE_card7["Name"].push("TE07" + i);
                        //     self.NP02_DCS_01_TE_card7["Value"].push(rArr[i + 143].toFixed(1));
                        // }
                        
                        // console.log(self.NP02_DCS_01_TE_card["Name"][0]);

                        console.log("interval occured");
                    });
            };
            this.promise;
            this.reload();
            $scope.start = function () {
                $scope.stop();

                self.promise = $interval(self.reload, 600000);
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
