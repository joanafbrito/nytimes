import React from 'react';
// import { Link } from 'react-router-dom';
import './TopNews.css';

const TopNews = ({ id, category, title, author, date, snippet, img }) => {
    let d = date.split('T')
    console.log('here ', d)
    return (
        // <Link className='link-to-article-details' to={} >
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
        // </Link>
    )
}


export default TopNews;