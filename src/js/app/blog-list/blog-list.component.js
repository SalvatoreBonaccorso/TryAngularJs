'use strict';

angular.module('blogList')
    .component('blogList', {
        templateUrl: '/src/templates/blog-list.html',
        controller: function ($scope) {

            var blogItems = [
                {title:"Some Title", id:1, description:"This is a book"},
                {title:"Tea", id:2, description:"This is a book"},
                {title:"Lite", id:3, description:"This is a book"},
                {title:"Coca-Cola", id:4, description:"This is a book"}
            ];

            $scope.items = blogItems;

            $scope.title = 'Blog List';
            $scope.clicks = 0;

            $scope.someClickTest = function () {
                $scope.clicks += 1;
                $scope.title = 'Clicked ' + $scope.clicks + ' times';
            };
        }   
    });
