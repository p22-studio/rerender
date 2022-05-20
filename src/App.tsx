import React, { useState } from "react";
import logo from "./logo.svg";
import { Items } from "./features/items/Items";
import "./App.css";
import { ItemsContext } from "./app/store";
import { ItemsState } from "./features/items/itemsSlice";

function App() {
  console.log("app render");
  const [items, setItems] = useState<ItemsState>({
    a: { id: "a", name: "a" },
    b: { id: "b", name: "b" },
    c: { id: "c", name: "c" },
    d: { id: "d", name: "d" },
    e: { id: "e", name: "e" },
  });

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <ItemsContext.Provider value={{ items, setItems }}>
          <Items />
        </ItemsContext.Provider>
      </header>
    </div>
  );
}

export default App;
