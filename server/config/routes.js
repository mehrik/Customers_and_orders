// Customer controller
// Orders controller
var bodyParser = require('body-parser');
var customers = require('../controllers/customers.js');
var orders = require('../controllers/orders.js');

module.exports = function(app) {
    app.use(bodyParser.json());

    //  Customers
    app.get('/customers/show_all', function(req, res) {
        customers.show_all(req, res);
    });
    app.post('/customers/create', function(req, res) {
        console.log(req.body);
        customers.create(req, res);
    });
    app.post('/customers/delete', function(req, res) {
        customers.delete(req, res);
    });

    // Orders
    app.get('/orders/show_all', function(req, res) {
        orders.show_all(req, res);
    });
    app.post('/orders/create', function(req, res) {
        orders.create(req, res);
    });
    app.post('/orders/deleteAllCustomerOrders', function(req, res) {
        orders.deleteAllCustomerOrders(req, res);
    });
}