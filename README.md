# 💰 Finance Tracker

A simple and responsive Full-Stack Finance Tracker Web App to manage income and expenses efficiently 📊

---

## ✨ Features

✅ User Login & Authentication  
✅ Add Income & Expenses  
✅ Daily / Weekly / Monthly Reports  
✅ Expense Analytics Charts 📈  
✅ Responsive Dashboard using Bootstrap  
✅ MySQL Database Integration  
✅ Real-time Balance Calculation  

---

## 🛠️ Tech Stack

### 🎨 Frontend
- HTML
- CSS
- Bootstrap
- JavaScript

### ⚙️ Backend
- Node.js
- Express.js

### 🗄️ Database
- MySQL
- XAMPP

---

## 📂 Project Structure


Finance-Tracker/
│
├── Backend/
├── LoginPage/
├── TrackerPage/
└── README.md
```

## 🚀 Installation

### 1️⃣ Clone Repository

git clone https://github.com/Shravya886/Finance-Tracker.git


### 2️⃣ Install Dependencies


npm install

### 3️⃣ Start XAMPP
Start:
- Apache
- MySQL

### 4️⃣ Run Server


node server.js

Open in browser:

http://localhost:3000

---

## 🗃️ Database Setup

```sql
CREATE DATABASE finance_tracker;

CREATE TABLE expenses (
  id INT AUTO_INCREMENT PRIMARY KEY,
  type VARCHAR(20),
  category VARCHAR(100),
  amount DECIMAL(10,2),
  description TEXT,
  date DATE
);
```

---

## 📊 Dashboard Includes

💵 Income Tracking  
💸 Expense Tracking  
📅 Daily Reports  
📆 Weekly Reports  
🗓️ Monthly Reports  
📈 Expense Charts  
⚡ Balance Summary  

---

## 🌟 Future Improvements

- 📄 Export PDF Reports
- 🌙 Dark Mode
- 🤖 AI Expense Suggestions
- 📱 Mobile App Version

---

## 📚 Learning Outcomes

✔️ Full Stack Development  
✔️ CRUD Operations  
✔️ Database Integration  
✔️ API Handling  
✔️ Data Visualization  

---

## 👩‍💻 Author
Shravya Mididoddi
