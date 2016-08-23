(function () {
	angular.module('directorySearchApplication', ['ngRoute'])
})();

(function () {
	'use strict';

	angular
		.module('directorySearchApplication')
		.config(function ($routeProvider) {
			$routeProvider
				.when('/', {
					templateUrl: 'pages/main.html',
					controller: 'directorySearchController',
					controllerAs: 'directorySearch'
				})
				.when('/detail/:index', {
					templateUrl: 'pages/detail.html',
					controller: 'detailsController',
					controllerAs: 'details'
				})
				.otherwise({
					templateUrl: "pages/error.html"
				});
		});

	angular
		.module('directorySearchApplication')
		.service('getData', ['$http', function getData($http) {
			return {
				data: $http.get('data/data.json')
			}
		}]);
})();
