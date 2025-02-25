### **📚 Book Hub: A React Discovery App**  
🚀 **A full-stack web application for discovering and managing books** using **React (TypeScript) for the frontend** and **Node.js with MongoDB for the backend**.  

---

## **📌 Project Overview**  
Book Hub allows users to browse books, filter by genre, author, and rating, and view details about each book.  
- **Users** can **sign up, log in, and browse books.**  
- **Admins** can **add, update, and delete books** via an **Admin Dashboard.**  
- **Secure authentication** using **JWT tokens** ensures only **admins can manage books.**  

---

## **🚀 Features Implemented**
### **Frontend (React + TypeScript)**
✅ **User-friendly interface** for browsing books  
✅ **State management** using Context API  
✅ **Search bar, genre filters, sorting (date, rating, author)**  
✅ **Authentication & authorization (Login/Signup, JWT-based)**  
✅ **Admin Dashboard** (Add, update, delete books)  
✅ **Responsive design** using Material-UI  
✅ **Book images with hover effects**  

### **Backend (Node.js + Express + MongoDB)**
✅ **RESTful API** for book management (CRUD operations)  
✅ **User authentication** (JWT tokens, bcrypt password hashing)  
✅ **Role-based access** (Admins can modify books, users can only read)  
✅ **Database management** (MongoDB Atlas)  

---

## **🛠️ Tech Stack**
### **Frontend**
- **React** (TypeScript)  
- **React Router** (Navigation)  
- **Material-UI** (Styling)  
- **Axios** (API calls)  
- **Context API** (State management)  

### **Backend**
- **Node.js + Express**  
- **MongoDB Atlas** (Database)  
- **Mongoose** (ODM for MongoDB)  
- **JWT (JSON Web Tokens)** (Authentication)  
- **Bcrypt.js** (Password hashing)  

---

## **📂 Project Structure**  
```plaintext
📂 discovery-app (Frontend)
│── 📂 src
│   │── 📂 components
│   │   │── Navbar.tsx
│   │   │── BookCard.tsx
│   │   │── SearchBar.tsx
│   │   │── Filter.tsx
│   │   │── AdminRoute.tsx
│   │── 📂 pages
│   │   │── Home.tsx
│   │   │── Login.tsx
│   │   │── Signup.tsx
│   │   │── AdminDashboard.tsx
│   │── 📂 services
│   │   │── bookService.ts
│   │   │── authService.ts
│   │── App.tsx
│   │── index.tsx
│── 📂 public
│── package.json
│── README.md

📂 discovery-app-backend (Backend)
│── 📂 src
│   │── 📂 config
│   │   │── db.js
│   │── 📂 models
│   │   │── Book.js
│   │   │── User.js
│   │── 📂 routes
│   │   │── bookRoutes.js
│   │   │── authRoutes.js
│   │── 📂 controllers
│   │   │── bookController.js
│   │   │── authController.js
│   │── 📂 middleware
│   │   │── authMiddleware.js
│   │── seedBooks.js
│   │── server.js
│── package.json
│── .env
│── README.md
```

---

## **📜 API Endpoints**
### **Authentication Routes**
| Method | Endpoint         | Description                |
|--------|-----------------|----------------------------|
| POST   | `/api/auth/register` | Register a new user  |
| POST   | `/api/auth/login`    | Login and get JWT token |

### **Book Management Routes**
| Method | Endpoint          | Description             |
|--------|------------------|-------------------------|
| GET    | `/api/books`       | Get all books          |
| GET    | `/api/books/:id`   | Get book by ID         |
| POST   | `/api/books`       | Add new book (Admin)   |
| PUT    | `/api/books/:id`   | Update book (Admin)    |
| DELETE | `/api/books/:id`   | Delete book (Admin)    |

---

## **🔐 Authentication & Authorization**
- **Users can register and log in**  
- **JWT tokens are used for authentication**  
- **Admins have additional permissions**:  
  - Can **add, edit, and delete** books  
  - Users **can only view** books  

---

## **🚀 Setup & Installation**
### **1️⃣ Clone the Repository**
```bash
git clone https://github.com/summative-a-react-discovery-app-Telesphore-Uwabera.git
cd discovery-app
```

### **2️⃣ Setup Backend**
```bash
cd discovery-app-backend
npm install
```
- Create a `.env` file:
```env
MONGO_URI=mongodb+srv://bookHubDB:91073Tecy@cluster.mongodb.net/bookHubDB
JWT_SECRET=xxx
PORT=5000
```
- **Run the backend**
```bash
node server.js
```

### **3️⃣ Setup Frontend**
```bash
cd ../discovery-app
npm install
npm start
```
✅ **Open:** `http://localhost:3000`

---

## **📸 UI & Functionality**
### **Login & Signup Pages**
- 📝 **Users can register & log in**
- 🔐 **JWT-based authentication**
- ✅ **Redirects:**
  - **Users → Home Page**
  - **Admins → Admin Dashboard**
- 🚀 **Signup Success Message** before redirecting to login
- 📌 **Login Page includes:** _"If you have no account, you can sign up here."_

### **Home Page**
- 📚 **Displays books with images**
- 🔍 **Search, filter (genre, author, date, rating)**
- 📖 **Responsive & interactive UI**
- ✨ **Hover effects on book images**

### **Admin Dashboard**
- ➕ **Add books**
- ✏️ **Edit books**
- ❌ **Delete books**
- 🚀 **Only accessible to Admins**

---

## **🎯 Assessment Criteria & Completion**
| Criteria | Status |
|----------|--------|
| **React Components & Lifecycle** | ✅ Implemented |
| **State Management** (Context API) | ✅ Implemented |
| **TypeScript for Type Safety** | ✅ Implemented |
| **Responsive & User-Friendly UI** | ✅ Fully Responsive |
| **RESTful API (Node.js & MongoDB)** | ✅ Implemented |
| **Authentication & Authorization** | ✅ Fully Functional |
| **Search, Filtering, Sorting** | ✅ Implemented |
| **Admin Role (CRUD for Books)** | ✅ Implemented |

---

## **📌 Future Enhancements**
- ⭐ **User book ratings & reviews**
- 📆 **Pagination for large book lists**
- 🚀 **Deployment to Vercel/Heroku**
- 📌 **Dark Mode UI**

---

## **👨‍💻 Contributors**
- **Telesphore Uwabera** - *Developer*

---

## **📜 License**
This project is **MIT Licensed**.

---

## **📣 Acknowledgments**
Big thanks to **Material-UI** and **MongoDB** for making development smooth!

🚀 **Happy Coding!** 🖥️📚🎉
