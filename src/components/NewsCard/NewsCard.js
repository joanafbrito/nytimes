import React from 'react';
import { Link } from 'react-router-dom';
import './NewsCard.css';

const NewsCard = ({ id, category, title, author, date, snippet, img, findSelectedNews }) => {
    
    return (
        <Link className='link-to-article-details' to={`/${id}`} onClick={() => {findSelectedNews(id)}} >
            <article className='article-card'>
                <div className='article-card-container'>
                    <img className='article-card-img' src={ img } alt={ title }/>
                    <div className='p-card-container'>
                        <div className='p-info-container'>
                            <p className='article-card-category'> <strong>{ category }</strong></p>
                            <p className='article-card-author'> { author }</p>
                            <p className='article-card-date'> { date }</p>
                        </div>
                        <h3 className='article-card-title'>{ title }</h3>
                    </div>
                </div>
            </article>
         </Link>
    )
}

export default NewsCard;