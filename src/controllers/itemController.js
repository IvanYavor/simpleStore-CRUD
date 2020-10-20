const Item = require('../models/itemModel');

exports.getAllItems = async (req, res, next) => {
  const items = await Item.find();

  res.status(200).json({
    status: 'success',
    results: items.length,
    data: {
      items,
    },
  });
};

exports.getItem = async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    //   TODO: custom error
    return next(new Error('No item found with this id'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
};

exports.createItem = async (req, res, next) => {
  const newItem = await Item.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      item: newItem,
    },
  });
};

exports.updateItem = async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!item) {
    //TODO: custom error
    return next(new Error('No item found with this id'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
};

exports.deleteItem = async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);

  if (!item) {
    //   TODO: custom error
    return next(new Error('No item found with this id'));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
