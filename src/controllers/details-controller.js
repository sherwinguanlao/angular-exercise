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