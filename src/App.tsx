import React, { useState } from "react";
import logo from "./logo.svg";
import { Items } from "./features/items/Items";
import "./App.css";

function App() {
  const [x, setX] = useState(1);

  console.log("app render");
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <Items />
        <button onClick={() => setX((x) => x + 1)}>Rerender App {x}</button>
      </header>
    </div>
  );
}

export default App;
