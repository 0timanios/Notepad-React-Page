import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Navbar from './components/Navbar'
import Home from './pages/Home'
import Note from './pages/Note'

function App() {
  return (
    <>
      <Navbar/>
      <div className="w-full">
        <Routes>
          <Route path='/' element={<Home/>}></Route>
          <Route path='/note' element={<Note/>}></Route>
        </Routes>
      </div>
    </>
  )
}

export default App