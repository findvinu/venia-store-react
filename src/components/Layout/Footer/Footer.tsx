import FooterLogo from '../../../assets/images/footer_logo.png';
import './Footer.scss';

const Footer = () => {
    return (<footer className="footer">
        <div className="footer__bottom container footer__container-p0">
            <div className="footer__bottom-privacy">
                <a href="#" className="footer__bottom__link">Terms of Use</a>
                <a href="#" className="footer__bottom__link">Privacy Policy</a>
            </div>
            <p className="footer__bottom-text">© 2024 VENIA. All Rights Reserved.</p>
            <a href="#" className="footer__bottom-logo">
                <img
                    src={ FooterLogo }
                    loading="lazy"
                    alt="logo"
                    className="footer__bottom-logo-image"
                />
            </a>
        </div>
        <div className="footer__container">
            <div className="container footer__container-p0">
                <div className="footer__grid">
                    <div className="footer__column footer__column--account">
                        <h3 className="footer__title">Account</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Sign In</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Register</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Order Status</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__column footer__column--about">
                        <h3 className="footer__title">About Us</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Our Story</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Careers</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__column footer__column--help">
                        <h3 className="footer__title">Help</h3>
                        <ul className="footer__list">
                            <li className="footer__item">
                                <a href="#" className="footer__link">Contact Us</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Order Status</a>
                            </li>
                            <li className="footer__item">
                                <a href="#" className="footer__link">Returns</a>
                            </li>
                        </ul>
                    </div>

                    <div className="footer__column footer__column--follow">
                        <h3 className="footer__title">Follow Us!</h3>
                        <p className="footer__item-text">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                            eiusmod tempor incididunt ut labore et dolore.
                        </p>
                        <ul className="footer__social-list">
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" aria-label="Instagram">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="22"
                                        height="22"
                                        viewBox="0 0 22 22"
                                    >
                                        <g id="instagram" transform="translate(1 1)">
                                            <rect
                                                id="Rectangle_1587"
                                                data-name="Rectangle 1587"
                                                width="20"
                                                height="20"
                                                rx="5"
                                                fill="none"
                                                stroke="#172026"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <path
                                                id="Path_38012"
                                                data-name="Path 38012"
                                                d="M16,11.37A4,4,0,1,1,12.63,8,4,4,0,0,1,16,11.37Z"
                                                transform="translate(-2 -2)"
                                                fill="none"
                                                stroke="#172026"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                            <line
                                                id="Line_475"
                                                data-name="Line 475"
                                                x2="0.01"
                                                transform="translate(15.5 4.5)"
                                                fill="none"
                                                stroke="#172026"
                                                strokeLinecap="round"
                                                strokeLinejoin="round"
                                                strokeWidth="2"
                                            />
                                        </g>
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" aria-label="Facebook">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="13"
                                        height="22"
                                        viewBox="0 0 13 22"
                                    >
                                        <path
                                            id="facebook"
                                            d="M18,2H15a5,5,0,0,0-5,5v3H7v4h3v8h4V14h3l1-4H14V7a1,1,0,0,1,1-1h3Z"
                                            transform="translate(-6 -1)"
                                            fill="none"
                                            stroke="#172026"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </a>
                            </li>
                            <li className="footer__social-item">
                                <a href="#" className="footer__social-link" aria-label="Twitter">
                                    <svg
                                        xmlns="http://www.w3.org/2000/svg"
                                        width="24"
                                        height="20.142"
                                        viewBox="0 0 24 20.142"
                                    >
                                        <path
                                            id="twitter"
                                            d="M23,3a10.9,10.9,0,0,1-3.14,1.53,4.48,4.48,0,0,0-7.86,3v1A10.66,10.66,0,0,1,3,4s-4,9,5,13a11.64,11.64,0,0,1-7,2c9,5,20,0,20-11.5a4.5,4.5,0,0,0-.08-.83A7.72,7.72,0,0,0,23,3Z"
                                            transform="translate(0 -1.912)"
                                            fill="none"
                                            stroke="#172026"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                            strokeWidth="2"
                                        />
                                    </svg>
                                </a>
                            </li>

                        </ul>
                    </div>
                </div>
            </div>
        </div>
    </footer>);
}

export default Footer;