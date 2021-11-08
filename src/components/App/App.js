import React from "react";
import { useState, useEffect } from "react";
import { Route, Switch, Link } from "react-router-dom";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import Loading from "../Loading/Loading";
import { getNewsData } from "../../utils/apiCalls";
import { getTopNewsData } from "../../utils/apiCalls";
import TopNews from "../TopNews/TopNews";
import AllNews from "../AllNews/AllNews";
import NewsDetails from "../NewsDetails/NewsDetails";
import ErrorMessage from "../ErrorMessage/ErrorMessage";
import "./App.css";

const App = () => {
  const [news, setNews] = useState('');
  const [topNews, setTopNews] = useState('')
  const [category, setCategory] = useState("everything")
  const [error, setError] = useState('')
  const [isLoading, setIsLoading] = useState(true);

  let upperCaseCategory = category.toUpperCase();

  const invokeNewsData = async (input) => {
    setIsLoading(true);
    try {
      const res = await getNewsData(input || category);
      checkErrors(res);
      const returnedNews = await res.json();
      setNews(returnedNews.response.docs);
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

  const clearError = () => {
    setError('')
  }

  const updateCategory = (input) => {
    setCategory(input);
  };

  useEffect(()=> {
    invokeTopNewsData();
  },[topNews])

  useEffect(() => {
    invokeNewsData();
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
              {error && 
              <ErrorMessage 
              errorCode={error}
              clearError={clearError}
              />}
              {(isLoading && !error) && <Loading />}
              {(!isLoading && !error && news && topNews) && 
                <main className="main-body">
                  <img
                    className="nytimes-logo"
                    src="https://www.thetascgroup.com/tasc-media/uploads/2020/04/new-york-times-logo-large-e1439227085840.jpg"
                    alt="logo"
                  />
                  <h3 className='title-decore'> ///<span className='news-title'> TOP NEWS </span>///</h3>
                  <TopNews topNewsData={ topNews }/>
                  <h3 className='title-decore'>/// <span className='news-title'>{upperCaseCategory} NEWS </span>///</h3>   
                  <AllNews newsData={news} key={news.length} category={category}/>
                </main>
              }
              <Footer />
            </section>
          )}
        />
        <Route exact path='/:id' render={({ match }) => {
          const newsId = match.params.id;
          return (
          <section className="full-page">
              <Header updateCategory={updateCategory}/>
              {(isLoading && !error) && <Loading />}
              {(!isLoading && !error && news && topNews) && 
                <main className="main-body">
                  <img
                    className="nytimes-logo"
                    src="https://www.thetascgroup.com/tasc-media/uploads/2020/04/new-york-times-logo-large-e1439227085840.jpg"
                    alt="logo"
                  />
                  <NewsDetails news={news}/> 
                </main>
              }
              <Footer />
            </section>
          )}} />
      </Switch>
    </div>
  );
};

export default App;
