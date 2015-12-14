var mongoose = require('mongoose');
var Order = mongoose.model('Order');

module.exports = {
    // show all
    show_all: function(req, res) {
        Order.find({})
        .populate('_customer')
        .exec(function(err, orders) {
            res.json(orders);
        });
    },
    // create
    create: function(req, res) {
        var order = new Order({
            _customer: req.body.customer._id,
            product: req.body.product,
            quantity: req.body.quantity
        });
        order.save(function(err) {
            if(err) {
                console.log('Erros while creating an order', err);
            } else {
                console.log('Successfully created an order');
                res.json();
            }
        });
    },
    // delete
    deleteAllCustomerOrders: function(req, res) {
        Order.remove({_customer: req.body._id}, function(err) {
            if(err) {
                console.log('Erros while deleting all orders', err);
            } else {
                console.log('Successfully deleted customer');
                res.json();
            }
        })
    }
}
