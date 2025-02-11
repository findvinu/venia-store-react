import Logo from '../../../assets/images/logo.png';
import './Header.scss';

const Header = () => {
    return (<header className="header">
        <div className="container header__container">
            <nav className="header__nav">
                <label className='header__menu-button-container' htmlFor="menu-toggle">
                    <div className='header__menu-button'></div>
                </label>
                <a href="#" className="header__logo">
                    <img src={ Logo } loading="lazy" alt="Logo" className="header__logo-image" />
                </a>
                <ul className="header__list">
                    <li className="header__item">
                        <a href="#" className="header__link header__link--active">Home</a>
                    </li>
                    <li className="header__item"><a href="#" className="header__link">Women</a></li>
                    <li className="header__item"><a href="#" className="header__link">Men</a></li>
                    <li className="header__item">
                        <a href="#" className="header__link">Smart Gear</a>
                    </li>
                    <li className="header__item">
                        <a href="#" className="header__link">Accessories</a>
                    </li>
                </ul>
                <div className="header__cart">
                    <svg width="24px" height="24px" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg" fill="none">
                        <path fill="#ffffff" fillRule="evenodd" d="M4.968 1a2 2 0 00-1.536.72l-2.425 3.4v.002l.001.008.005.035.015.133a90.845 90.845 0 01.226 2.167c.125 1.33.246 2.914.246 4.035 0 1.519-.221 3.872-.37 5.276A2.011 2.011 0 003.127 19h13.745c1.2 0 2.123-1.043 1.998-2.224-.149-1.404-.37-3.757-.37-5.276 0-1.12.12-2.705.246-4.035a106.122 106.122 0 01.226-2.167l.015-.133.005-.035v-.01a1 1 0 00-.285-.827L16 1.586A2 2 0 0014.586 1H4.968zm0 2h9.618l1 1H4.135l.833-1zm-1.85 3h13.764c-.039.367-.083.804-.128 1.278-.125 1.334-.254 3-.254 4.222 0 1.64.233 4.092.38 5.486v.008l-.003.003a.01.01 0 01-.003.003H3.126l-.003-.003a.016.016 0 01-.004-.005v-.006c.148-1.394.381-3.847.381-5.486 0-1.222-.13-2.888-.254-4.222-.045-.474-.09-.91-.128-1.278zM8 10a1 1 0 10-2 0 4 4 0 108 0 1 1 0 10-2 0 2 2 0 01-4 0z" />
                    </svg>
                    <span className="header__cart-count">0</span>
                </div>
            </nav>
        </div>
    </header>);
}

export default Header;