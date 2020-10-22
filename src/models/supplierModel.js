const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: String,
    city: String,
  },
  {
    toJSON: { virtuals: true, toObject: { virtuals: true } },
  }
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
