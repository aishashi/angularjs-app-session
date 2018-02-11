(function() {
    'use strict';

    angular
        .module('DLApp', [
            'ngRoute',
            'DLApp.createDL',
            'DLApp.viewDL',
            'DLApp.sendEmail',
            'DLApp.directives',
            'DLApp.services'
        ]);
    
})();