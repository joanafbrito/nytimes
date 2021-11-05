import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { getNewsData } from "../../utils/apiCalls";
import { getTopNewsData } from "../../utils/apiCalls";
import AllNews from "../AllNews/AllNews";
import TopNews from "../TopNews/TopNews";
import Loading from "../Loading/Loading";
import "./App.css";

const App = () => {
  const [news, setNews] = useState('');
  const [topNews, setTopNews] = useState('')
  const [category, setCategory] = useState("everything")
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  const invokeNewsData = async (input) => {
    setIsLoading(true);
    try {
      const res = await getNewsData(input || category);
      checkErrors(res);
      const returnedNews = await res.json();
      console.log('news ----',returnedNews.response.docs);
      setNews(returnedNews.response.docs);
      // setCategory(category)
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const invokeTopNewsData = async () => {
    setIsLoading(true);
    try {
      const res = await getTopNewsData();
      checkErrors(res);
      const returnedTopNews = await res.json();
      console.log('top news ****', returnedTopNews.results[0].title);
      setTopNews(returnedTopNews.results);
      setIsLoading(false);
    } catch (err) {
      console.log(`Error: ${err}`);
    }
  };

  const checkErrors = (res) => {
    console.log(res.status);
    if (!res.ok) {
      setError(res.status);
    }
  };

  // const clearError = () => {
  //   setError('')
  // }

  const updateCategory = (input) => {
    // console.log(input);
    setCategory(input);
    // invokeNewsData(input)
  };

  useEffect(()=> {
    invokeTopNewsData();
  },[])

  useEffect(() => {
    invokeNewsData();
    // invokeTopNewsData();
  }, [category]);

  return (
    <div className="App">
      <Switch>
        <Route
          exact
          path="/"
          render={() => (
            <section className="full-page">
              <Header updateCategory={updateCategory} />
              {(isLoading && !error) && <Loading />}
              {(!isLoading && !error && news && topNews) && 
                <main className="main-body">
                  <img
                    className="nytimes-logo"
                    src="https://www.thetascgroup.com/tasc-media/uploads/2020/04/new-york-times-logo-large-e1439227085840.jpg"
                    alt="logo"
                  />
                  <TopNews topNewsData={ topNews }/>
                  <p>{ topNews[2].title }</p>   
                  <AllNews newsData={news} key={news.length} />
                </main>
              }
              <Footer />
            </section>
          )}
        />
        {/* <Route exact path='/:id' render={() => (
            <a
              className="App-link"
              href="https://reactjs.org"
              target="_blank"
              rel="noopener noreferrer"
            >
              Learn React
            </a>
          )} /> */}
      </Switch>
    </div>
  );
};

export default App;
