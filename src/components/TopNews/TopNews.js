import React from 'react';
import './TopNews.css';

const TopNews = ({ topNewsData }) => {

    const randomTopNew = topNewsData[Math.floor(Math.random()*topNewsData.length)];
    let topNewImg = randomTopNew.multimedia[0].url
    let section_name= randomTopNew.section.toUpperCase();

    return (
       
            <article className='topNew'>
                <div className='topNew-container'>
                    <div className='img-container'>
                        <img className='topNew-img' src={topNewImg} alt={randomTopNew.title}/>
                    </div>
                    <div className='p-topNew-container'>
                        <h3 className='topNew-title'>{randomTopNew.title}</h3>
                        <p className='topNew-section'><strong>{section_name}</strong></p>
                        <p className='topNew-author'> {randomTopNew.author}</p>
                        {/* <p className='randomTopNew-card-date'> { randomTopNew. }</p> */}
                        <a className='topNew-url' href ={randomTopNew.url} > See on New York Times</a> 
                    </div>
                </div>

            </article>
    )
}


export default TopNews;