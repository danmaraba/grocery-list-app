import React, { useState } from "react";
import ShoppingList from "./ShoppingList";
import itemData from "../data/item";

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleMode() {
    setIsDark(!isDark);
  }
  // add dark &light mode
  const appClass = isDark ? "App dark" : "App light";

  return (
    <div className={appClass}>
      <div className="text-2xl  mx-96 shadow-lg mt-4 p-4 w-1/3 place-items-center">
        <header className="flex items-center justify-between ">
          <h1 className="font-bold">Shopster Shop</h1>
          <button
            onClick={toggleMode}
            className="bg-[#F5B041] p-2 m-2 rounded-md transition-all"
          >
            {isDark ? "Dark Mode" : "Light Mode"}
          </button>
        </header>
        <ShoppingList item={itemData} />
      </div>
    </div>
  );
}

export default App;
