import React from 'react';
// import { Link } from 'react-router-dom';
import './NewsDetails.css';
import { useParams } from 'react-router-dom'


const NewsDetails = ({news}) => {
    const { id } = useParams();

    const selectedNews = news.find((article) => article._id.split('/')[3] === id)      
    let imgUrl = selectedNews.multimedia[9].url;
    let newsDetailsImg = `https://www.nytimes.com/${imgUrl}`;
   
    return (
    
            <article className='news-details'>
                <div className='news-details-container'>
                    <img className='news-details-img' src={ newsDetailsImg } alt={ selectedNews.headline.main }/>
                    <div className='p-news-details-container'>
                        <h3 className='news-details-title'>{ selectedNews.headline.main }</h3>
                        <h4 className='news-details-title'>{ selectedNews.headline.print_headline }</h4>
                        <p className='news-details-section'> Section: toUpperCase({ selectedNews.section_name })</p>
                        <p className='news-details-author'> { selectedNews.byline.original }</p>
                        <p className='news-details-author'> { selectedNews.snippet }</p>
                        <p className='news-details-author'> { selectedNews.lead_paragraph }</p>
                        {/* <p className='selectedNews-card-date'> { selectedNews. }</p> */}
                        <a className='news-details-url' href ={ selectedNews.web_url} >See the entire Artilcle </a> 
                    </div>
                </div>
            </article>
    )
}

export default NewsDetails;