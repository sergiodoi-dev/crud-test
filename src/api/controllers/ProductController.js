const ProductService = require('../services/ProductService');

class ProductController {
  constructor() {
    this.productService = new ProductService();
  }

  create = async (req, res, next) => {
    try {
      const product = await this.productService.createProduct(req.body);
      res.status(201).json(product);
    } catch (error) {
      next(error);
    }
  };

  findAll = async (req, res, next) => {
    try {
      const products = await this.productService.getProducts();
      res.json(products);
    } catch (error) {
      next(error);
    }
  };

  findById = async (req, res, next) => {
    try {
      const product = await this.productService.getProductById(req.params.id);
      if (!product) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(product);
    } catch (error) {
      next(error);
    }
  };

  update = async (req, res, next) => {
    try {
      const updatedProduct = await this.productService.updateProduct(req.params.id, req.body);
      if (!updatedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.json(updatedProduct);
    } catch (error) {
      next(error);
    }
  };

  delete = async (req, res, next) => {
    try {
      const deletedProduct = await this.productService.deleteProduct(req.params.id);
      if (!deletedProduct) {
        return res.status(404).json({ message: 'Product not found' });
      }
      res.status(204).send();
    } catch (error) {
      next(error);
    }
  };
}

module.exports = ProductController;
