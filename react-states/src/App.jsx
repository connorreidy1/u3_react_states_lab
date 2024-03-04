import { useState } from 'react'
import { Route, Routes } from 'react-router-dom'
import states from './states'
import Header from './components/Header'
import Main from './components/Main'
import StateList from './components/StateList'
import StateDetails from './components/StateDetails'

import './App.css'

function App() {
  

  return (
    <div className="App">
      <Header />
      <Routes>
          <Route path="/" element={<Main />}/>
          <Route path="/list" element={<StateList states={states}/>}/>
          <Route path="/list/:name" element={<StateDetails states={states}/>}/>
        </Routes>
    </div>
  )
}

export default App
