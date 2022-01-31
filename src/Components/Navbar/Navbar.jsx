import React, { useState, useEffect, useRef } from 'react';
import styles from './Navbar.module.css'
import Dropdown from '../Dropdown/Dropdown'

import { CgProfile } from 'react-icons/cg'
import { AiOutlineBell } from 'react-icons/ai'
import {GoSignOut} from 'react-icons/go'

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

    if(isProfileClicked){
        alert('hi')
    }

    return (
        <div ref={node} className={styles.navbar_main_container}>
            <div className={styles.navbar_left_container}>Dryrun</div>
            <div className={styles.navbar_mid_container}>Hi</div>
            <div className={styles.navbar_right_container}>
                <div className={styles.user_icons_container}>
                    <AiOutlineBell title="Notifications" />
                    <CgProfile title="User profile" onClick={() => { setProfileLinks(!showProfileLinks) }} />
                </div>
                {
                    showProfileLinks ? (
                        <div className={styles.profile_links_container} >
                            <Dropdown icon={<CgProfile />} detail={'Profile'} onClick={() => setProfileClicked(true)} />
                            <Dropdown icon={<GoSignOut />} detail={'Sign Out'} />
                        </div>
                    ) : <></>
                }
            </div>
        </div>
    )
}

export default Navbar;