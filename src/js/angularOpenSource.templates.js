angular.module('templateCacher', []).run(['$templateCache', function($templateCache) {
  'use strict';

  $templateCache.put('view/template1.html',
    "<div class=\"template1\">\n" +
    "    <h2>{{ctrl.msg}}</h2>\n" +
    "    <h3>Title: {{ctrl.title}}</h3>\n" +
    "</div>\n"
  );

}]);
