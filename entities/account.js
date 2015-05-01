var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var Account = new Schema({
    _id: {
        type: Number,
        required: true
    },
    amount: {
        type: Number,
        default: 0
    },
    modified: {
        type: Date,
        default: Date.now
    }
});

exports.model = mongoose.model('Account', Account);
