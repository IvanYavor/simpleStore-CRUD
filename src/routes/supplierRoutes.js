const express = require('express');
const supplierController = require('../controllers/supplierController');

const router = express.Router();

router
  .route('/')
  .get(supplierController.getAllSuppliers)
  .post(supplierController.createSupplier);

router
  .route('/:id')
  .get(supplierController.getSupplier)
  .patch(supplierController.updateSupplier)
  .delete(supplierController.deleteSupplier);

module.exports = router;
