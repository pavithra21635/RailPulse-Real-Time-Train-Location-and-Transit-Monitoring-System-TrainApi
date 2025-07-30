# 🚆 Real-Time Train Location API

A **Node.js + Express** REST API for tracking train locations and managing user authentication with **JWT**.  
This project uses **MongoDB** for storing train location data and includes **Swagger API Documentation**.

---

## 📌 Features

- 🔐 **User Authentication** with JWT (Login & Register)
- 📍 **Train Location Tracking** – Fetch the last 10 train locations
- 🗄️ **MongoDB & Mongoose** for data storage
- 📄 **Swagger Documentation** for all endpoints
- 🌐 **CORS Enabled** for cross-domain requests
- ⚡ **Secure Environment Variables** (No secrets in the repo)

---

## 🛠 Tech Stack

- **Node.js**
- **Express.js**
- **MongoDB & Mongoose**
- **JWT (jsonwebtoken)**
- **bcrypt.js** (for password hashing)
- **Swagger UI & swagger-jsdoc**
- **dotenv** (for environment variables)

---

## 📂 Project Structure

project-root/
├── src/
│ ├── config/
│ │ └── database.js
│ ├── controllers/
│ │ ├── trainLocationController.js
│ │ └── userController.js
│ ├── middleware/
│ │ └── authMiddleware.js
│ ├── models/
│ │ ├── trainLocationModel.js
│ │ └── userModel.js
│ └── routes/
│ ├── trainLocationRoutes.js
│ └── userRoutes.js
├── .env (Not committed to GitHub)
├── .gitignore
├── package.json
├── server.js (or index.js)
└── README.md
