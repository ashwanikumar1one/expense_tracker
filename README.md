# 📊 Expense Tracker — React + Context API

A **clean and modern Expense Tracker Application** built with **React**, **Context API**, `useReducer`, `LocalStorage`, and `react-datepicker`.

It supports full **CRUD** (Create, Read, Update, Delete), powerful **filtering**, memoized totals, a **responsive UI**, and a mobile card-view layout for transactions.

---

## ⭐ Key Features

### 🧾 Transaction Management
* **Full CRUD:** Add, edit, and delete transactions instantly.
* **Types:** Supports both **Income** and **Expense** transaction types.
* **Formatting:** Auto decimal formatting (e.g., `200` becomes `200.00`).
* **Persistence:** Transactions are saved locally using **LocalStorage**.
* **Details:** Multiline descriptions are preserved.

### 🔍 Smart Filters
Filter transactions seamlessly by:
* **Type** (Income / Expense / All)
* **Category**
* **Date Range Picker** (powered by `react-datepicker`)

All filters work together and update the results instantly.

### 📈 Dynamic Totals
Performance-optimized totals auto-calculated using `useMemo`:
* **Total Income**
* **Total Expenses**
* **Current Balance**

### 🎨 UI / UX Highlights
* Modern **Dark Theme** for a sleek look.
* **Custom Modal:** Built using the native `<dialog>` element and `createPortal()` for better accessibility and control.
* **Mobile-Responsive Layout:**
    * The transactions table converts to a **card-style layout** on small screens.
    * Features smooth spacing, shadows, and rounded UI elements.

---

## 🛠️ Tech Stack

| Layer | Technology | Description |
| :--- | :--- | :--- |
| **Frontend** | React (Hooks, Context API, `useReducer`) | Core application library. |
| **UI Styling** | Tailwind Utilities + Custom CSS | Fast, utility-first styling. |
| **Date Picker** | `react-datepicker` | Intuitive date range selection. |
| **State Persistence** | LocalStorage | Simple, client-side data storage. |
| **Build Tool** | Vite | Next-generation frontend tooling. |

---

## 📂 Project Structure

```bash
src/
│
├── components/           # Reusable UI parts (Balance, Header, etc.)
│   ├── AddEditTransaction.jsx
│   ├── ...
│
├── contexts/             # Global state management
│   ├── UiContext.jsx
│   └── TransactionContext.jsx
│
├── UI/                   # Common, low-level UI elements (Modal, Input)
│   ├── Modal.jsx
│   └── Input.jsx
│
├── util/                 # Helper functions for formatting and filtering
│   ├── formatter.js
│   └── transactionFilter.js
│
├── App.jsx               # Main application component
├── main.jsx              # Entry point
└── index.css             # Global styles
````

-----

## 🖥️ Run Locally

Follow these steps to get a local copy up and running:

1.  ### **Clone the repository**

    ```bash
    git clone [https://github.com/YOUR_USERNAME/expense-tracker-react.git](https://github.com/YOUR_USERNAME/expense-tracker-react.git)
    cd expense-tracker-react
    ```

2.  ### **Install dependencies**

    ```bash
    npm install
    ```

3.  ### **Run the development server**

    ```bash
    npm run dev
    ```


-----

## 📸 Screenshots

<img width="1151" height="802" alt="Screenshot 2025-11-15 at 11 54 41 PM" src="https://github.com/user-attachments/assets/10b322eb-fcc9-496d-9a9f-12c2dc30f277" /><img width="1043" height="750" alt="Screenshot 2025-11-15 at 11 55 52 PM" src="https://github.com/user-attachments/assets/e442f55d-bfa4-4fc8-9957-aa6efe1f89ed" />
<img width="1440" height="812" alt="Screenshot 2025-11-16 at 9 16 30 AM" src="https://github.com/user-attachments/assets/3e0ba02d-dcc2-4831-8a21-bfd477a2696b" />
<img width="1433" height="810" alt="Screenshot 2025-11-16 at 9 19 12 AM" src="https://github.com/user-attachments/assets/c3e8d70a-66f9-45fc-8fc6-f73bbe13bd1f" />



-----

## 🚀 Future Enhancements (Optional)

  * Data visualization using **Graphs / charts** (e.g., Recharts).
  * Add **Pagination** for a better experience with many transactions.
  * Feature to **Export transactions to CSV**.
  * **Backend integration** (Node + MongoDB) for cloud persistence.
  * **User accounts & authentication**.
  * Comprehensive **Category management system**.


-----

## 👨‍💻 Author

**Ashwani Kumar**
MERN Stack Developer

[🔗 Ashwani Kumar](https://www.linkedin.com/in/ashwani-kumar-a26301284/)
