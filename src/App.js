import React from "react";
import "./index.css"
import { Outlet } from "react-router";

function App() {
  return (
    <div>
      <h1>T-Shirt Shop</h1>
      <Outlet />
    </div>
  );
}

export default App;
