// @desc   get all transactions
// @route  GET /api/v1/transactions
// @access Public
const getTransactions = (req, res, next) => {
  res.send('GET transactions');
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
