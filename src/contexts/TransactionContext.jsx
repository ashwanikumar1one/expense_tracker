import { createContext, useEffect, useReducer, useState } from "react";

import React from "react";

const TransactionContext = createContext({
  transactions: [],
  selectedTransaction: null,
  updateTransaction: () => {},
  deleteTransaction: () => {},
  addTransaction: () => {},
  selectTransaction: () => {},
  clearSelectedTransaction: () => {},
});

function transactionReducers(state, action) {
  switch (action.type) {
    case "ADD_TRANSACTION": {
      const newTransaction = {
        ...action.payload,
        id: Math.floor(Math.random() * 1000000),
      };

      return [...state, newTransaction];
    }

    case "DELETE_TRANSACTION": {
      const updated = state.filter(
        (transaction) => transaction.id !== action.payload
      );
      return updated;
    }

    case "UPDATE_TRANSACTION": {
      const updated = state.map((transaction) => {
        const { id, updates } = action.payload;

        return transaction.id === id
          ? { ...transaction, ...updates }
          : transaction;
      });

      return updated;
    }

    default:
      return state;
  }
}

export function TransactionContextProvider({ children }) {
  const [transactions, dispatch] = useReducer(transactionReducers, [], () => {
    const savedTransaction = localStorage.getItem("transactions");
    return savedTransaction ? JSON.parse(savedTransaction) : [];
  });

  const [selectedTransaction, setSelectedTransaction] = useState(null);

  // Persist whenever state changes
  useEffect(() => {
    localStorage.setItem("transactions", JSON.stringify(transactions));
  }, [transactions]);

  // Action dispatchers
  function addTransaction(transaction) {
    dispatch({ type: "ADD_TRANSACTION", payload: transaction });
  }

  function deleteTransaction(id) {
    dispatch({ type: "DELETE_TRANSACTION", payload: id });
  }

  function updateTransaction(id, transaction) {
    dispatch({
      type: "UPDATE_TRANSACTION",
      payload: { id: id, updates: transaction },
    });
  }

  // Helper Functions to select Transaction to edit and clear the selected transaction.
  function selectTransaction(transaction) {
    setSelectedTransaction(transaction);
  }

  function clearSelectedTransaction() {
    setSelectedTransaction(null);
  }

  const value = {
    transactions: transactions,
    selectedTransaction: selectedTransaction,
    updateTransaction,
    deleteTransaction,
    addTransaction,
    selectTransaction,
    clearSelectedTransaction,
  };

  return (
    <TransactionContext.Provider value={value}>
      {children}
    </TransactionContext.Provider>
  );
}

export default TransactionContext;
