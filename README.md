💰 Expense Tracker — React

A clean and modern Expense Tracker Application built with React, Context API, useReducer, LocalStorage, and React-Datepicker.
It supports full CRUD operations, filtering, memoized totals, responsive design, and a mobile-friendly card layout.

📦 What’s Inside

🧾 Add, Edit & Delete transactions

💰 Income / Expense tracking

🏷️ Category filter

📅 Date-range filter (React Datepicker)

🔄 Automatically formatted amounts (200 → 200.00)

⚡ Memoized totals using useMemo

📱 Fully responsive UI

🗂 Mobile card-view layout for transactions

💾 Persistent data using LocalStorage

🪟 Custom modal using <dialog> + React Portal

🛠️ Tech Stack
Area	Tools Used
Frontend	React (Hooks, Components)
State Mgmt	Context API + useReducer
Styling	Tailwind utilities + Custom CSS
DatePicker	React-Datepicker
Storage	LocalStorage
Bundler	Vite
📷 Screenshots

(Add your screenshots here — GitHub will render them with spacing)

Example:

<img width="900" alt="Expense Tracker Screenshot" src="./screenshots/home.png">
🚀 Running the Project Locally
git clone https://github.com/YOUR_USERNAME/expense-tracker-react.git
cd expense-tracker-react
npm install
npm run dev

📁 Folder Structure
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

🎯 Future Enhancements

📊 Charts & visual insights (Recharts)

📁 Export to CSV

🔐 Login system + backend (Node + MongoDB)

🏷️ Category management (CRUD)

📱 Better mobile gestures & UX

👨‍💻 Author

Ashwani Kumar
MERN Stack Developer
(Add LinkedIn / Portfolio)
