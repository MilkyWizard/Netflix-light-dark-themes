import './Header.css';
import Netflix from "./netflix-logo.svg";

function Header() {
    return (
        <header className='header'>
            <img className='header_img' src={Netflix} alt='Netflix'/>
        </header>
    )
}

export default Header;