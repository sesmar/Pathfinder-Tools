(function() {
    angular.module('pathfinderApp').controller('bestiaryController', function($scope, $http, $anchorScroll) {
        $scope.searchName = "";
        $scope.searchEnv = "";
        $scope.searchCR = "";
        $scope.monsters;
        $scope.loading = false;
        $scope.monster;

        $scope.search = function() {
            $scope.loading = true;
            $scope.clearMonster();

            var apiUrl = "/api/monster";
            var additionalParams = "";

            if ($scope.searchName !== "") {
                apiUrl += "/" + $scope.searchName;
            }

            if ($scope.searchEnv !== "") {
                additionalParams += "env=" + $scope.searchEnv;
            }

            if ($scope.searchCR !== "") {
                if (additionalParams !== "") {
                    additionalParams += "&";
                }

                additionalParams += "cr=" + $scope.searchCR;
            }

            if (additionalParams !== "") {
                apiUrl += "?" + additionalParams
            }

            $http.get(apiUrl)
                .then(function(results) {
                        $scope.monsters = results.data;
                        $scope.loading = false;
                    },
                    function(data) {
                        console.log('Error: ' + results);
                    });
        };

        $scope.selectMonster = function(m) {
            $scope.monster = m;
            $anchorScroll();
        };

        $scope.clearMonster = function() {
            $scope.monster = null;
        };
    });
})();