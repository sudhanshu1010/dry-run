import React, { useState } from 'react';
import styles from './Login.module.css'
import { MdAlternateEmail } from 'react-icons/md'
import { FiKey } from 'react-icons/fi'
import { AiOutlineClear, AiOutlineEye, AiOutlineEyeInvisible } from 'react-icons/ai'
import {FcGoogle} from 'react-icons/fc'
import '../Button/Button.css'


const Login = () => {
    const [showPassword, setShowPassword] = useState(false)
    const [emailError, setEmailError] = useState(false)
    const [passwordError, setPasswordError] = useState(false)

    const [email, setEmail] = useState('')
    const [password, setpassword] = useState('')


    const validateEmail = (email) => {
        var isValid = String(email)
            .toLowerCase()
            .match(
                /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
            );

        return isValid
    };

    function handleEmail(emailValue) {
        var isValid = validateEmail(emailValue)
        setEmail(emailValue)

        if (!isValid) {
            setEmailError(true)
        } else setEmailError(false)
    }

    return (
        <div className={styles.login_main_container}>
            <div className={styles.login_form_container}>
                <div className={styles.login_header}>Login</div>
                <div className={styles.input_container}>
                    <div className={styles.input_logo_container}>
                        <MdAlternateEmail title='Enter your email address' />
                    </div>
                    <input
                        type="email"
                        placeholder="Email"
                        className={styles.email}
                        onChange={e => handleEmail(e.target.value)}
                        value={email}
                    />
                    <div className={styles.options_container}>
                        <AiOutlineClear title="Clear email" onClick={() => setEmail('')} />
                    </div>
                </div>
                {
                    emailError ? <small>Enter a valid email address!</small> : ''
                }

                <div className={styles.input_container}>
                    <div className={styles.input_logo_container}>
                        <FiKey title='Enter your password' />
                    </div>

                    <input type={showPassword ? 'text' : 'password'} placeholder="Password" className={styles.password} />
                    <div className={styles.options_container} onClick={() => setShowPassword(!showPassword)}>
                        {!showPassword ? <AiOutlineEyeInvisible /> : <AiOutlineEye />}
                    </div>
                </div>
                {
                    passwordError ? <small>Password is not correct!</small> : ''
                }

                <div className={styles.remember_container}>
                    <input type="checkbox" placeholder="Remember" />
                    <small>Remember me</small>
                </div>

                <button className="btn">Login</button>

                <div className={styles.divider}>
                    <div></div>
                    <small>OR</small>
                    <div></div>
                </div>

                <div className={styles.login_alternates_container}>
                    <div className={styles.login_alternate_text}>Login with</div>
                    <div className={styles.login_alternate_logo}><FcGoogle /></div>
                </div>


            </div>
            <a href="#">Forget password?</a>
        </div>
    )
}

export default Login;