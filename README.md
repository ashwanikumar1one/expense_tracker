💰 Expense Tracker — React

A clean and modern Expense Tracker Application built with React, Context API, useReducer, React-Datepicker, and LocalStorage.
It includes full CRUD operations, dynamic filtering, optimized totals, responsive design, and a mobile-friendly card layout.

📦 What’s Inside

Add, Edit & Delete transactions (CRUD)

Income / Expense tracking

Category filtering

Date-range filtering using React-Datepicker

Automatic currency formatting (e.g., 200 → 200.00)

Memoized totals using useMemo

Fully responsive UI

Mobile card-view layout for transactions

Persistent storage using localStorage

Beautiful custom modal built using <dialog> + portals

Clean code architecture with separate contexts

🛠️ Tech Stack
Area	Tools Used
Frontend	React (Hooks, Components)
State Mgmt	Context API + useReducer
UI / Styling	Custom CSS + Tailwind utilities
Date Picker	React-Datepicker
Persistence	LocalStorage
Optimization	useMemo, Pure utility functions
Build Tool	Vite

Lightweight, dependency-minimal, and structured like a real-world React application.

📷 Screenshots

(Add your screenshots here)
Example:

<img width="1400" alt="Expense Tracker Screenshot" src="./screenshots/home.png" />
<img width="500" alt="Mobile Screenshot" src="./screenshots/mobile.png" />

🚀 Running the Project Locally
git clone https://github.com/YOUR_USERNAME/expense-tracker-react.git
cd expense-tracker-react
npm install
npm run dev

📌 Folder Structure
src/
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

⚡ Future Enhancements

Dashboard charts (Recharts)

CSV export

Pagination

Category management features

Authentication + backend (Node + MongoDB)

👨‍💻 Author

Ashwani Kumar
MERN Stack Developer
(Add LinkedIn / Portfolio here)

If you want, I can also:

✔ Create a header/banner graphic for the README
✔ Help format your screenshots visually
✔ Prepare a GitHub description + tags
✔ Write a resume-friendly project summary

Just tell me “make a banner” or “write resume summary”.
