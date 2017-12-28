(function () {
    'use strict';
    var template1Ctrl = function () {

        var self = this;
        self.msg='This is angular directive';

    };
    angular.module('angularOpenSource')
        .controller('openSourceController', [ template1Ctrl]);
})();
