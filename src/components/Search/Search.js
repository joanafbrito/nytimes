import React from 'react';
// import './Search.css';

const Search = () => {
    return (
        <form className='search-fiel'>
            <input
                type='search'
                className='search-bar'
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
                <img className='mag-glass' src='https://cdn2.vectorstock.com/i/1000x1000/33/01/magnifying-glass-orange-round-search-icon-vector-20353301.jpg' alt='Search Magnifying Glass'/>

                </button>
        </form>
    )
}

export default Search;