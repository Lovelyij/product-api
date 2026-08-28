\# Product Management API



A RESTful API for managing products in an e-commerce platform, built as Task 1 of the backend development internship. Supports full CRUD operations on products with validation and proper error handling.



\## Project Overview



This API allows administrators to create, retrieve, update, and delete products. It's built with a clean, modular structure separating models, controllers, routes, and validation logic.



\## Tech Stack



\- \*\*Runtime:\*\* Node.js

\- \*\*Framework:\*\* Express.js

\- \*\*Database:\*\* MongoDB (via Mongoose)

\- \*\*Validation:\*\* Joi



\## Installation



1\. Clone the repository:

```bash

&#x20;  git clone https://github.com/Lovelyij/product-api.git

&#x20;  cd product-api

```



2\. Install dependencies:

```bash

&#x20;  npm install

```



3\. Create a `.env` file in the root directory (see \[Environment Variables](#environment-variables) below).



4\. Start the server:

```bash

&#x20;  npm run dev

```

&#x20;  The API will run on `http://localhost:5000` by default.



\## Environment Variables



Create a `.env` file with the following:



MONGODB\_URI=your\_mongodb\_connection\_string

PORT=5000





| Variable      | Description                              |

|---------------|-------------------------------------------|

| `MONGODB\_URI` | MongoDB Atlas (or local) connection string |

| `PORT`        | Port the server runs on (default: 5000)   |



\## Database Setup



1\. Create a free MongoDB Atlas cluster at \[mongodb.com/atlas](https://www.mongodb.com/atlas).

2\. Create a database user and whitelist your IP address under Network Access.

3\. Copy your connection string and add it to `.env` as `MONGODB\_URI`.

4\. The `Product` collection is created automatically the first time a product is added.



\## API Endpoints



Base URL: `/api/products`



| Method | Endpoint             | Description              |

|--------|-----------------------|--------------------------|

| POST   | `/api/products`       | Create a new product     |

| GET    | `/api/products`       | Retrieve all products    |

| GET    | `/api/products/:id`   | Retrieve a single product|

| PUT    | `/api/products/:id`   | Update a product         |

| DELETE | `/api/products/:id`   | Delete a product         |



\### Product Fields



| Field         | Type   | Required | Notes                          |

|---------------|--------|----------|----------------------------------|

| name          | String | Yes      | Cannot be empty                |

| price         | Number | Yes      | Must be greater than 0         |

| description   | String | No       |                                  |

| stockQuantity | Number | Yes      | Cannot be negative             |

| category      | String | No       |                                  |

| imageUrl      | String | No       | Must be a valid URL if provided|



\### Example Request (Create Product)



```json

POST /api/products

{

&#x20; "name": "Wireless Mouse",

&#x20; "price": 15.99,

&#x20; "description": "Ergonomic wireless mouse",

&#x20; "stockQuantity": 50,

&#x20; "category": "Electronics"

}

```



\### Example Response



```json

{

&#x20; "\_id": "64f...",

&#x20; "name": "Wireless Mouse",

&#x20; "price": 15.99,

&#x20; "description": "Ergonomic wireless mouse",

&#x20; "stockQuantity": 50,

&#x20; "category": "Electronics",

&#x20; "createdAt": "2026-08-28T...",

&#x20; "updatedAt": "2026-08-28T..."

}

```



\### Error Responses



| Status | Meaning                          |

|--------|-----------------------------------|

| 400    | Validation error or invalid ID    |

| 404    | Product not found                 |

| 500    | Server error                      |



\## Project Structure



product-api/

├── config/

│ └── db.js

├── models/

│ └── Product.js

├── validators/

│ └── productValidator.js

├── controllers/

│ └── productController.js

├── routes/

│ └── productRoutes.js

├── server.js

└── .env





\## Author



Lovelyn Ijeoma Kalu





