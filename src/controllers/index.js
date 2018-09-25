const express = require('express');
const router = express.Router();

router.use('/category', require('./category'));
router.use('/search', require('./search'));

module.exports = router;