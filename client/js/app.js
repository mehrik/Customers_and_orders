// Named this diggity to see how angular module assignment works
// by using "angular.module('myApp')" in my other files, I am still able to use
// the variable diggity when creating a factory, controller, or configuration
// when referencing "angular.module('myApp')", I believe that 'myApp' is used
// for referencing the module
var diggity = angular.module('myApp', ['ngRoute']);
// configuration for angular routes
diggity.config(function ($routeProvider) {
    $routeProvider
        .when('/', {
            redirectTo: '/customers'
        })
        .when('/customers', {
            templateUrl: 'views/partials/customers.html',
            controller: 'CustomersController'
        })
        .when('/orders', {
            templateUrl: 'views/partials/orders.html',
            controller: 'OrdersController'
        })
        .otherwise({
            redirectTo: '/'
        });
});