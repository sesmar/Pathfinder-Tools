(function() {
    angular.module('pathfinderApp').controller('spellsController', function($scope, $http, $anchorScroll) {
        $scope.searchName = "";
        $scope.searchSchool = "";
        $scope.searchDescriptor = "";
        $scope.spells;
        $scope.loading = false;
        $scope.spell;

        $scope.search = function() {
            $scope.loading = true;
            $scope.clearSpell();

            var apiUrl = "/api/spell";
            var additionalParams = "";

            if ($scope.searchName !== "") {
                apiUrl += "/" + $scope.searchName;
            }

            if ($scope.searchSchool !== "") {
                additionalParams += "school=" + $scope.searchSchool;
            }

            if ($scope.searchDescriptor !== "") {
                if (additionalParams !== "") {
                    additionalParams += "&";
                }

                additionalParams += "descriptor=" + $scope.searchDescriptor;
            }

            if (additionalParams !== "") {
                apiUrl += "?" + additionalParams
            }

            $http.get(apiUrl)
                .then(function(results) {
                        $scope.spells = results.data;
                        $scope.loading = false;
                    },
                    function(data) {
                        console.log('Error: ' + results);
                    });
        };

        $scope.selectSpell = function(s) {
            $scope.spell = s;
            $anchorScroll();
        };

        $scope.clearSpell = function() {
            $scope.spell = null;
        };
    });
})();