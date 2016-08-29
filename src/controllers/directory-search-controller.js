'use strict';

(function () {
	angular
		.module('DirectorySearchApplication')
		.controller('DirectorySearchController', ['$scope', '$rootScope', 'ArtistService', function ($scope, $rootScope, ArtistService) {
			$scope.searchOptions = ['name', 'reknown'];
			$scope.searchBy = 'name';
			$scope.direction = '';
			
			$scope.order1 = 'active';

			$scope.search = localStorage['search'];

			$scope.$watch('search', function() {
			    localStorage['search'] = $scope.search? $scope.search :'';
			});

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