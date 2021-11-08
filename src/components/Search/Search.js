import React, { useState } from 'react';
import './Search.css';

const Search = ({ updateCategory }) => {
    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        updateCategory(userInput)
    }

    return (
        <form className='search-field' onSubmit={(e)=> handleSubmit(e)}>
            <input
                className='search-bar'
                type='text'
                placeholder='Section ex: sports'
                name='userInput'
                onChange={(e) => setUserInput(e.target.value)}
            />
            <button 
                className='search-btn'
                type='submit'
            >
                <img className='mag-glass' src='https://media.istockphoto.com/vectors/magnifying-glass-icon-vector-id1179358933' alt='Search Magnifying Glass'/>
            </button>
        </form>
    )
}

export default Search;