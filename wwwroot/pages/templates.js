angular.module('templates').run(['$templateCache', function($templateCache) {$templateCache.put('detail.html','<div class="row">\r\n\t<div class="col-md-6 col-sm-12 col-md-offset-3 detail-container shadow">\r\n\t\t<button class="details-nav-button left shadow" ng-click="prevFunction(artist.length)">\u25C4</button>\r\n\t\t<button class="details-nav-button right shadow" ng-click="nextFunction(artist.length)">\u25BA</button>\r\n\t\t<div class="row details">\r\n\t\t\t<div class="col-md-4 col-sm-12">\r\n\t\t\t\t<img src="../../images/{{artist[index].shortname}}_tn.jpg">\r\n\t\t\t</div>\r\n\t\t\t<div class="col-md-8 col-sm-12">\r\n\t\t\t\t<span>{{artist[index].name}}</span>\r\n\t\t\t\t<span>{{artist[index].reknown}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\t\t<div class="row bio">\r\n\t\t\t{{artist[index].bio}}\r\n\t\t</div>\r\n\t\t<a href="#/">&laquo;Back to Search</a>\r\n\t</div>\r\n</div>');
$templateCache.put('error.html','<h1 class="error">Page not Found</h1>');
$templateCache.put('main.html','<div class="row">\r\n\t<div class="col-md-6 col-md-offset-3 search-form shadow">\r\n\t\t<div class="search-form-wrapper">\r\n\t\t\t<div class="search-form-content">\r\n\t\t\t\t<h1 class="noselect">Artist</h1>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="search-form-content">\r\n\t\t\t\t<form name="searchForm">\r\n\t\t\t\t\t<span id="searchLabel">\r\n\t\t\t\t\t\t<span id="searchLabelText">Search</span>\r\n\t\t\t\t\t<span class="glyphicon glyphicon-search"></span>\r\n\t\t\t\t\t</span>\r\n\t\t\t\t\t<input name="searchInput" type="text" ng-model="search" autocomplete="off" required>\r\n\t\t\t\t\t<div class="clear-left"></div>\r\n\t\t\t\t</form>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="filter" ng-class="filterHide">\r\n\t\t\t\t<div class="row">\r\n\t\t\t\t\t<div class="col-sm-5 col-xs-12 filter-col">\r\n\t\t\t\t\t\t<div id="filterLabel">Filter</div>\r\n\t\t\t\t\t\t<select id="filterSelect" ng-model="searchBy" ng-options="x for x in searchOptions"></select>\r\n\t\t\t\t\t\t<div class="clear-left"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t\t<div class="col-sm-7 col-xs-12 filter-col">\r\n\t\t\t\t\t\t<span id="orderLabel">Order</span>\r\n\t\t\t\t\t\t<div class="order-div">\r\n\t\t\t\t\t\t\t<span class="order" ng-class="order1" ng-click="orderByFunction(\'\')">Ascending</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="order-div">\r\n\t\t\t\t\t\t\t<span class="order round-corner" ng-class="order2" ng-click="orderByFunction(\'reverse\')">Descending</span>\r\n\t\t\t\t\t\t</div>\r\n\t\t\t\t\t\t<div class="clear-left"></div>\r\n\t\t\t\t\t</div>\r\n\t\t\t\t</div>\r\n\t\t\t</div>\r\n\r\n\t\t\t<div class="filter-toggle noselect" ng-click="toggleFilter()">\r\n\t\t\t\t<span>{{toggleButtonLabel}}</span>\r\n\t\t\t</div>\r\n\t\t</div>\r\n\r\n\t\t<div ng-show="search" class="result" ng-repeat="x in artist | filter : {name : search} | orderBy : searchBy:direction">\r\n\t\t\t<a href="#detail/{{artist.indexOf(x)}}">\r\n\t\t\t\t<div>\r\n\t\t\t\t\t<img src="../../images/{{x.shortname}}_tn.jpg">\r\n\t\t\t\t</div>\r\n\t\t\t\t<div id="resultName">\r\n\t\t\t\t\t<p>{{x.name}}</p>\r\n\t\t\t\t\t<p>{{x.reknown}}</p>\r\n\t\t\t\t</div>\r\n\t\t\t</a>\r\n\t\t</div>\r\n\t</div>\r\n</div>');}]);