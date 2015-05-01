var Account = require('../../entities/account').model;

module.exports = function(req, res, next) {
    var id = req.params.id;
    var amount = req.body.amount;

    return Account.findById(id, function(err,account){
        if (err) {
            console.log(err);
            return res.send({
                "msg": err.message
            });            
        }
        
        if (!account) {
            var err = new Error("User not found for id: " + id);
            console.error(err);
            return res.send({
                "msg": err.message
            });
        }

        return account.deposit(amount, function(err){
            if (err) {
                console.error(err);
                return res.send({
                    "msg": err.message
                });
            }
            
            return res.send(account);            
        })
    });
};
