🚀 Expense Tracker — React + Context API + LocalStorage

A clean, modern expense tracker built with React, Context API, useReducer, custom hooks, useMemo optimization, dynamic filtering, date-range picker, and localStorage persistence.

This project showcases real-world frontend architecture and state-management patterns suitable for junior → mid-level React developers.




📸 Screenshots
<img width="1151" height="802" alt="Screenshot 2025-11-15 at 11 54 41 PM" src="https://github.com/user-attachments/assets/1a4d0d59-81eb-4805-9fd3-912c88634c72" />

<img width="1043" height="750" alt="Screenshot 2025-11-15 at 11 55 52 PM" src="https://github.com/user-attachments/assets/27bc4eec-ac1f-4f93-a92e-376ae5e8e2fd" />

<img width="1440" height="812" alt="Screenshot 2025-11-16 at 9 16 30 AM" src="https://github.com/user-attachments/assets/db43fa32-941e-4234-a23a-336315525527" />

<img width="1433" height="810" alt="Screenshot 2025-11-16 at 9 19 12 AM" src="https://github.com/user-attachments/assets/2abe95c7-97e1-41d6-a025-4cd656d56d70" />




✨ Features
🧾 Transaction Management

 🟢 Add, edit, delete transactions.
 🟢 Income & expense categorization.
 🟢 Auto-formatted currency & dates.
 🟢 Multi-line description preserved (using white-space: pre-line).
 🟢 Responsive modals for Add / Edit / Details / Delete.




🧠 Smart Filtering

Filter by:
✔ Type (Income / Expense / All)
✔ Category
✔ Date Range (React DatePicker)
✔ Real-time computed totals using useMemo
✔ Total Income, Total Expense, Balance



🗄 Persistent Storage:
✔ All data saved to localStorage
✔ Restores automatically on reload



📱 Fully Responsive
✔ Mobile-friendly layout
✔ Transactions table transforms into card view on small screens



🎨 UI/UX
✔ Custom modal using <dialog> + createPortal()
✔ Smooth focus & input styling
✔ Clean animations



🛠️ Tech Stack
 🔵 Layer	Tech
 🔵 Frontend	React + Vite
 🔵 State	Context API + useReducer
 🔵 Storage	LocalStorage
 🔵 UI	Tailwind + Custom CSS
 🔵 Utilities	useMemo, useEffect, date formatting, currency formatting
 🔵 Components	Modular & reusable




🚀 Run Locally
npm install
npm run dev



📦 Build
npm run build




🧩 Future Enhancements (Optional for Portfolio)
Dashboard graphs (Recharts)
User accounts with backend (Node / Express / MongoDB)
Export CSV
Pagination
Light/Dark toggle




🙋‍♂️ Author

Ashwani Kumar
MERN Developer
LinkedIn — [Ashwani Kumar](https://www.linkedin.com/in/ashwani-kumar-a26301284/)
