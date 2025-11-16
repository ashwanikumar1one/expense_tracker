import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { UiContextProvider } from "./contexts/UiContext.jsx";
import { TransactionContextProvider } from "./contexts/TransactionContext.jsx";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <UiContextProvider>
      <TransactionContextProvider>
        <App />
      </TransactionContextProvider>
    </UiContextProvider>
  </StrictMode>
);
