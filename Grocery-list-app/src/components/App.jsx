import React, { useState } from 'react'
import ShoppingList from './ShoppingList';

function App() {
  const [isDark, setIsDark] = useState(false);

  return (
    <div className='app'>
     <header className='flex mx-4 text-green-400 items-center text-3xl'>
      <h1 className=''>Shopster Shop</h1>
      <button>Click me</button>
     </header>
      <ShoppingList/>
    </div>
  )
}

export default App
