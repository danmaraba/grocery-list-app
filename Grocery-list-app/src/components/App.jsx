import React, { useState } from 'react'
import ShoppingList from './ShoppingList';

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleMode(){
    setIsDark(!isDark)
  }

  return (
    <div className='app'>
     <header className='flex mx-4  items-center text-3xl'>
      <h1 className=''>Shopster Shop</h1>
      <button onClick={toggleMode} className='bg-yellow-400 p-2 m-2 rounded-md'>{isDark? "Dark Mode":"Light Mode"}</button>
     </header>
      <ShoppingList/>
    </div>
  )
}

export default App
