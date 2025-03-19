# 📌 Task Manager Backend

This is the **backend** for the Task Manager app, built using **Node.js, Express, and MongoDB**. It handles **authentication, CRUD operations, and Google Sheets import functionality**.

## 🚀 Features

✅ **User Authentication (JWT-based)**  
✅ **CRUD APIs for Tasks**  
✅ **Google Sheets Import (Public Link Support)**  
✅ **Pagination, Search, and Filtering**  
✅ **Error Handling & Validations**  
✅ **Secure MongoDB Atlas Integration**

---

## 📦 Tech Stack

- **Node.js** + **Express.js** (Backend API)
- **MongoDB + Mongoose** (Database)
- **JWT Authentication** (Login/Signup)
- **Google Sheets API** (Import Tasks)
- **ES6 Module Support** (Modern JavaScript)

---

## ⚡ Installation & Setup

### 1️⃣ Clone the Repository

```sh
git clone https://github.com/vaibhav-chittora/Clikd-Google-Sheets-Import-Backend.git

cd task-manager-backend
```

### 2️⃣ Install Dependencies

```sh
npm install
```

### 3️⃣ Set Up Environment Variables

Create a **.env** file in the root folder and add the following:

```env
PORT=3000
MONGO_URI=your_mongodb_atlas_uri
JWT_SECRET=your_secret_key
```

### 4️⃣ Start the Server

```sh
npm run dev
```

The backend will be running at **http://localhost:3000** 🚀

Live backend URL - **https://clikd-google-sheets-import-backend.onrender.com**

---

## 🔗 API Endpoints

### **Auth Routes** 🔐

| Method | Endpoint             | Description                  |
| ------ | -------------------- | ---------------------------- |
| POST   | `/api/auth/register` | Register a new user          |
| POST   | `/api/auth/login`    | Login user and get JWT token |

### **Task Routes** 📌

| Method | Endpoint                              | Description           |
| ------ | ------------------------------------- | --------------------- |
| GET    | `/api/tasks`                          | Fetch all tasks       |
| GET    | `/api/tasks/paginated?page=1&limit=5` | Fetch paginated tasks |
| POST   | `/api/tasks`                          | Create a new task     |
| PUT    | `/api/tasks/:id`                      | Update a task         |
| DELETE | `/api/tasks/:id`                      | Delete a task         |

### **Google Sheets Import** 📊

| Method | Endpoint      | Description                     |
| ------ | ------------- | ------------------------------- |
| POST   | `/api/import` | Import tasks from Google Sheets |

---

## 🛠️ Additional Info

- **Make sure MongoDB Atlas is connected properly** ✅
- **Use valid Google Sheets Public Link for imports** ✅
- **JWT token required for all protected routes** ✅
