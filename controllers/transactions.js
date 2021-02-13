const Transaction = require('../models/Transaction');

// @desc   get all transactions
// @route  GET /api/v1/transactions
// @access Public
const getTransactions = async (req, res, next) => {
  try {
    const transactions = await Transaction.find();

    return res.status(200).json({
      success: true,
      count: transactions.length,
      data: transactions,
    });
  } catch (err) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

// @desc   add transactions
// @route  POST /api/v1/transactions
// @access Public
const addTransaction = (req, res, next) => {
  res.send('POST transactions');
};

// @desc   delete transactions
// @route  DELETE /api/v1/transactions/:id
// @access Public
const deleteTransaction = (req, res, next) => {
  res.send('DELETE transactions');
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction,
};
