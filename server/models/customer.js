var mongoose = require('mongoose');
// Scehma is used to enable models to read and understand ObjectId attributes that the mongoDB automatically generates
var Schema = mongoose.Schema;

var CustomerSchema = new mongoose.Schema({
    name: { type: String, required: true, minlength: 4 },
    created_at: { type: Date, default: Date.now },
    orders: [{ type: Schema.Types.ObjectId, ref: 'Order' }]
})

var Customer = mongoose.model('Customer', CustomerSchema);