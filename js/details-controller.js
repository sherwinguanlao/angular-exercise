app.controller('detailsController', ['$scope','$routeParams','$http', function($scope, $routeParams, $http) {
	$scope.index = parseInt($routeParams.index);

	$scope.prevFunction = function(x) {
		if ($scope.index == 0) {
			$scope.index = x - 1;
		} else {
			$scope.index = $scope.index - 1;
		}
	};
    
	$scope.nextFunction = function(x) {
		if ($scope.index == x - 1) {
			$scope.index = 0;
		} else {
			$scope.index = $scope.index + 1;
		}
	};

	$http.get('js/data.json').then(function($response) {
		$scope.artist = $response.data;
	});
}]);