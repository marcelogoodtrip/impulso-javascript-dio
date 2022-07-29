import React from "react";
import App from "./containers/App";
import { createRoot } from "react-dom/client";
import { StrictMode } from "react";

const appElement = document.getElementById('app');
const root = createRoot(appElement);

root.render(
    <StrictMode>
      <App />
    </StrictMode>
  );