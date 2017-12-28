(function () {
    'use strict';
    var openSourceDirective = function () {
        return {
            restrict: 'E',
            scope: {},
            bindToController: {
                id: '@',
                title: '=',
            },
            replace: true,
            controller: 'openSourceController',
            controllerAs: 'ctrl',
            templateUrl: 'view/template1.html',
            link: function (scope, element, attrs, formCtrl) {
            }
        };
    };

    angular.module('angularOpenSource')
        .directive('openSourceDirective', [openSourceDirective]);
})();
