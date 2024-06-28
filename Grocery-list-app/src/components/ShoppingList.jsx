import React, { useState } from "react";
import Item from "./Item";
import items from "../data/item";

function ShoppingList() {
  // initialize usestate and assign items data
  const [shoppings, setShoppings] = useState(items);
  const [filterBy, setFilterBy] = useState("All");
  // console.log(shopping);

  // update the <select> element to set the filterBy variable when its value is changed
  function handleFilterChange(e) {
    setFilterBy(e.target.value);
  }

  // filter by category
  const itemsToDisplay = shoppings.filter((shopping) => {
    if (filterBy === "All") {
      return true;
    } else {
      return shopping.category === filterBy;
    }
  });

  // display items data
  // const displayItems = itemsToDisplay.map((item) => (
  //   <li >
      
  //   </li>
  // ));
  return (
    <div className="text-2xl rounded-md">
      <select
        name="filter"
        className="bg-[#3498DB] w-[100%] h-16 ml-1 text-sm"
        onChange={handleFilterChange}
      >
        <option value="All">Filter By Category</option>
        <option value="Dairy">Dairy</option>
        <option value="Produce">Produce</option>
        <option value="Dessert">Dessert</option>
      </select>
      <ul>
        <li className="mt-18 grid gap-8">
        {itemsToDisplay.map((item) => (
        <Item key={item.key} name={item.name}category={item.category}/>
        ))}
        </li>
      </ul>
    </div>
  );
}

export default ShoppingList;
