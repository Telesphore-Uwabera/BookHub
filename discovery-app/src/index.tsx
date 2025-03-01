import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { BookProvider } from "./context/BookContext";

const root = ReactDOM.createRoot(document.getElementById("root") as HTMLElement);
root.render(
  <React.StrictMode>
    <BookProvider>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </BookProvider>
  </React.StrictMode>
);
