const express = require('express');
const supplierRouter = require('./routes/supplierRoutes');
const itemRouter = require('./routes/itemRoutes');
const AppError = require('./helpers/appError');
const middleware = require('./middlewares/middleware');

const app = express();

// GLOBAL MIDDLEWARES

middleware.globalMiddlewares(app);

// ROUTES
app.use('/store/items', itemRouter);
app.use('/store/suppliers', supplierRouter);

app.all('*', (req, res, next) => {
  next(new AppError(`Can't find ${req.originalUrl} on the server!`, 404));
});

middleware.globalErrorHandler(app);

module.exports = app;
