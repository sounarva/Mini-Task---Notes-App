import React from 'react'
import Navbar from './Components/Navbar'
import Notes from './Components/Notes'

const App = () => {
  return (
    <div className='w-full h-screen bg-zinc-900'>
      <Navbar />
      <Notes />
    </div>
  )
}

export default App