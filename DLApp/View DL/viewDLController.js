(function() {
    'use strict';
    
    angular.module('DLApp.viewDL')
        .controller('viewDLController', viewDLController);
    
    viewDLController.$inject = ['commonService'];
    
    function viewDLController(commonService) {
        var viewDL = this;
        
        viewDL.allDL = [];
        viewDL.DL = {};
        viewDL.updateDL = {};
        
        (function() {
            viewDL.allDL = commonService.getAllDL();
        })();
            
        viewDL.getDL = function(id) {
            viewDL.DL = commonService.getDL(id);
        };
        
        viewDL.deleteDL = function(id) {
            viewDL.allDL = commonService.deleteDL(id);
        };
        
        viewDL.updateDL = function(userDetails) {
            viewDL.updateDL = userDetails;
        };
        
        viewDL.updateUser = function() {
            var userDetails = {
                'id' : viewDL.updateDL.id,
                'name' : viewDL.updateDL.name,
                'role' : viewDL.updateDL.role,
                'empId' : viewDL.updateDL.empId,
                'emailId' : viewDL.updateDL.emailId                
            } 
            
            viewDL.allDL = commonService.updateDL(userDetails);
        };
    }
    
})();