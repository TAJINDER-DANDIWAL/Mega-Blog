import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {

  console.log(import.meta.env.VITE_APPWRITE_URL)
  console.log(import.meta.env.VITE_APPWRITE_PROJECT_ID)

  return (
    <div>
      <h1>Mega Blog</h1>
    </div>
  )
}

export default App
