'use strict';

(function () {
    angular
        .module('DirectorySearchApplication')
        .directive('someDirective', [function () {
            return {
                restrict: 'A',
                replace: true,
                require: '^^parentOfSome',
                scope: {
                    someDirective: "@",
                    text: '@str'
                },
                template: '<div class="alert alert-success" role="alert"></div>',
                link: function (scope, element, attrs, ctrl) {


                    element.on('click', function () {
                        console.log("ctrl", ctrl.jkl);
                        console.log("scope", scope.jkl);

                        ctrl.hello("guest");
                    });


                }
            };
        }]);


    angular
        .module('DirectorySearchApplication')
        .directive('parentOfSome', [function () {
            return {
                restrict: 'E',
                replace: true,
                scope: {
                    jkl: "=jkl"
                },
                template: '<div> {{ jkl }} {{ ctrl.jkl }} <div some-directive="hi" str="8 * 2" this-is-an-attribute="aaa"></div> </div>',
                controllerAs: 'ctrl',
                controller: function ($scope) {
                    var vm = this;


                    // console.log("scope", $scope.jkl);


                    vm.jkl = "THIS";

                    // console.log("this", vm.jkl);

                    vm.hello = function(name) {
                        console.log("HELLO  HELLO ", name);
                    }


                }
            };
        }]);
})();