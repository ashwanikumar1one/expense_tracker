import React, { useContext, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { UiContext } from "../contexts/UiContext";
import TransactionContext from "../contexts/TransactionContext";

function Modal({ children, isOpen }) {
  const uiContext = useContext(UiContext);
  const transactionContext = useContext(TransactionContext);

  const dialog = useRef(null);

  useEffect(() => {
    const modal = dialog.current;

    if (isOpen) {
      modal.showModal();
    }

    return () => modal.close();
  }, [isOpen]);

  function handleCancel() {
    uiContext.closeModal();
    transactionContext.clearSelectedTransaction();
  }

  return createPortal(
    <dialog ref={dialog} onCancel={handleCancel}>
      {children}
    </dialog>,
    document.getElementById("root")
  );
}

export default Modal;
