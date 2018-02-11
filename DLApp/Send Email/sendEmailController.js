(function() {
   'use strict';
    
    angular.module('DLApp.sendEmail')
        .controller('sendEmailController', sendEmailController);
    
    sendEmailController.$inject = ['commonService'];
    
    function sendEmailController(commonService) {
        var sendEmail = this;
    }
})();