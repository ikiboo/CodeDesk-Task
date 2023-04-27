import React from "react";
import ItemSearch from "./ItemSearch/ItemSearch";
import items from "./items";

function App() {
  return (
    <div className="App">
      <ItemSearch items={items} />
    </div>
  );
}

export default App;
