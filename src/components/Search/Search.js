import React from 'react';
import './Search.css';

const Search = () => {
    return (
        <form className='search-field'>
            <input
                className='search-bar'
                type='search'
                placeholder='SEARCH'
                name='userInput'
                // value={userInput}
                // onChange={(e) => setUserInput(e.target.value)}
            />
            <button 
                className='search-btn'
                type='submit'
                // onClick={() => handleClick()}
            >
                <img className='mag-glass' src='https://media.istockphoto.com/vectors/magnifying-glass-icon-vector-id1179358933' alt='Search Magnifying Glass'/>
            </button>
        </form>
    )
}

export default Search;