'use strict';

(function () {
    angular
        .module('DirectorySearchApplication')
        .service('ArtistService', ['$http', '$q', function ($http, $q) {
            var deferred = $q.defer();

            this.getArtistDetails = function () {
                return $http.get('src/data/artist-data.json')
                    .then(function (response) {
                        deferred.resolve(response.data);
                        return deferred.promise;
                    }, function (response) {
                        deferred.reject(response);
                        return deferred.promise;
                    });
            };
        }]);
})();