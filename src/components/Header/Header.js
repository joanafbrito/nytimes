import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Search from '../Search/Search';
import './Header.css';

const Header = (params) => {

    return (
        <header className='header'>
            <Link to='/'>
                <h1 className='company-name'>NY Times</h1>
            </Link>
            {/* <Search getCategoryInput= {(userInput) => setUserInput(updateCategory)}/> */}
            <Search getCategoryInput= {params.updateCategory}/>

        </header>
    )
}

export default Header;