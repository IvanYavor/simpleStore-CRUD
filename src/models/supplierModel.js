const mongoose = require('mongoose');

const supplierSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  country: String,
  city: String,
});

const Supplier = mongoose.model('Item', supplierSchema);

module.exorts = Supplier;
