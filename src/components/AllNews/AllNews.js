import React from "react";
import NewsCard from "../NewsCard/NewsCard";
import "./AllNews.css";

const AllNews = ({ newsData }) => {

  const articlesData = newsData.map((article) => {
    let imgUrl = article.multimedia[9].url;
    let img = `https://www.nytimes.com/${imgUrl}`;

    return (
      <NewsCard
        key={article.id}
        id={article.id}
        category={article.section_name}
        title={ article.headline.main}
        author={article.byline.original}
        snippet={article.snippet}
        date={article.pub_date}
        img={img}
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
