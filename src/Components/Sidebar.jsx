import styles from "../Components/Styles/Sidebar.module.css";
// eslint-disable-next-line no-unused-vars
import React, {useState} from "react";

const Sidebar = () => {

    const [dropdownOpen, setDropdownOpen] = useState(false);

    const [sidebarOpen, setSidebarOpen] = useState(false);
    const toggleSidebar = () => { setSidebarOpen(!sidebarOpen); };

    return (
        <>
            {/*<div className={styles['dropdown']}>*/}
            {/*    <button className={styles['dropdown-button']} onClick={() => setDropdownOpen(!dropdownOpen)}>*/}
            {/*        ☰*/}
            {/*    </button>*/}
            {/*    {dropdownOpen && (*/}
            {/*        <div className={styles['dropdown-content']}>*/}
            {/*            <li><a href="#">Savings Calculator</a></li>*/}
            {/*            <li><a href="#">Home</a></li>*/}
            {/*            <li><a href="#">About</a></li>*/}
            {/*        </div>*/}
            {/*    )}*/}
            {/*</div>*/}


            {/*<div className={styles['sidebar-container']}>*/}
            {/*    <ul className={styles['sidebar-list']}>*/}
            {/*        <li>*/}
            {/*            <a href="/">Savings Calculator</a>*/}
            {/*            <a href="/">Home</a>*/}
            {/*            <a href="/">About</a>*/}
            {/*        </li>*/}
            {/*    </ul>*/}
            {/*</div>*/}

            <div>
                <button className={styles['hamburger']} onClick={toggleSidebar}> ☰</button>
                <div className={`${styles['sidebar-container']} ${sidebarOpen ? styles['show-sidebar'] : ''}`}>
                    <ul className={styles['sidebar-list']}>
                        <li><a href="/">Savings Calculator</a></li>
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                    </ul>
                </div>
            </div>
        </>
    )
}
export default Sidebar