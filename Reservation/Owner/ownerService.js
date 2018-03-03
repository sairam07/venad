(function() {
    'use strict';

    angular
        .module('reservation')
        .service('ownerService', ownerService);

    ownerService.$inject = ['$http', '$q'];

    function ownerService($http, $q) {

        var self = this;

        var endpoint = 'https://vesa-reservation.herokuapp.com';

        self.getReservation = function() {
            var defer = $q.defer();

            $http
                .get(endpoint + '/app/customer/status')
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

        self.getcustomer = function() {
            var defer = $q.defer();

            $http
                .get(endpoint + '/app/customer')
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };
        self.getUserById = function(id) {
            var defer = $q.defer();
            $http
                .get(endpoint + '/app/customer/' + id)
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };
        self.puttable = function(table, id) {
            var defer = $q.defer();
            console.log(table);
            $http
                .post(endpoint + '/app/reservation/' + id, table)
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };
        self.getTable = function() {
            var defer = $q.defer();

            $http
                .get(endpoint + '/app/reservation')
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };
        self.updatetable = function(table, id) {
            var defer = $q.defer();
            console.log(table);
            $http
                .put(endpoint + 'app/reservation/' + id, table)
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

        self.deletetable = function(table, id) {
            var defer = $q.defer();
            console.log(table);
            $http
                .delete(endpoint + '/app/reservation/' + id)
                .then(function(response) {
                    defer.resolve(response.data);
                }, function(error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

    }
})();