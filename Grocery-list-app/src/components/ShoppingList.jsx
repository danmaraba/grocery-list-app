import React, { useState } from "react";
import Item from "./Item";

function ShoppingList() {
  const [SelectedCategory, SetSelectedCategory] = useState("All");
  function handleFilter(e) {
    SetSelectedCategory(e.target.value);
  }
  return (
    <div className="flex text-2xl rounded-md">
      <select
        name="filter"
        className="bg-[#3498DB] w-[100%] my-4"
        onChange={handleFilter}
      >
        <option value="All">Filter By Category</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <Item />
    </div>
  );
}

export default ShoppingList;
