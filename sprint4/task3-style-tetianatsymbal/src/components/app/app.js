import React from "react";
import "./app.css";

import Button from "../button/button.js";

export default function App() {
  return (
    <div className="wrapper-app" data-testid="element-app">
      <Button />
    </div>
  );
}
