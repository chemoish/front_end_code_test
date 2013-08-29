'use strict';

CharacterList.controller('CharacterCtrl', function CharacterCtrl($scope, $http) {
    $http.get('data/characters.json').success(function (data) {
        $scope.characters = data;
    });

    $scope.predicate = 'name';
    $scope.reverse = false;

    $scope.sort = function (new_sort) {
        var current_sort = $scope.predicate;

        if (new_sort === current_sort) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.predicate = new_sort;
            $scope.reverse = false;
        }
    };
});