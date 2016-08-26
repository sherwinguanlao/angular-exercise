'use strict';

(function () {
	angular.module('DirectorySearchApplication', ['ngRoute', 'templates']);

	angular
		.module('DirectorySearchApplication')
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'main.html',
					controller: 'DirectorySearchController',
					controllerAs: 'DirectorySearch'
				})
				.when('/detail/:index', {
					templateUrl: 'detail.html',
					controller: 'DetailsController',
					controllerAs: 'Details'
				})
				.otherwise({
					templateUrl: "error.html"
				});
		}]);
})();
'use strict';

(function () {
    angular
        .module('DirectorySearchApplication')
        .service('ArtistService', ['$http', function ($http) {
            this.getArtistDetails = function () {
                return $http.get('data/artist-data.json');
            };
        }]);
})();
'use strict';

(function () {
	angular
		.module('DirectorySearchApplication')
		.controller('DirectorySearchController', ['$scope', 'ArtistService', function ($scope, ArtistService) {
			$scope.searchOptions = ['name', 'reknown'];
			$scope.searchBy = 'name';
			$scope.direction = '';

			$scope.order1 = 'active';

			$scope.orderByFunction = function (x) {
				$scope.direction = x;
				if (x == 'reverse') {
					$scope.order1 = '';
					$scope.order2 = 'active';
				} else {
					$scope.order1 = 'active';
					$scope.order2 = '';
				}
			};

			$scope.toggleButtonLabel = 'show filter';
			$scope.filterHide = 'filter-hide';

			$scope.toggleFilter = function () {
				if ($scope.toggleButtonLabel == 'show filter') {
					$scope.filterHide = '';
					$scope.toggleButtonLabel = 'hide filter';
				} else {
					$scope.filterHide = 'filter-hide';
					$scope.toggleButtonLabel = 'show filter';
				}
			};

			$scope.artists = [];
			ArtistService.getArtistDetails()
				.then(function (response) {
					$scope.artists = response.data;
				});
		}]);
})();
'use strict';

(function () {
	angular
		.module('DirectorySearchApplication')
		.controller('DetailsController', ['$scope', '$routeParams', 'ArtistService', '$location', function ($scope, $routeParams, ArtistService, $location) {
			$scope.index = parseInt($routeParams.index);
			$scope.firstArtist = false;
			$scope.lastArtist = false;

			if($scope.index == 0)
				$scope.firstArtist = true;
			
			$scope.prevFunction = function () {
				if ($scope.index == 0) {
					$scope.firstArtist = true;
				} else {
					$scope.firstArtist = false;
					$scope.index = $scope.index - 1;
					$location.path('/detail/'+ $scope.index);
				}
			};

			$scope.nextFunction = function () {
				if ($scope.index == $scope.artists.length - 1) {
					$scope.lastArtist = true;
				} else {
					$scope.lastArtist = false;
					$scope.index = $scope.index + 1;
					$location.path('/detail/'+ $scope.index);
				}
			};

			$scope.artists = [];
			ArtistService.getArtistDetails()
				.then(function (response) {
					$scope.artists = response.data;
					if($scope.index == $scope.artists.length - 1)
						$scope.lastArtist = true;
				});
		}]);
})();
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