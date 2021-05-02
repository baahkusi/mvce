const express = require('express');
const morgan = require('morgan');
const rateLimit = require('express-rate-limit');
const helmet = require('helmet');
// const workers = require('./workers');
const routes = require('./routes');

// Start express app
const app = express();

// 1) GLOBAL MIDDLEWARES

// Set security HTTP headers
app.use(helmet());

app.use(morgan('dev'));

// initialize workers
// if (process.env.NODE_ENV != 'testing') {
//   workers.save_ejara_accounts();
//   workers.save_transaction_history();
// }

// Limit requests from same API
const limiter = rateLimit({
  max: 100,
  windowMs: 60 * 60 * 1000,
  message: 'Too many requests from this IP, please try again in an hour!'
});
app.use(limiter);

//Checking if the request has projects API KEY
// const isAuthorized = (req, res, next) => {
//   const providedKey = req.get('ApiKey');
//   if (
//     providedKey == null ||
//     providedKey == undefined ||
//     providedKey !== process.env.EJARA_TOKEN
//   ) {
//     console.log('Missing or Invalid API KEY');
//     return res.status(400).json({ error: 'Missing or Invalid API KEY' });
//   }
//   //console.log('Valid APIKEY supplied!!' );
//   next();
// };

// app.use(isAuthorized);

// 3) ROUTES
app.use('/api/v1/health', (req, res) => {
  res.status(200).send(`I'm alive ...`);
});

app.use('/api/v1', routes);

app.all('*', (req, res, next) => {
  res.status(404).send(`Can't find ${req.originalUrl} on this server!`);
});

module.exports = app;
