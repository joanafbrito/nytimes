import React from 'react';
import './Loading.css';

const Loading = () => {
  return (
    <section className='loading-container'>
      <h1 className='loading-message' >Loading...</h1>
      <img className='loading-gif' src='https://c.tenor.com/I6kN-6X7nhAAAAAj/loading-buffering.gif' alt='loading'/>
    </section>
  )
}

export default Loading;