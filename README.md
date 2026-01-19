

# 🎨 Palette – Full-Stack E-Commerce Platform

A modern **digital art marketplace** featuring **role-based authentication**, **admin product management**, and **automated invoice emails**.
Built to demonstrate **real-world full-stack development skills** with **React, Node.js, MongoDB**, and more.

---

## 🧰 Tech Stack & Purpose

### **Frontend**

| Technology               | Purpose                                     |
| ------------------------ | ------------------------------------------- |
| React.js                 | Build a component-based, dynamic UI         |
| Tailwind CSS             | Rapid styling with responsive, clean design |
| React Router DOM         | Client-side routing & protected routes      |
| Context API              | Global state management (Auth & Cart)       |
| Axios                    | API communication with backend              |
| Framer Motion (optional) | Micro-interactions & UI polish              |

### **Backend**

| Technology            | Purpose                                    |
| --------------------- | ------------------------------------------ |
| Node.js               | JavaScript runtime for backend logic       |
| Express.js            | REST API framework                         |
| MongoDB Atlas         | Cloud database for users, products, orders |
| Mongoose              | ODM for schema & data validation           |
| JWT (JSON Web Tokens) | Secure authentication & role-based access  |
| bcrypt                | Password hashing                           |
| Nodemailer            | Automated invoice email on checkout        |
| dotenv                | Environment variable management            |
| cors                  | Enable frontend-backend communication      |

### **Deployment**

| Service       | Purpose                |
| ------------- | ---------------------- |
| Vercel        | Frontend hosting       |
| Render        | Backend hosting        |
| MongoDB Atlas | Managed cloud database |

---

## 🧭 Website Walkthrough (User Journey)

### **1️⃣ Landing / Home Page**

* Displays digital art products
* Category-based filtering (Illustrations, UI Kits, Icons)
* Live search with suggestions
* Hover animations on product cards
* Light/Dark mode toggle

### **2️⃣ Authentication**

**User**

* Register & Login
* JWT-based secure session
* Redirected to home after login

**Admin**

* Login via seeded admin account
* Access to protected admin dashboard

### **3️⃣ Product Details Page**

* Product image, title, price, category
* Simulated stock indicator
* Add-to-cart functionality

### **4️⃣ Cart Page**

* View selected items
* Update quantities
* Remove items
* Auto total calculation
* Checkout button (user-only)

### **5️⃣ Checkout Flow**

* User details confirmation
* Order summary
* Mock payment

**On success:**

* Order saved to database
* Invoice email automatically sent

### **6️⃣ Profile Page**

* View logged-in user details
* Logout functionality
* Extendable for orders, addresses

### **7️⃣ Admin Dashboard**

* Protected (admin-only)
* Add new products
* Delete/update products
* Simple, functionality-focused UI

---

## 🔁 Order & Invoice Flow (Backend)

1. Validate cart
2. Save order in MongoDB
3. Generate invoice summary
4. Send confirmation email via Nodemailer
5. Return success response even if email fails

---

## 💡 Key Notes

* Built with **scalability** in mind: easy to add features like multiple payment options, order history, or user addresses
* Focused on **clean code, modular architecture**, and **production-ready structure**
* Fully **deployed backend + frontend**, recruiter-accessible demo links can be added

---

## 💻 How to Run Locally

### **Frontend**

```bash
cd client
npm install
npm start
```

### **Backend**

```bash
cd server
npm install
npm run dev
```

### **Environment Variables**

Create a `.env` file in `server/`:

```env
PORT=5000
MONGO_URI=<your_mongodb_uri>
JWT_SECRET=<your_jwt_secret>
EMAIL_USER=<your_email>
EMAIL_PASS=<your_email_password>
```

---

## 🏆 Live Demo

> Add your Vercel (frontend) and Render (backend) links here after deployment.

---