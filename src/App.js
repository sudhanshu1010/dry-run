import React from 'react'
import styles from './App.module.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'

import Dashboard from './Components/Dashboard/Dashboard'
import Login from './Components/Login/Login'
import Signup from './Components/Signup/Signup'

const App = () => {
  return (
    <div className={styles.app_main_container}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<Dashboard/>} />
          <Route path="/login" element={<Login/>} />
          <Route path="/signup" element={<Signup/>} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;