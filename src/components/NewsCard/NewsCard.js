import React from 'react';
// import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ id, category, title, author, date, snippet, img }) => {
    // let d = date.split('T')
    // console.log('here ', d)
    return (
        // <Link className='link-to-article-details' to={} >
            <article className='article-card'>
                <div className='article-card-container'>
                    <img className='article-card-img' src={ img } alt={ title }/>
                    <div className='p-card-container'>
                        <p className='article-card-category'> { category }</p>
                        <p className='article-card-author'> { author }</p>
                        <p className='article-card-date'> { date }</p>
                        <h3 className='article-card-title'>{ title }</h3>
                    </div>
                    {/* <p className='article-card-snippet'> { snippet}</p> */}
                </div>

            </article>
        // </Link>
    )
}

export default NewsCard;