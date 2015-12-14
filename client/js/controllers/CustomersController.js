angular.module('myApp');

diggity.controller("CustomersController", function($scope, customerFactory, orderFactory) {
    $scope.index = function() {
        customerFactory.show(function (data) {
            $scope.customers = data;
        });
    }
    $scope.addCustomer = function() {
        customerFactory.create($scope.newCustomer, function() {
            $scope.newCustomer = {};
            $scope.index();
        });
    }
    $scope.removeCustomer = function(customer) {
        orderFactory.deleteAllCustomerOrders(customer);
        customerFactory.delete(customer, function() {
            $scope.index();
        })
    }

    $scope.index();
});