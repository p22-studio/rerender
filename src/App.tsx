import React from "react";
import logo from "./logo.svg";
import { Items } from "./features/items/Items";
import "./App.css";

function App() {
  console.log("app render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Items />
      </header>
    </div>
  );
}

export default App;
