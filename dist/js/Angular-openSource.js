/* Angular-openSource - v0.0.1 - 2017-12-24 */(function () {
    'use strict';
    angular.module('angularOpenSource', ['templateCacher'])
})();

angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('view/template1.html',
    "<div class=\"template1\">\n" +
    "    <h2>{{ctrl.msg}}</h2>\n" +
    "    <h3>Title: {{ctrl.title}}</h3>\n" +
    "</div>\n"
  );

}]);

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

(function () {
    'use strict';
    var template1Ctrl = function () {

        var self = this;
        self.msg='This is angular directive';

    };
    angular.module('angularOpenSource')
        .controller('openSourceController', [ template1Ctrl]);
})();
