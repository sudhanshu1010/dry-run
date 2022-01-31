import React from 'react';
import styles from './Dropdown.module.css'

const Dropdown = ({icon, detail}) => {
    return (
        <div className={styles.dropdown_main_container}>
            <div className={styles.dropdown_icon}>{icon}</div>
            <div className={styles.dropdown_detail}>{detail}</div>
        </div>
    )
}

export default Dropdown;