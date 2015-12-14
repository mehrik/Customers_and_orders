angular.module('myApp');

diggity.controller('OrdersController', function($scope, orderFactory, customerFactory) {
    $scope.index = function() {
        orderFactory.show(function (data) {
            $scope.orders = data;
        })
        customerFactory.show(function (data) {
            $scope.customers = data;
        })
    }
    $scope.addOrder = function() {
        orderFactory.add($scope.newOrder, function(){
            $scope.newOrder = {};
            $scope.index();
        });
    }

    $scope.index();
});
