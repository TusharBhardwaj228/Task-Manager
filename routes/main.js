const express = require('express');
const router = express.Router();
const {homepage} = require('../controller/main.js');

router.route('/').post(homepage);

module.exports = router;