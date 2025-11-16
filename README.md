📊 Expense Tracker (React + Context API)

A modern, responsive Expense Tracker built with React, Context API, useReducer, and LocalStorage.
This project demonstrates real-world front-end application architecture: global state management, optimized rendering with useMemo, reusable components, CRUD operations, dynamic filtering, and mobile-responsive UI.

🚀 Live Demo

(Add your Netlify or Vercel link here once deployed)

📸 Screenshots

<img width="1151" height="802" alt="Screenshot 2025-11-15 at 11 54 41 PM" src="https://github.com/user-attachments/assets/0b24ec2e-6b05-44b5-b480-b2b3e9ca1fd2" />
<img width="1043" height="750" alt="Screenshot 2025-11-15 at 11 55 52 PM" src="https://github.com/user-attachments/assets/6784c6ab-caf5-4935-9723-328a3471fa88" />
<img width="1440" height="812" alt="Screenshot 2025-11-16 at 9 16 30 AM" src="https://github.com/user-attachments/assets/206a805e-1db5-4fc7-8c42-74ebf53a082b" />
<img width="1433" height="810" alt="Screenshot 2025-11-16 at 9 19 12 AM" src="https://github.com/user-attachments/assets/8c66b490-4058-4218-b577-11e995b8be0b" />


✨ Features
🧾 Transaction Management

Add new transactions

Edit existing transactions

Delete transactions

Income & expense support

Decimal formatting (e.g., 200 → 200.00)

Multi-line descriptions preserved (white-space: pre-line)

Auto-generated IDs

Data saved to localStorage

🔍 Smart Filters

Filter transactions by:

Type (Income, Expense, All)

Category

Date Range (React DatePicker)

All filters work together seamlessly.

🧠 Optimized State & Computations

Global state handled using Context API + useReducer

Expensive calculations memoized using useMemo

Total Income, Total Expense & Balance automatically recompute when filters change

Local state used for controlled forms

🎨 User Interface

Modern dark UI

Styled using custom CSS + Tailwind utilities

Reusable modal using <dialog> + createPortal()

Transaction table converts to card view on mobile

Smooth responsive layout across all breakpoints

🛠️ Tech Stack

Frontend:

React (Hooks)

Context API & useReducer

React DatePicker

Tailwind (base) + Custom CSS

LocalStorage persistence

Vite (build tool)

📁 Folder Structure
src/
│
├── components/
│   ├── Header.jsx
│   ├── Balance.jsx
│   ├── Filters.jsx
│   ├── Transactions.jsx
│   ├── TransactionItem.jsx
│   ├── AddEditTransaction.jsx
│   ├── Actions.jsx
│   └── TransactionDetails.jsx
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
│   ├── transactionFilter.js
│   └── formatter.js
│
├── App.jsx
├── main.jsx
└── index.css

⚙️ Installation & Setup
1️⃣ Clone the repo
git clone https://github.com/your-username/expense-tracker-react.git
cd expense-tracker-react

2️⃣ Install dependencies
npm install

3️⃣ Start development server
npm run dev

4️⃣ Build for production
npm run build

🔮 Future Enhancements (Optional)

These are not implemented, but great if you want to expand the project:

Graphs & Charts (Recharts)

Authentication (with Node/Mongo backend)

Export to CSV

Pagination for large datasets

Light/Dark theme toggle

Category management CRUD

📜 License

MIT License — feel free to use this project for learning or personal use.




🙋‍♂️ Author

Ashwani Kumar
MERN Developer
LinkedIn — [Ashwani Kumar](https://www.linkedin.com/in/ashwani-kumar-a26301284/)
