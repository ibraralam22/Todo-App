const router = require('express').Router();
const Register = require('../controller/registerController');

// #User_Register
router.post('/register', Register.signUp);

module.exports = router;
