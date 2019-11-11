'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: '/src/templates/blog-list.html',
        controller: function ($scope) {

            var blogItems = [
                {title},
                {},
                {},
                {},
                {}
            ]
            $scope.title = 'Hi there!';
            $scope.clicks = 0;

            $scope.someClickTest = function () {
                $scope.clicks += 1;
                $scope.title = 'Clicked ' + $scope.clicks + ' times';
            };
        }   
    });
