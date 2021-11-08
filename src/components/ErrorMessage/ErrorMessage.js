import React from 'react';
import { Link } from 'react-router-dom';
import './ErrorMessage.css';

const ErrorMessage = ({ errorCode, clearError }) => {

    switch(errorCode) {
        case 404:
          return (
            <section className='error-msg'>
              <img src='https://d2emerge.com/wp-content/uploads/2018/04/IT-Ops-Times-Logo-1.png'
                alt='It ops time error '/>
              <h1>{errorCode}</h1>
              <h2>Page Not Found. Please <Link to='/' onClick={() => clearError()}>Home Page</Link></h2>
            </section>
          )

          case 429:
            return (
              <section className='error-msg'>
                <img src='https://d2emerge.com/wp-content/uploads/2018/04/IT-Ops-Times-Logo-1.png'
                  alt='It ops time error '/>
                <h1>{errorCode}</h1>
                <h2>Page Not Found. Please <Link to='/' onClick={() => clearError()}>Try Again Later</Link></h2>
              </section>
            )
    
        case 500:
          return (
            <section className='error-msg'>
              <img src='https://d2emerge.com/wp-content/uploads/2018/04/IT-Ops-Times-Logo-1.png'
                alt='It ops time error '/>
              <h1>{errorCode}</h1>
              <h2>Experiencing Server Issues. Please <Link to='/' onClick={() => clearError()}>Try Again Later</Link></h2> 
            </section>
          )
    
        default: 
        return (
          <section className='error-msg'>
            <img src='https://d2emerge.com/wp-content/uploads/2018/04/IT-Ops-Times-Logo-1.png'
                alt='It ops time error '/>
            <h1>{errorCode}</h1>
            <h2>Experiencing Technical Diffifulties. Please <Link to='/' onClick={() => clearError()}>Try Again Later</Link></h2> 
          </section>
        )
      }
    }

export default ErrorMessage;