// index.js is the entry point of the React application.
// It renders the App component, which demonstrates state lifting via its children.
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
