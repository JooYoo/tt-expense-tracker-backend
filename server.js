const express = require('express');
const dotenv = require('dotenv');
const colors = require('colors');
const morgan = require('morgan');

// init express
const app = express();
// init config
dotenv.config({ path: './config/config.env' });

// setup port
const PORT = process.env.PORT || 5000;

// app get response from Server
app.get('/', (req, res) => res.send('Hello Yu'));
// server listen to requiest
app.listen(
  PORT,
  console.log(
    `Server running in ${process.env.NODE_ENV} mode on port:${PORT}`.yellow
      .bold,
  ),
);
