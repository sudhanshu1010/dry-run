import React from 'react';
import styles from './Login.module.css'
import {MdAlternateEmail} from 'react-icons/md'
import {FiKey} from 'react-icons/fi'

const Login = () => {
    return (
        <div className={styles.login_main_container}>
            <div className={styles.login_form_container}>
                <div className={styles.login_header}>Login</div>
                <div className={styles.email_container}>
                    <MdAlternateEmail/>
                    <input type="email" placeholder="Email" className={styles.email}/>
                </div>

                <div className={styles.password_container}>
                    <FiKey/>
                    <input type="password" placeholder="Password" className={styles.password}/>
                </div>

                <div className={styles.remember_container}>
                    <input type="checkbox" placeholder="Remember"/>
                    Remember me
                </div>

                <button>Login</button>

                <hr/>

                
            </div>
        </div>
    )
}

export default Login;