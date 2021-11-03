import React from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.css';

const Header = () => {
    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='company-name'>NY Times</h1>
            </Link>
            {/* <p className='search'> search </p> */}
            <Search/>

        </header>
    )
}

export default Header;