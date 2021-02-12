const express = require('express');
const router = express.Router();

// import route-controllers
const {
  getTransactions,
  addTransaction,
  deleteTransaction,
} = require('../controllers/transactions');

// init routes via controller
router.route('/').get(getTransactions).post(addTransaction);
router.route('/:id').delete(deleteTransaction);

module.exports = router;
