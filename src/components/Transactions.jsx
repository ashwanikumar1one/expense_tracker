import TransactionItem from "./TransactionItem";

function Transactions({ transactions }) {
  return (
    <div className="container">
      {transactions.length === 0 ? (
        <p className="center">No Transactions found!</p>
      ) : (
        <section className="transaction-table">
          <table className="tx-table">
            <thead>
              <tr>
                <th>Date</th>
                <th>Category</th>
                <th className="right">Amount</th>
                <th>Description</th>
                <th className="right">Action</th>
              </tr>
            </thead>
            <tbody id="tx-body">
              {transactions.map((transaction) => {
                return (
                  <TransactionItem
                    key={transaction.id}
                    transaction={transaction}
                  />
                );
              })}
            </tbody>
          </table>
        </section>
      )}
    </div>
  );
}

export default Transactions;
