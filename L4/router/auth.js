const express = require('express');
const router = express.Router();
const  login  = require('../controller/auth')


router.post('/', login)

module.exports = router  