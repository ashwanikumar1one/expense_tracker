import { useState, useContext, useMemo } from "react";
import Header from "./components/Header";
import Balance from "./components/Balance";
import Filters from "./components/Filters";
import Transactions from "./components/Transactions";
import DeleteConfirmation from "./components/Actions";
import Modal from "./UI/Modal";
import AddEditTransaction from "./components/AddEditTransaction";
import TransactionContext from "./contexts/TransactionContext";
import transactionFilter from "./util/transactionFilter";

function App() {
  const { transactions, selectedTransaction } = useContext(TransactionContext);
  const [filter, setFilter] = useState(null);

  const filteredTransactions = useMemo(() => {
    return transactionFilter(transactions, filter);
  }, [transactions, filter]);

  return (
    <>
      <Modal />
      <Header />
      <Balance transactions={filteredTransactions} />
      <Filters setFilter={setFilter} />
      <AddEditTransaction />
      <Transactions transactions={filteredTransactions} />
      <DeleteConfirmation />
    </>
  );
}

export default App;
