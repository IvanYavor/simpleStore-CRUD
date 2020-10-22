const mongoose = require('mongoose');

exports.connect = (dbString) => {
  mongoose.connect(dbString, {
    useNewUrlParser: true,
    useCreateIndex: true,
    useFindAndModify: false,
    useUnifiedTopology: true,
  });
};
