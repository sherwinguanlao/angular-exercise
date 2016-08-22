app.controller('directorySearchController', ['$scope','$http', '$timeout', 'UnicornLauncher',function($scope, $http, $timeout, UnicornLauncher) {
	$scope.searchOptions = ["name", "reknown"];
	$scope.searchBy = "name";
	$scope.direction = "";
	
	$scope.order1 = "active";

	$scope.orderByFunction = function(x) {
		$scope.direction = x;
		if (x == "reverse") {
			$scope.order1 = "";
			$scope.order2 = "active";
		} else {
			$scope.order1 = "active";
			$scope.order2 = "";
		}
	};

	$scope.toggleButtonLabel = "show filter";
	$scope.filterHide = "hidden";

	$scope.toggleFilter = function() {
		if ($scope.toggleButtonLabel == "show filter") {
			$scope.filterHide = "";
			$scope.toggleButtonLabel = "hide filter";
		} else {
			$scope.filterHide = "hidden";
			$scope.toggleButtonLabel = "show filter";
		}
	};
		
	$http.get('js/data.json').then(function($response) {
		$scope.artist = $response.data;
	});

	$scope.hello = UnicornLauncher.launchedCount;


	$timeout(function () {

		UnicornLauncher.launch();
		
		$scope.hello = UnicornLauncher.launchedCount;
	}, 3000);

}]);