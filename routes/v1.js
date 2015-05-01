var router = require('express').Router();

var index    = require('./index');
var register = require('./register');
var user     = require('./user');
var userDeposit = require('./user/deposit')
var userWithdraw = require('./user/withdraw');

router.get( '/', index);
router.post('/register', register);
router.get( '/user/:id', user);
router.post('/user/:id/deposit', userDeposit);
router.post('/user/:id/withdraw', userWithdraw);

module.exports = router;
