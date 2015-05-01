var router = require('express').Router();

var index    = require('./routes/index');
var register = require('./routes/user/register');
var user     = require('./routes/user');
var userDeposit = require('./routes/user/deposit')
var userWithdraw = require('./routes/user/withdraw');

router.get( '/', index);
router.post('/register', register);
router.get( '/user/:id', user);
router.post('/user/:id/deposit', userDeposit);
router.post('/user/:id/withdraw', userWithdraw);

module.exports = router;
