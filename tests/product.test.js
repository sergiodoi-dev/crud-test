const request = require('supertest');
const app = require('../src/app');
const mongoose = require('mongoose');
const Product = require('../src/api/models/Product');
const { MONGO_URI } = require('../src/config/env');

let server;
let createdProductId;

beforeAll(async () => {
  await mongoose.connect(MONGO_URI);
  server = app.listen(4000); // Usamos otro puerto para pruebas
});

afterAll(async () => {
  await Product.deleteMany(); // Limpiar colección
  await mongoose.connection.close();
  server.close();
});

describe('Product API', () => {
  it('should create a product', async () => {
    const res = await request(app)
      .post('/api/products')
      .send({
        name: 'Test Product',
        weight: 1.5,
        quantity: 100
      });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toHaveProperty('_id');
    createdProductId = res.body._id;
  });

  it('should retrieve all products', async () => {
    const res = await request(app).get('/api/products');
    expect(res.statusCode).toEqual(200);
    expect(Array.isArray(res.body)).toBe(true);
    expect(res.body.length).toBeGreaterThan(0);
  });

  it('should retrieve a product by id', async () => {
    const res = await request(app).get(`/api/products/${createdProductId}`);
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Test Product');
  });

  it('should update a product', async () => {
    const res = await request(app)
      .put(`/api/products/${createdProductId}`)
      .send({
        name: 'Updated Product',
        weight: 2.0,
        quantity: 150
      });
    expect(res.statusCode).toEqual(200);
    expect(res.body).toHaveProperty('name', 'Updated Product');
    expect(res.body.quantity).toBe(150);
  });

  it('should delete a product', async () => {
    const res = await request(app).delete(`/api/products/${createdProductId}`);
    expect(res.statusCode).toEqual(204);
  });

  it('should return 404 for non-existent product', async () => {
    const res = await request(app).get(`/api/products/644b4b4b4b4b4b4b4b4b4b4b`);
    expect(res.statusCode).toBe(404);
    expect(res.body).toHaveProperty('message', 'Product not found');
  });
});
