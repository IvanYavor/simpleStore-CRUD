const AppError = require('../helpers/appError');

const handleCastErrorDb = (err) => {
  const message = `Invalid ${err.path} : ${err.value}.`;
  return new AppError(message, 400);
};
