(function () {
    'use strict';
    var myApp = angular.module('demo', ['angularOpenSource']);

    var myController = function ($scope) {
        $scope.title='Welcome to the world of open Source';

    };
    myApp.controller('demoController', ['$scope', myController]);

})();
