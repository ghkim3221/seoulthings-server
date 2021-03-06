const express = require('express');
const router = express.Router();

router.use('/category', require('./category'));
router.use('/firebase', require('./firebase'));
router.use('/search', require('./search'));
router.use('/thing', require('./thing'));

module.exports = router;