const express = require('express');
const router = express.Router();
const {homepage} = require('../controller/main.js');

router.route('/').get(homepage);

module.exports = router;