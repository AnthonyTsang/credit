var router = require('express').Router();

var index    = require('./routes/index');
var register = require('./routes/user/register');

router.get( '/', index);
router.post('/register', register);

module.exports = router;
