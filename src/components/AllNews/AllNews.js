import React from 'react';
import NewsCard from '../NewsCard/NewsCard';
import './AllNews.css';

const AllNews = ({ newsData }) => {

    const articlesData = newsData.map((article) => {
       const imgUrl = article.multimedia[0].url
       const img = `https://www.nytimes.com/${imgUrl}`
    // https://www.nytimes.com/images/2021/10/27/sports/27transgender-athletes-1/merlin_195051300_d630eead-3c9b-4d79-a243-742d1a12033d-blog480.jpg
        
        return (
            <NewsCard 
                key={ article.id }
                id={ article.id }
                category={ article.section_name }
                title={ article.headline.main }
                author={ article.byline.original }
                snippet={ article.snippet }
                img={ img }
                />
        )

    })

    return (
        <section className='all-news'>
            {/* <h2>Title</h2> */}
            {/* { console.log( "helo--------", newsData.map((iten) => console.log('inside the map', iten)))} */}
            { articlesData }
        </section>
    )
}

export default AllNews;