import styles from './Style/TopNav.module.css';
// eslint-disable-next-line no-unused-vars
import React, {useState} from 'react';

const TopNav = () => {
    // const [menuOpen, setMenuOpen] = useState(false);
    const [dropdownOpen, setDropdownOpen] = useState(false);

    return (
        <>
            <div className={styles['top-nav']}>

                    <p className={styles['logo']}>CLEAR LOAN</p>

                <ul className={styles['topNav-list']}>
                    <li><a href="#">Savings Calculator</a></li>
                    <li><a href="#">Home</a></li>
                    <li><a href="#">About</a></li>
                </ul>

                <div className={styles['dropdown']}>
                    <button className={styles['dropdown-button']} onClick={() => setDropdownOpen(!dropdownOpen)}>
                        ☰
                    </button>
                    {dropdownOpen && (
                        <div className={styles['dropdown-content']}>
                            <li><a href="#">Savings Calculator</a></li>
                            <li><a href="#">Home</a></li>
                            <li><a href="#">About</a></li>
                        </div>
                    )}
                </div>
            </div>
        </>
    )
}
export default TopNav