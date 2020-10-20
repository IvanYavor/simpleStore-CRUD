const mongoose = require('mongoose');

const itemSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'An item must have a name'],
    },

    price: {
      type: Number,
      required: [true, 'An item must have a price'],
    },

    category: {
      type: String,
      required: [true, 'An item must have a category'],
      enum: {
        values: ['computers', 'mobile phones', 'cameras', 'clothing'],
        message: 'There is no such category',
      },
    },

    suppliers: [
      {
        type: mongoose.Schema.ObjectId,
        ref: 'Supplier',
      },
    ],

    expirationDate: {
      type: Date,
      required: true,
    },

    measurability: {
      type: String,
      required: true,
      enum: {
        values: ['kilograms', 'pieces', 'liters'],
        message: 'There is no such type of measurability',
      },
    },

    quantity: {
      type: Number,
      default: 0,
    },
  },
  {
    toJSON: { virtuals: true, toObject: { virtuals: true } },
  }
);

const Item = mongoose.model('Item', tourSchema);

module.exorts = Tour;
