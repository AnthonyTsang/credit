var router = require('express').Router();

var index    = require('./routes/index');
var register = require('./routes/user/register');
var user     = require('./routes/user');

router.get( '/', index);
router.post('/register', register);
router.get( '/user/:id', user)

module.exports = router;
