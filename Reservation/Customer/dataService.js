(function() {
    'use strict';

    angular
        .module('reservation')
        .service('dataService', dataService);

    dataService.$inject = ['$http', '$q'];

    function dataService ($http, $q) {

        var self = this;

        var endpoint = 'https://vesa-reservation.herokuapp.com';

        self.putcustomer = function (customer) {
            var defer = $q.defer();

            $http
                .post(endpoint + '/app/customer', customer)
                .then(function (response) {
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

        self.getuser = function (id) {
            var defer = $q.defer();
            $http
                .get(endpoint + '/app/customer/' + id)
                .then(function (response) {
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        };

        self.updatecust = function (custup, id) {
            var defer = $q.defer();
            console.log(custup);
            $http
                .put(endpoint + '/app/customer/' + id, custup)
                .then(function (response) {
                    defer.resolve(response.data);
                }, function (error) {
                    defer.reject(error.status);
                });
            return defer.promise;
        }
    }


})();