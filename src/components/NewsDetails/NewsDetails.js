import React from 'react';
// import { Link } from 'react-router-dom';
import './TopNews.css';

const NewsDetails = ({  }) => {

    const randomTopNew = topNewsData[Math.floor(Math.random()*topNewsData.length)];
    let topNewImg = randomTopNew.multimedia[0].url

    // let d = date.split('T')
    // console.log('here ', d)
    return (
        // <Link className='link-to-article-details' to={} >
            <article className='topNew'>
                <div className='topNew-container'>
                    <img className='topNew-img' src={ topNewImg } alt={ randomTopNew.title }/>
                    <div className='p-topNew-container'>
                        <h3 className='topNew-title'>{ randomTopNew.title }</h3>
                        <p className='topNew-section'> Section: toUpperCase({ randomTopNew.section })</p>
                        <p className='topNew-author'> { randomTopNew.author }</p>
                        {/* <p className='randomTopNew-card-date'> { randomTopNew. }</p> */}
                        <a className='topNew-url' href ={ randomTopNew.url} >The New York Times Article </a> 
                    </div>
                </div>

            </article>
        // </Link>
    )
}

export default NewsDetails;