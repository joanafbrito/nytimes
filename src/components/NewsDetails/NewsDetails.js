import React from 'react';
import { useParams } from 'react-router-dom'
import './NewsDetails.css';


const NewsDetails = ({news}) => {
    const { id } = useParams();

    const selectedNews = news.find((details) => details._id.split('/')[3] === id)      
    let imgUrl = selectedNews.multimedia[9].url;
    let newsDetailsImg = `https://www.nytimes.com/${imgUrl}`;
    let sectionName = selectedNews.section_name.toUpperCase();
   
    return (
    
            <article className='news-details'>
                <div className='news-details-container'>
                    <img className='news-details-img' src={ newsDetailsImg } alt={ selectedNews.headline.main }/>
                    <div className='p-news-details-container'>
                        <p className='news-details-section'> <strong>{ sectionName }</strong></p>
                        <h3 className='news-details-main-title'>{ selectedNews.headline.main }</h3>
                        <h4 className='news-details-title'>{ selectedNews.headline.print_headline }</h4>
                        <p className='news-details-author'> { selectedNews.byline.original }</p>
                        <p className='news-details-snippet'> { selectedNews.snippet }</p>
                        <p className='news-details-lead-paragraph'> { selectedNews.lead_paragraph }</p>
                        <a className='news-details-url' href ={ selectedNews.web_url} >See the entire Artilcle </a> 
                    </div>
                </div>
            </article>
    )
}

export default NewsDetails;