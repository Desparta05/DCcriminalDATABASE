import { useState, useEffect } from 'react';
import React from 'react';
import { Link } from 'react-router-dom';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import {sideBarData} from '../data/sideBarData';
import './NavBar.css';
import { Button } from './Button';

export function NavBar() {
    const [sidebar, setSideBar] = useState(false);
    // const [button, setButton] = useState(true);

    const showSidebar = () => setSideBar(!sidebar)

    // const showButton = () => {
    //     if (window.innerWidth <= 960 ) {
    //         setButton(false);
    //     } else {
    //         setButton(true);
    //     }
    // };

    // useEffect(() => {
    //     showButton()
    // }, []);

    // window.addEventListener('resize', showButton)

    return (
        <>
            <div className='navbar'>
                <Link to='#' className='menu=bars'>
                    <FaIcons.FaBars onClick={showSidebar} />
                </Link>
            </div>
            <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
                <ul className='nav-menu-items' onClick={showSidebar}>
                    <li className='navbar-toggle'>
                        <Link to="#" className='menu-bars'>
                            <AiIcons.AiOutlineCloseSquare />
                        </Link>
                    </li>
                    {sideBarData.map((item, index) => {
                        return (
                            <li key={index} className={item.cName}>
                                <Link to={item.path}>
                                    {item.icon}
                                    <span>{item.title}</span>
                                </Link>
                            </li>

                        )
                    })}
                </ul>
                
            </nav>
        </>
    );
};

export default NavBar