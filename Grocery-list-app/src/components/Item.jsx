import React,{useState} from "react";

function Item({name, category}){
   const[inCart, setInCart]= useState(false)
   const itemsClass=inCart? "in-Cart": ""
//    inCart? "Add To Cart":"Remove From Cart"
   function handleClick(){
    setInCart(!inCart)
   }
    return(
        <div className="flex">
            <li className={itemsClass}>
                <span className="mr-16">{name}</span>
                <span className="mr-16">{category}</span>
                <button onClick={handleClick} >{inCart? "Add To Cart":"Remove From Cart"}</button>
            </li>
        </div>
    )
}

export default Item