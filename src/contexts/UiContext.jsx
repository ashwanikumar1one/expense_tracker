import React, { useState } from "react";
import { createContext } from "react";

export const UiContext = createContext({
  modal: false,
  mode: null,
  openModal: () => {},
  closeModal: () => {},
});

export function UiContextProvider({ children }) {
  const [isOpen, setIsOpen] = useState(false);
  const [mode, setMode] = useState(null);

  function openModal(mode = null) {
    setIsOpen(true);
    setMode(mode);
  }

  function closeModal() {
    setIsOpen(false);
    setMode(null);
  }

  const value = {
    modal: isOpen,
    mode: mode,
    openModal,
    closeModal,
  };

  return <UiContext.Provider value={value}>{children}</UiContext.Provider>;
}

export default UiContext;
