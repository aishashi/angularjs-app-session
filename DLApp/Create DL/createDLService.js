(function() {
    'use strict';
    
    angular.module('DLApp.createDL')
        .factory('createDLService', createDLService);
    
    createDLService.$inject = ['$http'];
    
    function createDLService($http) {
        var createDLService = {};
        
        return createDLService;
    }
    
})();