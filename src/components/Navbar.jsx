import React, { useState } from 'react';
import { Link } from 'react-router-dom'
import { RxHamburgerMenu } from "react-icons/rx";

function Navbar() {
    const [showMenu, setShowMenu] = useState(false);

    const className = showMenu ? 'show' : '';

    return (
        <>
            <div className='nav-bar'>
                <div className='nav-image-container'>
                    <img className='nav-img' src='https://amrutam.co.in/cdn/shop/files/only_text_Amrutam_Logo_in_Green-09_5580cc82-5bb1-43d6-9ed8-f5d51c04d1f8.png' alt="logo" />
                </div>

                <div className='hamburger' onClick={() => setShowMenu(!showMenu)}>
                    <RxHamburgerMenu fontSize="large" />
                </div>

                <div className={`nav-collapse ${className}`}>
                    <ul className='nav-items-container'>
                        <li className='nav-item'><Link className='link-item' to="/">Home</Link></li>
                        <li className='nav-item special-nav-item'><Link className='link-item special-link-item' to="/doctorslist">Find Doctors</Link></li>
                        <li className='nav-item'>About Us</li>
                    </ul>
                    <div className='nav-btn-container'>
                        <button className='login-btn' type="button">Login</button>
                        <button className='signup-btn' type='button'>Sign-up</button>
                    </div>
                </div>

                <div className='nav-items-desktop'>
                    <ul className='nav-items-container'>
                        <li className='nav-item'><Link className='link-item' to="/">Home</Link></li>
                        <li className='nav-item special-nav-item'><Link className='link-item special-link-item' to="/doctorslist">Find Doctors</Link></li>
                        <li className='nav-item'>About Us</li>
                    </ul>
                    <div className='nav-btn-container'>
                        <button className='login-btn' type="button">Login</button>
                        <button className='signup-btn' type='button'>Sign-up</button>
                    </div>
                </div>
            </div>
        </>
    );
}

export default Navbar;
