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
const deleteTransaction = async (req, res, next) => {
  try {
    // get the Document by id from URL
    const transaction = await Transaction.findById(req.params.id);

    // can not found the Document
    if (!transaction) {
      return res.status(404).json({
        success: false,
        error: 'No transaction found',
      });
    }

    // remove the Document
    await transaction.remove();

    // after remove response
    return res.status(200).json({
      success: true,
      data: {},
    });
  } catch (error) {
    return res.status(500).json({
      success: false,
      error: 'Server Error',
    });
  }
};

module.exports = {
  getTransactions,
  addTransaction,
  deleteTransaction,
};
