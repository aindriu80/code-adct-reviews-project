import { useState } from 'react'
import logo from './logo.svg'
import Review from './Review'
import { FaGithubSquare } from 'react-icons/fa'
import './App.css'

function App() {
  return (
    <div className="App">
      <h2>
        Reviews Project
        <br />
        <FaGithubSquare className="icon" />
      </h2>
    </div>
  )
}

export default App
