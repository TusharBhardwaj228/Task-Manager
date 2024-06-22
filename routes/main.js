const express = require('express');
const router = express.Router();
const {registration, loginPage} = require('../controller/main.js');

router.route('/registration').post(registration);
router.route('/loginPage').post(loginPage);

module.exports = router;