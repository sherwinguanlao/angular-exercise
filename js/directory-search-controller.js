angular
	.module('directorySearchApplication')
	.controller('directorySearchController', ['$scope', 'getData', function ($scope, getData) {
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
		$scope.filterHide = 'hidden';

		$scope.toggleFilter = function () {
			if ($scope.toggleButtonLabel == 'show filter') {
				$scope.filterHide = '';
				$scope.toggleButtonLabel = 'hide filter';
			} else {
				$scope.filterHide = 'hidden';
				$scope.toggleButtonLabel = 'show filter';
			}
		};

		getData.data.success(function (data) {
			$scope.artist = data;
		});

	}]);