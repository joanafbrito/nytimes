import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./AllNews.css";

const AllNews = ({ newsData, findSelectedNews, category }) => {

  const articlesData = newsData.map((article) => {
    let imgUrl = article.multimedia[9].url;
    let img = `https://www.nytimes.com/${imgUrl}`;
    // console.log(newsData)



    let new_id = article._id.split('/')[3]


    // if (article.section_name == category) { 
    return (      
      <NewsCard
        key={new_id}
        id={new_id}
        category={article.section_name}
        title={article.headline.main}
        author={article.byline.original}
        snippet={article.snippet}
        date={article.pub_date}
        img={img}
        findSelectedNews={findSelectedNews}
      />
    );
  });

  return (
    <section className="all-news">
      {articlesData}
    </section>
  );
};

export default AllNews;
