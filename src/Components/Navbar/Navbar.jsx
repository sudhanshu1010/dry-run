import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css'
import Dropdown from '../Dropdown/Dropdown'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineBell } from 'react-icons/ai'
import { GoSignOut } from 'react-icons/go'

const Navbar = () => {
    const [showProfileLinks, setProfileLinks] = useState(false)
    const [isProfileClicked, setProfileClicked] = useState(false)

    const node = useRef()

    useEffect(() => {
        const handleClick = () => {
            setProfileLinks(false)
        }
        document.addEventListener('mousedown', handleClick)

        return () => {
            document.removeEventListener('mousedown', handleClick)
        };
    }, [])

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
                    <CgProfile title="User profile" onClick={() => { setProfileLinks(!showProfileLinks) }} />
                    <AiOutlineBell title="Notifications" />
                </div>
                {
                    showProfileLinks ? (
                        <div className={styles.profile_links_container} >
                            <div ><Dropdown icon={<CgProfile />} detail={'Profile'} /></div>
                            <div><Dropdown icon={<GoSignOut />} detail={'Sign Out'} /></div>
                        </div>
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default Navbar;