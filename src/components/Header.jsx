import React, { useContext } from "react";
import { UiContext } from "../contexts/UiContext";

function Header() {
  const uiContext = useContext(UiContext);

  return (
    <div className="container">
      <header>
        <h2>Expense Tracker</h2>
        <button onClick={() => uiContext.openModal("add")}>
          Add Transaction
        </button>
      </header>
    </div>
  );
}

export default Header;
