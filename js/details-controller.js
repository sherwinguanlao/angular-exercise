angular
	.module('directorySearchApplication')
	.controller('detailsController', ['$scope', '$routeParams', 'getData', function ($scope, $routeParams, getData) {
		$scope.index = parseInt($routeParams.index);

		$scope.prevFunction = function (x) {
			if ($scope.index == 0) {
				$scope.index = x - 1;
			} else {
				$scope.index = $scope.index - 1;
			}
		};

		$scope.nextFunction = function (x) {
			if ($scope.index == x - 1) {
				$scope.index = 0;
			} else {
				$scope.index = $scope.index + 1;
			}
		};

		getData.data.success(function (data) {
			$scope.artist = data;
		});

	}]);