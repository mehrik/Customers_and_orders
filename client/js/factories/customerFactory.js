angular.module('myApp');

diggity.factory("customerFactory", function($http) {
    var customers = [];
    var factory = {};

    factory.show = function(callback) {
        $http.get('/customers/show_all').success(function (output) {
            customers = output;
            callback(customers);
        });
    }
    factory.create = function(newCustomer, callback) {
        $http.post('/customers/create', newCustomer).success(function (output) {})
        callback();
    }
    factory.delete = function(customer, callback) {
        $http.post('/customers/delete', customer).success(function (output) {})
        callback();
    }
    return factory;
});
