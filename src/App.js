import React from 'react'
import styles from './App.module.css'
import Dashboard from './Components/Dashboard/Dashboard'

const App = () => {
  return (
    <div className={styles.app_main_container}>
      <Dashboard/>
    </div>
  )
}

export default App;