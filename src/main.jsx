import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import AuthContextProvider from "./features/auth/context/AuthContext.jsx";
import DraftContextProvider from "./features/draft/context/DraftContext.jsx";

ReactDOM.createRoot(document.getElementById("root")).render(
  <AuthContextProvider>
    <DraftContextProvider>
      <App />
    </DraftContextProvider>
  </AuthContextProvider>
);
