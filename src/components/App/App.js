import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
// import AllNews from '../AllNews/AllNews';
import logo from '../../logo.svg';
import './App.css';

const App = () => {

const [news, setNews] = useState('')
const [error, setError] = useState('')
const [isLoading, setLoading] = useState(false)



// const invokeNewsData = async() => {
//   setLoading(true)
//   try {
//     const res = await getNewsData()
//     checkErrors(res)
//     const returnedNews = await res.json()
//     console.log(returnedNews)
//     setNews(returnedNews)      
//   } catch (err) {
//     console.log(`Error: ${err}`)
//   }
// }


const checkErrors = (res) => {
  if (!res.ok) {
    setError(res.status)
  }
}

// const clearError = () => {
//   setError('')
// }

// useEffect(() => {
//   invokeNewsData()  
// }, [news])


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <section className='full-page'>
            <Header/>
            {/* <AllNews/> */}
            <main className='main-body'>
              <img src={logo} className="App-logo" alt="logo" />
              <p>
                <code>I'm working great!!!</code> 
              </p>
            </main>
            <Footer/>
            </section>
          )}/> 
        <Route exact path='/all-news/:id' render={() => (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          )} />
       
      </Switch>
    </div>
  );
}

export default App;
