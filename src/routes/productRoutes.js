const express = require('express');
const ProductController = require('../api/controllers/ProductController');

const router = express.Router();
const productController = new ProductController();

router.post('/', productController.create);
router.get('/', productController.findAll);
router.get('/:id', productController.findById);
router.put('/:id', productController.update);
router.delete('/:id', productController.delete);

module.exports = router;
