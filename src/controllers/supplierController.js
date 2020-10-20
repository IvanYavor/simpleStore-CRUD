const Supplier = require('../models/supplierModel');

exports.getAllSuppliers = async (req, res, next) => {
  const suppliers = await Supplier.find();

  res.status(200).json({
    status: 'success',
    results: suppliers.length,
    data: {
      suppliers,
    },
  });
};

exports.getSupplier = async (req, res, next) => {
  const supplier = await Supplier.findById(req.params.id);

  if (!supplier) {
    //   TODO: custom error
    return next(new Error('No supplier found with this id'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      supplier,
    },
  });
};

exports.createSupplier = async (req, res, next) => {
  const newSupplier = await Supplier.create(req.body);

  res.status(201).json({
    status: 'success',
    data: {
      supplier: newSupplier,
    },
  });
};

exports.updateSupplier = async (req, res, next) => {
  const supplier = await Supplier.findByIdAndUpdate(req.params.id, req.body, {
    new: true,
  });

  if (!supplier) {
    //TODO: custom error
    return next(new Error('No supplier found with this id'));
  }

  res.status(200).json({
    status: 'success',
    data: {
      supplier,
    },
  });
};

exports.deleteSupplier = async (req, res, next) => {
  const supplier = await Supplier.findByIdAndDelete(req.params.id);

  if (!supplier) {
    //   TODO: custom error
    return next(new Error('No supplier found with this id'));
  }

  res.status(204).json({
    status: 'success',
    data: null,
  });
};
