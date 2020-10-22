const Item = require('../models/itemModel');
const catchAsync = require('../helpers/catchAsync');
const AppError = require('../helpers/appError');

exports.getAllItems = catchAsync(async (req, res, next) => {
  const items = await Item.find();

  res.status(200).json({
    status: 'success',
    results: items.length,
    data: {
      items,
    },
  });
});

exports.getItem = catchAsync(async (req, res, next) => {
  const item = await Item.findById(req.params.id);

  if (!item) {
    return next(new AppError('No item found with this id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

exports.createItem = catchAsync(async (req, res, next) => {
  const newItem = await Item.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      item: newItem,
    },
  });
});

exports.updateItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!item) {
    return next(new AppError('No item found with this id', 404));
  }

  res.status(200).json({
    status: 'success',
    data: {
      item,
    },
  });
});

exports.deleteItem = catchAsync(async (req, res, next) => {
  const item = await Item.findByIdAndDelete(req.params.id);

  if (!item) {
    return next(new AppError('No item found with this id', 404));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
});
