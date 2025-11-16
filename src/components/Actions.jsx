import React from "react";
import { useContext } from "react";
import Modal from "../UI/Modal";
import UiContext from "../contexts/UiContext";
import TransactionContext from "../contexts/TransactionContext";
import TransactionDetails from "./TransactionDetails";

function Actions() {
  const transactionContext = useContext(TransactionContext);
  const uiContext = useContext(UiContext);

  const mode = uiContext.mode;
  let selectedTransaction = mode
    ? transactionContext.selectedTransaction
    : null;

  function handleDelete() {
    transactionContext.deleteTransaction(selectedTransaction.id);
    uiContext.closeModal();
  }

  function handleCancel() {
    uiContext.closeModal();
    transactionContext.clearSelectedTransaction();
  }

  const isOpen = uiContext.modal && (mode === "delete" || mode === "details");

  return (
    <Modal isOpen={isOpen}>
      <div>
        {selectedTransaction && <TransactionDetails />}

        {mode === "delete" && (
          <>
            <button onClick={handleCancel}>Cancel</button>
            <button onClick={handleDelete}>Delete</button>
          </>
        )}
        {mode === "details" && <button onClick={handleCancel}>Okay!</button>}
      </div>
    </Modal>
  );
}

export default Actions;
