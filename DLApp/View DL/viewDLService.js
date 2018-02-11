(function() {
    'use strict';
    
    angular.module('DLApp.viewDL')
        .factory('viewDLService', viewDLService);
    
    viewDLService.$inject = ['$http'];
    
    function viewDLService($http) {
        var viewDLService = {};
        
        return viewDLService;
    }
    
})();