import './Footer.css';
import VK from "./vk-logo.svg";
import Telegram from "./tg-logo.svg";
import Twitter from "./twitter-logo.svg";

function Footer() {
    return (
        <footer className='footer'>
            <div className='footer_contacts'>
                <a className='footer_contacts_vk' href='https://vk.com'><img src={VK} alt='VK'/></a>
                <a className='footer_contacts_tg' href='https://t.me'><img src={Telegram} alt='Telegram'/></a>
                <a className='footer_contacts_twitter' href='https://twitter.com'><img src={Twitter} alt='Twitter'/></a>
            </div>
            <div className='footer_text'>
                <p className='footer_text_description'>
                    Разнообразный и богатый опыт говорит нам, что внедрение современных методик требует анализа
                    глубокомысленных рассуждений. В своём стремлении повысить качество жизни, они забывают
                </p>
                <a className='footer_text_unsubscribe' href='https://netflix.com'>Отписаться от рассылки</a>
            </div>
            <div className='footer_copyright'>© 2022, Netflix CO</div>
        </footer>
    )
}

export default Footer;