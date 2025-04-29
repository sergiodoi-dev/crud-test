const ProductRepository = require('../repositories/ProductRepository');

class ProductService {
  constructor() {
    this.productRepository = new ProductRepository();
  }

  async createProduct(data) {
    return await this.productRepository.create(data);
  }

  async getProducts() {
    return await this.productRepository.findAll();
  }

  async getProductById(id) {
    return await this.productRepository.findById(id);
  }

  async updateProduct(id, data) {
    return await this.productRepository.update(id, data);
  }

  async deleteProduct(id) {
    return await this.productRepository.delete(id);
  }
}

module.exports = ProductService;
