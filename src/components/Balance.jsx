import React from "react";
import { currencyFormat } from "../util/formatter";

function Balance({ transactions }) {
  const totalIncome = transactions.reduce((acc, t) => {
    if (t.type === "income") {
      return acc + Number(t.amount);
    } else return acc;
  }, 0);

  const totalExpense = transactions.reduce((acc, t) => {
    if (t.type === "expense") {
      return acc + Number(t.amount);
    } else return acc;
  }, 0);

  const balance =
    totalIncome === 0 || totalExpense === 0 ? 0 : totalIncome - totalExpense;

  return (
    <div className="container">
      <section className="balance-section">
        <div className="balance-card income">
          <p>Total Income</p>
          <span>{currencyFormat.format(totalIncome) ?? 0}</span>
        </div>
        <div className="balance-card expense">
          <p>Total Expense</p>
          <span>{currencyFormat.format(totalExpense) ?? 0}</span>
        </div>
        <div className="balance-card balance">
          <p>Balance</p>
          <span>{currencyFormat.format(balance) ?? 0}</span>
        </div>
      </section>
    </div>
  );
}

export default Balance;
