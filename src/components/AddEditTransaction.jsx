import React, { useEffect, useState } from "react";
import { useContext } from "react";
import Modal from "../UI/Modal";
import Input from "../UI/Input";
import categories from "../util/categories";
import { UiContext } from "../contexts/UiContext";
import TransactionContext from "../contexts/TransactionContext";
import { currencyFormat } from "../util/formatter";

const INITIAL_FORM_DATA = {
  amount: "",
  category: "",
  date: "",
  description: "",
  type: "",
};

function AddEditTransaction() {
  const uiContext = useContext(UiContext);
  const transactionContext = useContext(TransactionContext);

  const mode = uiContext.mode; // is in Edit mode | mode = "edit" or mode = null

  let selectedTransaction = mode
    ? transactionContext.selectedTransaction
    : null;

  // Initializing Form state
  const [formData, setFormData] = useState(INITIAL_FORM_DATA);

  // Pre Populate the form if Selected Transaction is available
  useEffect(() => {
    if (selectedTransaction) {
      setFormData({
        amount: selectedTransaction.amount,
        category: selectedTransaction.category,
        date: selectedTransaction.date,
        description: selectedTransaction.description,
        type: selectedTransaction.type,
      });
    } else {
      setFormData(INITIAL_FORM_DATA);
    }
  }, [selectedTransaction]);

  // Handle Form - Input Chage
  function handleChange(event) {
    const { name, value } = event.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  }

  // Handel Cancel the Add or Update Transaction Action
  function handleCancel() {
    uiContext.closeModal();
    setFormData(INITIAL_FORM_DATA);
    transactionContext.clearSelectedTransaction();
  }

  // Handle Form Submission
  function handleSubmit(e) {
    e.preventDefault();
    const fd = new FormData(e.target);
    const data = Object.fromEntries(fd.entries());
    data.amount = Number(data.amount).toFixed(2);

    if (mode === "edit") {
      transactionContext.updateTransaction(selectedTransaction.id, data);
      transactionContext.clearSelectedTransaction();
    } else {
      transactionContext.addTransaction(data);
    }

    // e.target.reset();
    // Resetting the Form to Blank after Update or Add Transaction action
    setFormData(INITIAL_FORM_DATA);
    uiContext.closeModal();
  }

  const isOpen =
    uiContext.modal && (uiContext.mode === "add" || uiContext.mode === "edit");

  // FORM
  return (
    <Modal isOpen={isOpen}>
      <div>
        <h2>{mode === "edit" ? "Update" : "Add"} Transaction</h2>
        <hr />
        <form onSubmit={(e) => handleSubmit(e)}>
          <div className="control">
            <label htmlFor="category">Category</label>
            <select
              name="category"
              id="category"
              value={formData.category}
              onChange={handleChange}
            >
              {categories.map((category) => {
                return (
                  <option key={category} value={category}>
                    {category}
                  </option>
                );
              })}
            </select>
          </div>
          <div className="control">
            <label htmlFor="type">Type</label>
            <select
              name="type"
              id="type"
              value={formData.type}
              onChange={handleChange}
            >
              <option value="all">All</option>
              <option value="income">Income</option>
              <option value="expense">Expense</option>
            </select>
          </div>
          <Input
            name="amount"
            type="number"
            id="amount"
            label="Amount"
            value={formData.amount}
            onChange={handleChange}
          />
          <Input
            name="date"
            type="date"
            id="date"
            label="Date"
            value={formData.date}
            onChange={handleChange}
          />
          <Input
            name="description"
            type="textarea"
            id="description"
            label="Description"
            value={formData.description}
            onChange={handleChange}
          />
          <div className="form-actions">
            <button onClick={handleCancel} type="button">
              Cancel
            </button>
            <button type="submit">
              {mode === "edit" ? "Update" : "Add Transaction"}
            </button>
          </div>
        </form>
      </div>
    </Modal>
  );
}

export default AddEditTransaction;
