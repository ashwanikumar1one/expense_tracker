import React, { useContext } from "react";
import TransactionContext from "../contexts/TransactionContext";
import { currencyFormat } from "../util/formatter";
import { dateFormat } from "../util/formatter";

function TransactionDetails() {
  const transactionContext = useContext(TransactionContext);
  const { date, category, type, amount, description } =
    transactionContext.selectedTransaction;

  return (
    <div className="transaction-details">
      <div className="head">
        <p>{dateFormat.format(new Date(date))}</p>

        <p className={`amount ${type}`}>
          {type === "income" ? "+" : "-"}
          {currencyFormat.format(amount)}
        </p>
      </div>
      <hr />
      <h2>{category}</h2>
      <p>{description}</p>
    </div>
  );
}

export default TransactionDetails;
