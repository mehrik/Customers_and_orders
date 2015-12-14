var mongoose = require('mongoose');
var Customer = mongoose.model('Customer');

module.exports = {
    // show all
    show_all: function(req, res) {
        Customer.find({}, function(err, customers) {
            res.json(customers);
        });
    },
    // create
    create: function(req, res) {
        var customer = new Customer({
            name: req.body.name
            // Default date is in the customer model
        });
        customer.save(function(err) {
            if(err) {
                console.log('Errors while creating a person', err);
            } else {
                console.log('Successfully added customer');
                res.json();
            }
        });
    },
    // delete
    delete: function(req, res) {
        Customer.remove({ _id: req.body._id }, function(err) {
            if(err) {
                console.log('Errors while delete a person', err);
            } else {
                console.log('Successfully deleted customer');
                res.json();
            }
        })
    }
    // update
}