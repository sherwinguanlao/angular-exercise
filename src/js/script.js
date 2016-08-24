'use strict';

(function () {
	angular.module('DirectorySearchApplication', ['ngRoute']);

	angular
		.module('DirectorySearchApplication')
		.config(['$routeProvider', function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'pages/main.html',
					controller: 'DirectorySearchController',
					controllerAs: 'DirectorySearch'
				})
				.when('/detail/:index', {
					templateUrl: 'pages/detail.html',
					controller: 'DetailsController',
					controllerAs: 'Details'
				})
				.otherwise({
					templateUrl: "pages/error.html"
				});
		}]);
})();
