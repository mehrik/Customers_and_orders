angular.module('myApp');

diggity.factory('orderFactory', function($http) {
    var factory = {};
    var orders = [
        { customer: 'Customer', product: 'Product', quantity: '# of items', created_at: 'Created_at' },
    ];

    factory.show = function(callback) {
        $http.get('/orders/show_all').success(function (output) {
            console.log(output)
            orders = output;
            callback(orders);
        });
    }
    factory.add = function(data, callback) {
        $http.post('/orders/create', data).success(function (output) {});
        callback();
    }
    factory.deleteAllCustomerOrders = function(data, callback) {
        $http.post('/orders/deleteAllCustomerOrders', data).success(function (output) {});
    }

    return factory;
});