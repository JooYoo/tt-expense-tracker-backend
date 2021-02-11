const express = require('express');
const router = express.Router();

// get route-controllers
const {
  getTransactions,
  addTransactions,
  deleteTransaction,
} = require('../controllers/transactions');

// init routes via controller
router.route('/').get(getTransactions).post(addTransactions);

router.route('/:id').delete(deleteTransaction);

module.exports = router;
