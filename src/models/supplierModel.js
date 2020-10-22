const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },
    country: String,
    city: String,
    items: {
      type: mongoose.Schema.ObjectId,
      ref: 'Item',
    },
  },
  {
    toJSON: { virtuals: true, toObject: { virtuals: true } },
  }
);

const Supplier = mongoose.model('Supplier', supplierSchema);

module.exports = Supplier;
