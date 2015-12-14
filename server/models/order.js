var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var OrderSchema = new mongoose.Schema({
    _customer: { type: Schema.Types.ObjectId, ref: 'Customer' },
    product: String,
    quantity: { type: Number, min: 1},
    created_at: {type: Date, default: Date.now }
});

var Order = mongoose.model('Order', OrderSchema);