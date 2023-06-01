import React from 'react';

import './Header.css';
import logo from '../images/logo.png'

const Header = () => {
    return (
        <div className='header'>
            
            <img src={logo} alt=''/>
            <nav>
             <a href='/home'>Home</a>
             <a href='/shop'>Shop</a>
             <a href='/review'>Review</a>
             <a href='/manage'>Manage</a>
             <br />
             <input class='searchBar' type="text" placeholder="Search.."></input>
             

            </nav>
           
            

        </div>
    );
};

export default Header;