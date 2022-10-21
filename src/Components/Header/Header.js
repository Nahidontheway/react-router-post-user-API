import React from 'react';
import './Header.css'
import { Link } from 'react-router-dom';

const Header = () => {
    return (
        <div className='header'>
            <Link to='/home'>Home</Link>
            <Link to='/contact'>Contact</Link>
            <Link to='/success'>Success</Link>
            <Link to='/posts'>Posts</Link>
            <Link to='/products'>Products</Link>
        </div>
    );
};

export default Header;