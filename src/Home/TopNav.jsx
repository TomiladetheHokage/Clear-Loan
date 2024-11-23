import styles from './Style/TopNav.module.css';
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';
import Sidebar from "../Components/Sidebar.jsx";
const TopNav = () => {
    // const [menuOpen, setMenuOpen] = useState(false);


    return (
        <>
            <div className={styles['top-nav']}>

                    <p className={styles['logo']}>CLEAR LOAN</p>

                <ul className={styles['topNav-list']}>
                    <li><a href="#">Savings Calculator</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <Sidebar/>

            </div>
        </>
    )
}
export default TopNav