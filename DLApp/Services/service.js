(function() {
    'use strict';
    
    angular.module('DLApp.services')
        .factory('commonService', commonService);
    
    commonService.$inject = ['$http'];
    
    function commonService($http) {
        var commonService = {};
        var allDL = [
            {
                'id' : 1,
                'name' : 'Shashank B R',
                'role' : 'Associate Software Engineer',
                'empId' : 'IN10933',
                'emailId' : 'shashank.br@lowes.com'
            }
        ];
        
        commonService.getAllDL = function() {
            //return $http.get('allDL');
            return allDL;
        };
                
        commonService.getDL = function(id) {
            for(var i = 0; i < allDL.length; i++)
                if(allDL[i].id == id)
                    return allDL[i];
        };
        
        commonService.deleteDL = function(id) {
            for(var i = 0; i < allDL.length; i++)
                if(allDL[i].id == id)
                    allDL.splice(i, 1);
            return allDL;
        };
        
        commonService.addUser = function(userDetails) {
            allDL.push(userDetails);
        };
        
        commonService.updateDL = function(userDetails) {
            for(var i = 0; i < allDL.length; i++)
                if(allDL[i].id == userDetails.id)
                    allDL.splice(i, 1, userDetails);
            return allDL;
        };
        
        return commonService;        
    }
    
})();