'use strict';

(function () {
    angular
        .module('DirectorySearchApplication')
        .service('ArtistService', ['$http', function ($http) {
            this.getArtistDetails = function () {
                return $http.get('../../data/artist-data.json');
            };
        }]);
})();