const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

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

// server listen to requiest
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.yellow
      .bold,
  ),
);
