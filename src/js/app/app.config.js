/* app.config.js  extends app.module.js */

'use strict';

angular.module('tryAngularJs')
    .config(
        function($locationProvider, $routeProvider ){
            $routeProvider
                .when('/', {
                    template:'error'/* <blog-list></blog-list> */
                })
                .when('/blog/1', {
                    template:'<h1>Hi 1</h1>'
                })
                .when('/blog/2', {
                    template:'<h1>Hi 2</h1>'
                })
                .when('/blog/3', {
                    template:'<h1>Hi 3</h1>'
                })
                .otherwise({
                    template:'<blog-list></blog-list>'
                })

            $locationProvider.html5Mode({
                enabled: true,
                requireBase: false
            });
    });