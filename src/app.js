
var logger = require('morgan');
var express = require('express');
var cookieParser = require('cookie-parser');

var mainRouter = require('./routes/main');

// const dbConnection = require('./config/database')
// dbConnection()

var app = express();

app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser());

// Welcome Route
app.get('/', function(req, res, next) {
  return res.status(200).json({ message: 'Welcome to the API', nodeVersion: process.version });
});

// Health Route
app.use('/health', (req, res) => res.status(200).send({ status: 'OK' }))

// Main Routes
app.use('/api', mainRouter);

module.exports = app;

