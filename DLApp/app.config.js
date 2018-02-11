(function() {
    'use strict';
    
    angular
        .module('DLApp')
        .config(['$routeProvider', '$locationProvider', 
             function($routeProvider, $locationProvider) {
                 $routeProvider
                     .when("/viewDL", {
                        templateUrl : "View DL/viewDL.html"
                     })
                     .when("/addUser", {
                        templateUrl : "Create DL/createDL.html"
                     })
                     .when("/sendEmail", {
                        templateUrl : "Send Email/sendEmail.html"
                     })
                     .otherwise({
                        templateUrl : "View DL/viewDL.html"
                     });

            $locationProvider.html5Mode(true);
        }]);
    
})();