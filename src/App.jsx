import { useState } from 'react'
import Home from "./components/Home"
import { Route, Routes } from 'react-router-dom'

function App() {
  return (
    <>
      <div className="app">
        <Routes>
          <Route path="/" element={<Home/>}/>
        </Routes>
      </div>
    </>
  )
}

export default App
