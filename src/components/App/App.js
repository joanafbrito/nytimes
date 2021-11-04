import React from 'react';
import { useState, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import { getNewsData } from '../../utils/apiCalls';
// import AllNews from '../AllNews/AllNews';
import logo from '../../logo.svg';
import './App.css';

const App = () => {

const [news, setNews] = useState('')
const [category, setCategory] = useState('everything')
const [error, setError] = useState('')
const [isLoading, setIsLoading] = useState(false)



const invokeNewsData = async(input) => {
  setIsLoading(true)
  try {
    const res = await getNewsData(input || category)
    checkErrors(res)
    const returnedNews = await res.json()
    console.log(returnedNews.response.docs)
    setNews(returnedNews.response.docs) 
    // setCategory(category)
    setIsLoading(false)     
  } catch (err) {
    console.log(`Error: ${err}`)
  }
}


const checkErrors = (res) => {
  console.log(res.status)
  if (!res.ok) {
    setError(res.status)
  }
}

// const clearError = () => {
//   setError('')
// }

const updateCategory = (input) => {
  console.log(input)
  setCategory(input)
  // invokeNewsData(input)
}

useEffect(() => {
  invokeNewsData()  
}, [category])


  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <section className='full-page'>
            <Header updateCategory={ updateCategory }/>
            {isLoading ? (
                <h1> Loading ... </h1>
              ) : (
              <main className='main-body'>
                {/* <AllNews/> */}
                <img src={logo} className="App-logo" alt="logo" />
                <p>
                  <code>I'm working great!!!</code> 
                </p>
              </main> )
           }
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
