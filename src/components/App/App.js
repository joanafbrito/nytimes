import React from 'react';
import { useStatem, useEffect } from 'react';
import { Route, Switch, Link } from 'react-router-dom';
// import Header from './Header/Header';
// import Footer from './Footer/Footer';
// import AllNews from './AllNews/AllNews';
import logo from '../../logo.svg';
import './App.css';

function App() {




  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={() => (
          <header className="App-header">
          {/* <Header/>
          <AllNews/>
          <Footer/> */}
            <img src={logo} className="App-logo" alt="logo" />
            <p>
              <code>I'm working great!!!</code> 
            </p>
            </header>
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
