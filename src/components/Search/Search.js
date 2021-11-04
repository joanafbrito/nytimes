import React, { useState } from 'react';
import './Search.css';

const Search = ({ getCategoryInput }) => {

    const [userInput, setUserInput] = useState('')

    const handleSubmit = (e) => {
        e.preventDefault();
        getCategoryInput(userInput)
        // setUserInput('')
    }


    return (
        <form className='search-field' onSubmit={(e)=> handleSubmit(e)}>
            <input
                className='search-bar'
                type='text'
                placeholder='Category ex: sports'
                name='userInput'
                // value={userInput}
                onChange={(e) => setUserInput(e.target.value)}
                // onChange={(e) => handleChange(e)}
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