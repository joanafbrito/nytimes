import React from 'react';
import './TopNews.css';

const TopNews = ({ topNewsData }) => {
    console.log('top news ', topNewsData)
    
    return (
        
            <article className='article-details'>
                <div className='article-details-container'>
                    <img className='article-details-img' src={ img } alt={ title }/>
                    <div className='p-details-container'>
                        <p className='article-details-category'> Section: { category }</p>
                        <p className='article-details-author'> { author }</p>
                        <p className='article-details-date'> { date }</p>
                        <h3 className='article-details-title'>{ title }</h3>
                    </div>
                </div>
            </article>
    )
}


export default TopNews;