# 🧪 CRUD Test — Full Stack Developer Challenge

This is a backend REST API project called **crud-test**. It implements a complete **Product CRUD service** using clean architecture, Node.js, MongoDB, and follows professional development practices.

---

## 🛠️ Technologies

- **Node.js** with Express
- **MongoDB** using Mongoose
- **Jest** and **Supertest** for testing
- **ESLint** + **Prettier** for linting and formatting
- **Postman** for manual testing
- **Helmet**, **CORS**, **Morgan** for security and logging

---

## 📦 Features

- Clean code architecture (Controller, Service, Repository)
- RESTful API
- Centralized error handling
- Fully unit tested endpoints
- Data validation with Mongoose
- Separation of concerns (OOP)
- Dependency injection-ready structure
- Secure HTTP headers and CORS setup
- Logging with Morgan
- Collection for Postman included

---

## 📁 Project Structure

```
crud-test/
├── src/
│   ├── api/
│   │   ├── controllers/
│   │   ├── services/
│   │   ├── repositories/
│   │   ├── models/
│   │   ├── middlewares/
│   │   └── utils/
│   ├── config/
│   ├── database/
│   ├── routes/
│   ├── app.js
│   └── server.js
├── tests/
├── .env
├── .eslintrc.json
├── .prettierrc
├── package.json
└── README.md
```

---

## 📦 Installation

### Requirements

- Node.js >= 18.x
- MongoDB running locally or in Docker

### Steps

```bash
git clone https://github.com/yourusername/crud-test.git
cd crud-test
npm install
cp .env.example .env  # Then configure Mongo URI
npm run dev
```

> MongoDB default URI: `mongodb://localhost:27017/crud-test`

---

## 🧪 Testing the API

### Run server in development mode:

```bash
npm run dev
```

### Run tests:

```bash
npm test
```

### Test with Postman

- Import the file: `crud-test.postman_collection.json`
- Try all the routes:

| Method | Endpoint            | Description            |
|--------|---------------------|------------------------|
| POST   | `/api/products`     | Create a new product   |
| GET    | `/api/products`     | Get all products       |
| GET    | `/api/products/:id` | Get a single product   |
| PUT    | `/api/products/:id` | Update a product       |
| DELETE | `/api/products/:id` | Delete a product       |

### Example JSON Body

```json
{
  "name": "Notebook",
  "weight": 1.8,
  "quantity": 25
}
```

---

## 🧠 Architecture Diagram

```
[Client] 
   │
[Express Server]
   │
[Controller] ──> [Service] ──> [Repository] ──> [MongoDB]
```

This project follows **Clean Architecture principles** using the **Repository Pattern** and **OOP practices**.

---

## ✨ Best Practices Applied

- ✅ Separation of concerns
- ✅ Error handling middleware
- ✅ Linter + formatter
- ✅ Dependency injection ready
- ✅ Request validation at model level
- ✅ Testable components
- ✅ Secure by default with Helmet & CORS

---

## 🧪 Sample Test (Jest + Supertest)

```js
it('should create a product', async () => {
  const res = await request(app)
    .post('/api/products')
    .send({ name: 'Laptop', weight: 2.5, quantity: 10 });
  expect(res.statusCode).toBe(201);
  expect(res.body).toHaveProperty('_id');
});
```

---

## 📮 Contact

**Created for a Full Stack Developer technical test**  
Author: [Your Name]  
Email: you@example.com  
GitHub: [@yourusername](https://github.com/yourusername)

---

## 📝 License

MIT License
