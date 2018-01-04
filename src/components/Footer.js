import React from 'react';
import { Link } from 'react-router-dom';

const Footer = () => (
    <footer className="footer-distributed">
        <div className="footer-right">

            <a href="https://facebook.com/marcussn"><i className="fa fa-facebook"></i></a>
            <a href="https://www.youtube.com/channel/UCLyoiLD-t6ojWH7zix5sKiQ"><i className="fa fa-youtube"></i></a>
            <a href="https://www.linkedin.com/in/marcus-gustafsson-80b595a3/"><i className="fa fa-linkedin"></i></a>
            <a href="https://github.com/marcusgsta"><i className="fa fa-github"></i></a>

        </div>

        <div className="footer-left">

            <p className="footer-links">
                <Link to="/">Hem</Link>
                ·
                <Link to="/om">Om</Link>
                ·
                <a href="mailto:marcusgu@icloud.com">Kontakt</a>
            </p>
            <p>Marcus Gustafsson &copy; 2017</p>
        </div>
    </footer>
);

export default Footer;
