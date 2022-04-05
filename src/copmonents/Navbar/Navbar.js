import React from 'react';
import { NavLink } from 'react-router-dom';
import './Navbar.css'

const Navbar = () => {
    return (
        <nav>
            <NavLink className={({isActive})=>isActive?'active-link' : 'black'} to='/home'>HOME</NavLink>
            <NavLink className={({isActive})=>isActive?'active-link' : 'black'} to='/reviews'>REVEIWS</NavLink>
            <NavLink className={({isActive})=>isActive?'active-link' : 'black'} to='/dashbord'>DASHBORD</NavLink>
            <NavLink className={({isActive})=>isActive?'active-link' : 'black'} to='/blogs'>BLOGS</NavLink>
            <NavLink className={({isActive})=>isActive?'active-link' : 'black'} to='/about'>ABOUT</NavLink>
        </nav>
    );
};

export default Navbar;