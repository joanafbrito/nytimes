import React,{ useState } from 'react';
// import { Link } from 'react-router-dom';
import './TopNews.css';

const TopNews = ({ topNewsData }) => {

    // const [randomNews, setRandomNews] = useState([]);
    console.log( '-------', topNewsData)
    const randomTopNew = topNewsData[Math.floor(Math.random()*topNewsData.length)];
    console.log( 'I m random top new as an object', randomTopNew.title );

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
                        <p className='topNew-section'> { randomTopNew.section }</p>
                        <p className='topNew-author'> { randomTopNew.author }</p>
                        {/* <p className='randomTopNew-card-date'> { randomTopNew. }</p> */}
                        <p className='topNew-url'> { randomTopNew.url}</p>
                    </div>
                </div>

            </article>
        // </Link>
    )
}

export default TopNews;