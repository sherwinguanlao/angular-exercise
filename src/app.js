'use strict';

(function () {
	angular.module('DirectorySearchApplication', ['ngRoute']);

	angular
		.module('DirectorySearchApplication')
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'src/pages/main.html',
					controller: 'DirectorySearchController',
					controllerAs: 'DirectorySearch'
				})
				.when('/detail/:index', {
					templateUrl: 'src/pages/detail.html',
					controller: 'DetailsController',
					controllerAs: 'Details'
				})
				.otherwise({
					templateUrl: "src/pages/error.html"
				});
		}]);
})();