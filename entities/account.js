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

Account.methods.register = function(errHandler) {
    var self = this;
    return exports.model.findById(this.id, function(err, account){
        if (err) {
            return errHandler(err);
        }

        if(account) {
            var err = Error("Account already exist for id: " + self.id);
            return errHandler(err);
        }

        return self.save(function(err){
            errHandler(err);
        });
    })
}

exports.model = mongoose.model('Account', Account);
