(function() {
    'use strict';
    
    angular.module('DLApp.createDL')
        .controller('createDLController', createDLController);
    
    createDLController.$inject = ['commonService'];
    
    function createDLController(commonService) {
        var createDL = this;
        
        createDL.addUser = function() {
            var userDetails = {
                'id' : (commonService.getAllDL.length - 1),
                'name' : createDL.name,
                'role' : createDL.role,
                'empId' : createDL.empId,
                'emailId' : createDL.emailId
            };
            commonService.addUser(userDetails);
        };
    }
    
})();