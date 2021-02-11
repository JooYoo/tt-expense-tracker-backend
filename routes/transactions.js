const express = require('express');
const router = express.Router();

// the router of the app will get response
router.get('/', (req, res) => res.send('Hello router'));

module.exports = router;
