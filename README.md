📊 Expense Tracker — React + Context API

A clean and modern Expense Tracker Application built with React, Context API, useReducer, LocalStorage, and React-Datepicker.
It supports full CRUD, filtering, memoized totals, responsive UI, and mobile card-view layout.

<br/>
⭐ Features
🧾 Transaction Management

Add new transactions

Edit transactions

Delete transactions

Income / Expense types

Auto decimal formatting (200 → 200.00)

Multiline descriptions preserved

Auto-generated IDs

Fully controlled forms

LocalStorage persistence

🔍 Smart Filters

Filter transactions by:

Type (Income / Expense / All)

Category

Date Range (with React DatePicker)

All filters work together and update results instantly.

📈 Dynamic Totals

Total Income

Total Expenses

Current Balance

Auto-calculated using useMemo for performance

🎨 UI / UX Highlights

Modern dark theme

Custom modal using <dialog> + createPortal()

Mobile-responsive layout

Transactions table converts to card-style layout on small screens

Smooth spacing, shadows, and rounded UI elements

<br/>
🛠️ Tech Stack
Layer	Technology
Frontend	React (Hooks, Context API, useReducer)
UI	Tailwind utilities + Custom CSS
Date Picker	react-datepicker
State Persistence	LocalStorage
Build Tool	Vite
<br/>
📂 Project Structure
src/
│
├── components/
│   ├── AddEditTransaction.jsx
│   ├── Actions.jsx
│   ├── Balance.jsx
│   ├── Filters.jsx
│   ├── Header.jsx
│   ├── TransactionDetails.jsx
│   ├── TransactionItem.jsx
│   └── Transactions.jsx
│
├── contexts/
│   ├── UiContext.jsx
│   └── TransactionContext.jsx
│
├── UI/
│   ├── Modal.jsx
│   └── Input.jsx
│
├── util/
│   ├── formatter.js
│   └── transactionFilter.js
│
├── App.jsx
├── main.jsx
└── index.css

<br/>
🖥️ Installation & Setup
1️⃣ Clone the repository
git clone https://github.com/YOUR_USERNAME/expense-tracker-react.git
cd expense-tracker-react

2️⃣ Install dependencies
npm install

3️⃣ Run the development server
npm run dev

4️⃣ Build for production
npm run build

<br/>
📸 Screenshots

(Add your screenshots here — GitHub will render them full-width with spacing.)

Example:

![App Screenshot](./screenshots/home.png)
![Mobile Screenshot](./screenshots/mobile.png)

<br/>
🚀 Future Enhancements (Optional)

Graphs / charts (Recharts)

Pagination

Export transactions to CSV

Backend integration (Node + MongoDB)

User accounts & authentication

Category management system

<br/>
📜 License


<br/>
👨‍💻 Author

Ashwani Kumar
MERN Stack Developer
