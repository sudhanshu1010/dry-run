import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css'
import Dropdown from '../Dropdown/Dropdown'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineBell } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'

const Navbar = () => {
    const [userIcons, userIconsClicked] = useState(false)
    const [isProfileClicked, setProfileClicked] = useState(false)
    const [isSignoutClicked, setSignoutClicked] = useState(false)

    const node = useRef()

    useEffect(() => {
        const handleClick = (e) => {
            if(userIcons && node.current && !node.current.contains(e.target)){
                userIconsClicked(false)
            }
        }
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        };
    }, [userIcons])

    function handleProfile() {
        setProfileClicked(true)
        userIconsClicked(false)
        console.log('profile')
    }

    function handleSignout() {
        setSignoutClicked(true)
        userIconsClicked(false)
        console.log('Signing out')
    }

    return (
        <div ref={node} className={styles.navbar_main_container}>
            <div className={styles.navbar_left_container}>Dryrun</div>
            <div className={styles.navbar_mid_container}>
                <a href="#">Explore</a>
                <a href="#">Problems</a>
                <a href="#">Discuss</a>

            </div>
            <div className={styles.navbar_right_container}>
                <div className={styles.user_icons_container}>
                    <CgProfile title="User profile" onClick={() => { userIconsClicked(!userIcons) }} />
                    <AiOutlineBell title="Notifications" />
                </div>
                {
                    userIcons && (
                        <div className={styles.profile_links_container} >
                            <div className={styles.dropdown_main_container} onClick={() => handleProfile()} >
                                <div className={styles.dropdown_icon}><CgProfile /></div>
                                <div className={styles.dropdown_detail}>Profile</div>
                            </div>
                            <div className={styles.dropdown_main_container} onClick={() => handleSignout()}>
                                <div className={styles.dropdown_icon}><GoSignOut /></div>
                                <div className={styles.dropdown_detail}>Sign Out</div>
                            </div>
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default Navbar;