import React from "react";
import { useContext } from "react";
import TransactionContext from "../contexts/TransactionContext";
import { UiContext } from "../contexts/UiContext";
import { currencyFormat } from "../util/formatter";
import { dateFormat } from "../util/formatter";

function TransactionItem({ transaction }) {
  const transactionContext = useContext(TransactionContext);
  const uiContext = useContext(UiContext);

  function handleUpdate() {
    transactionContext.selectTransaction(transaction);
    uiContext.openModal("edit");
  }

  function handleAction(action) {
    uiContext.openModal(action);
    transactionContext.selectTransaction(transaction);
  }

  return (
    <tr>
      <td>{dateFormat.format(new Date(transaction.date))}</td>
      <td>{transaction.category}</td>
      <td className={`amount ${transaction.type}`}>
        {transaction.type === "income" ? "+" : "-"}
        {currencyFormat.format(transaction.amount)}
      </td>
      <td>
        <button className="icon-btn" onClick={() => handleAction("details")}>
          𝐢
        </button>
        {transaction.description}
      </td>
      <td>
        <button onClick={() => handleAction("delete")} className="icon-btn">
          🗑️
        </button>
        <button onClick={handleUpdate} className="icon-btn">
          🖋️
        </button>
      </td>
    </tr>
  );
}

export default TransactionItem;
