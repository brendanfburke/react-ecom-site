import React from "react";
import "./index.css"
import { Outlet } from "react-router";
import Nav from "./components/Nav";

function App() {
  return (
    <div>
      <Nav />
      <Outlet />
    </div>
  );
}

export default App;
