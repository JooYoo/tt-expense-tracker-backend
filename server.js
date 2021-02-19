const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');
const path = require('path');

// init express
const app = express();
// init config
dotenv.config({ path: './config/config.env' });
// init routes
const transactions = require('./routes/transactions');
// init db
const connectDB = require('./config/db');
connectDB();

// setup port
const PORT = process.env.PORT || 5000;

// available bodyParser to allow add new data
app.use(express.json());

// mount routes and set the endpoint
app.use('/api/v1/transactions', transactions);

// when server start also load client build result
if (process.env.NODE_ENV === 'production') {
  app.use(express.static('../client/build'));

  app.get('*', (req, res) => {
    res.sendFile(
      path.resolve(__dirname, '../', 'client', 'build', 'index.html'),
    );
  });
}

// server listen to requiest
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.yellow
      .bold,
  ),
);
