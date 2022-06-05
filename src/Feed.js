import './Feed.css';
import FeedPosterRapture from "./poster2.png";
import FeedPosterYesterday from "./poster3.png";

function Feed() {
    return (
        <section className='feed'>
            <h1 className='feed_header'>Подборка для вас</h1>
            <div className='feed_wrapper'>
                <div className='feed_poster'>
                    <img className='feed_poster_img' src={FeedPosterRapture} alt='Poster'/>
                    <h3 className='feed_poster_header'>Репсодия</h3>
                    <p className='feed_poster_text'>Предварительные выводы неутешительны</p>
                    <button className='feed_poster_button button'>Смотреть</button>
                </div>
                <div className='feed_poster'>
                    <img className='feed_poster_img' src={FeedPosterYesterday} alt='Poster'/>
                    <h3 className='feed_poster_header'>Противоположная точка</h3>
                    <p className='feed_poster_text'>Не следует, однако, забывать, что высокое качество</p>
                    <button className='feed_poster_button button'>Смотреть</button>
                </div>
            </div>
        </section>
    )
}

export default Feed;