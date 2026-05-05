# 🚆 RailPulse -  Real-Time Train Location & Transit Monitoring System - API

A robust RESTful backend engine designed to facilitate real-time transit telemetry and train tracking. Engineered with **Node.js + Express** , the system features a secure JWT authentication layer and **MongoDB** for high-performance data persistence. Includes comprehensive **Swagger API Documentation** (OpenAPI)  for standardized integration and testing.

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

```text
project-root/
├─ src/
│  ├─ config/
│  │  └─ database.js
│  ├─ controllers/
│  │  ├─ trainLocationController.js
│  │  └─ userController.js
│  ├─ middleware/
│  │  └─ authMiddleware.js
│  ├─ models/
│  │  ├─ trainLocationModel.js
│  │  └─ userModel.js
│  └─ routes/
│     ├─ trainLocationRoutes.js
│     └─ userRoutes.js
├─ .env               # Not committed to GitHub
├─ .gitignore
├─ package.json
├─ server.js (or index.js)
└─ README.md
