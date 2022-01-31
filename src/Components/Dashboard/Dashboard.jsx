import React from 'react';
import styles from './Dashboard.module.css'
import Navbar from '../Navbar/Navbar'

const Dashboard = () => {
    return (
        <div className={styles.dashboard_main_container}>
            <Navbar/>
        </div>
    )
}

export default Dashboard;