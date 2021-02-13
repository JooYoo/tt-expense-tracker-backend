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
const addTransaction = async (req, res, next) => {
  try {
    // destructuring the request data
    const { text, amount } = req.body;

    const transaction = await Transaction.create(req.body);

    return res.status(201).json({
      success: true,
      data: transaction,
    });
  } catch (err) {
    if (err.name === 'ValidationError') {
      // the error message defined in model
      const messages = Object.values(err.errors).map((val) => val.message);

      return res.status(400).json({
        success: false,
        error: messages,
      });
    } else {
      return res.status(500).json({
        success: false,
        error: 'Sever Error',
      });
    }
  }
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
