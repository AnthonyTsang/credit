var router = require('express').Router();

var index    = require('./routes/index');
var register = require('./routes/user/register');
var user     = require('./routes/user');
var userDeposit = require('./routes/user/deposit')

router.get( '/', index);
router.post('/register', register);
router.get( '/user/:id', user);
router.post('/user/:id/deposit', userDeposit);

module.exports = router;
