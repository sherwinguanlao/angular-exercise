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