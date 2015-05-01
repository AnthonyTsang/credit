var Account = require('../../entities/account');

module.exports = function(req, res, next) {
    var id = req.body.id,
        account = new Account.model({
            _id: id | 0
        });

    if (!id || id % 1 != 0) {
        var err = new Error("id is must be an integer");
        console.error(err);
        return res.send({
            "msg": err.message
        });
    }

    return account.register(function(err){
        if (err) {
            console.log(err);
            return res.send({
                "msg": err.message
            });
        }
        
        return res.send(account);
    });
};
