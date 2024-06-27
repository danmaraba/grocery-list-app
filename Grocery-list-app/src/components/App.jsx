import React, { useState } from 'react'
import ShoppingList from './ShoppingList';

function App() {
  const [isDark, setIsDark] = useState(false);

  function toggleMode(){
    setIsDark(!isDark)
  }

  const appClass=isDark? "App dark": "App light"

  return (
    <div className={appClass}>
     <header className='flex items-center text-3xl justify-between mx-96 shadow-lg mt-4 p-4'>
      <h1 className=''>Shopster Shop</h1>
      <button onClick={toggleMode} className='bg-yellow-400 p-2 m-2 rounded-md transition-all'>{isDark? "Dark Mode":"Light Mode"}</button>
     </header>
      <ShoppingList/>
    </div>
  )
}

export default App
