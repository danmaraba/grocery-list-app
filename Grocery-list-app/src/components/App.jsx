import React, { useState } from 'react'
import ShoppingList from './ShoppingList';

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <h1 className='bg-red-400'>Home</h1>
      <ShoppingList/>
    </>
  )
}

export default App
