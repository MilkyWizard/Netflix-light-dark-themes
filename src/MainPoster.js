import './MainPoster.css';
import Poster from "./poster1.png";

function MainPoster() {
    return (
        <section className='main-poster'>
            <img className='main-poster_img' src={Poster} alt='Poster'/>
            <div className='main-poster_wrapper'>
                <h1 className='main-poster_header'>Хочется чего-то особенного этим знойным летом?</h1>
                <p className='main-poster_text'>Есть над чем задуматься: явные признаки победы институционализации разоблачены.
                    Банальные, но неопровержимые выводы</p>
                <button className='main-poster_button button'>Оо-о-кей, летсгоу</button>
            </div>
        </section>
    )
}

export default MainPoster;