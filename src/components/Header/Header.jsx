import React from 'react';
import { NavLink } from 'react-router';
import './header.css';

const Header = () => {
    return (
        <div>
            <h3>This is Header</h3>
            <nav className='nav-bar'>
                <NavLink to='/'>Home</NavLink>
                <NavLink to='/mobiles'>Mobiles</NavLink>
                <NavLink to='/laptops'>Laptops</NavLink>
                <NavLink to='/users'>
                    {({ isPending }) => (
                        <span>Users {isPending && <h3>Loading...</h3>}</span>
                    )}
                </NavLink>
                <NavLink to='/new-users'>New Users</NavLink>
                <NavLink to='/new-users2'>New Users 2</NavLink>
                <NavLink to='/posts'>Posts</NavLink>
            </nav>
        </div>
    );
};

export default Header;