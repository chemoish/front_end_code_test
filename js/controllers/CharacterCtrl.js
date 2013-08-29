'use strict';

CharacterList.controller('CharacterCtrl', function CharacterCtrl($scope, $http) {
    $http.get('data/characters.json').success(function (data) {
        $scope.characters = data;
        $scope.houses = $scope.getHouses(data);
    });

    $scope.predicate = 'name';
    $scope.reverse = false;
    $scope.house = '';

    $scope.sort = function (new_sort) {
        var current_sort = $scope.predicate;

        if (new_sort === current_sort) {
            $scope.reverse = !$scope.reverse;
        } else {
            $scope.predicate = new_sort;
            $scope.reverse = false;
        }
    };

    $scope.getHouses = function (data) {
        var house_names = [],
            houses = [];

        $.each(data, function (key, value) {
            if ($.inArray(value.house, house_names) === -1) {
                house_names.push(value.house);
            }
        });

        $.each(house_names, function (key, value) {
            houses.push({
                name: value
            });
        });

        return houses;
    };
});