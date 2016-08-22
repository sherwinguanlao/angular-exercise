'use strict';






var app = angular.module('directorySearchApplication', ['ngRoute']);

app.constant("bValue", "hello");

app.factory("aValue", ["Example", function (Example) {

	return Example.message;
}]);

app.provider("Example", function () {
	var options = {};

	this.config = function (opt) {
		angular.extend(options, opt);
	};


	this.$get = function () {
		return options;
	}


});

app.service("UnicornLauncher", function UnicornLauncher() {

  this.launchedCount = 0;
  
  this.launch = function() {
    this.launchedCount++;
  }


});



app.config(function ($routeProvider, ExampleProvider) {
	ExampleProvider.config({ message: ":)" })

	$routeProvider
		.when("/", {
			templateUrl: "pages/main.html",
			controller: "directorySearchController",
			controllerAs: "directorySearch"
		})
		.when("/detail/:index", {
			templateUrl: "detail/detail.html",
			controller: "detailsController",
			controllerAs: "details"
		})
		.otherwise({
			templateUrl: "pages/error.html"
		});
});