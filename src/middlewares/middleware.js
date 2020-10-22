const express = require('express');
const mongoSanitize = require('express-mongo-sanitize');
const globalErrorHandler = require('../controllers/errorController');

// const app = express();

const bodyParser = (a) => {
  a.use(
    express.json({
      limit: '10kb',
    })
  );
};

// Data sanitization against NoSQL query injection
const sanitizeDataNoSQL = (a) => {
  a.use(mongoSanitize());
};

exports.globalErrorHandler = (a) => {
  a.use(globalErrorHandler);
};

exports.globalMiddlewares = (a) => {
  bodyParser(a);
  sanitizeDataNoSQL(a);
};
