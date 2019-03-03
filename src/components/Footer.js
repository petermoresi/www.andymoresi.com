import React from 'react'
import { Link } from 'gatsby'

import logo from '../assets/images/logo.svg';

const Footer = (props) => (
    <footer id="footer">
        <section>
            <h2>More stuff</h2>
            <p>Skype lessons</p>
            {/* <ul className="actions">
                <li><Link to="/generic" className="button">Learn More</Link></li>
            </ul> */}
        </section>
        <section>
            <h2>Contact me</h2>
            <dl className="alt">
                <dt>Phone</dt>
                <dd>805-208-3828</dd>
                <dt>Email</dt>
                <dd><a href="mailto:booking@andymoresi.com">booking@andymoresi.com</a></dd>
            </dl>
            <ul className="icons">
                {/* <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li> */}
                <li><a href="https://facebook.com/andymoresi" className="icon fa-facebook alt"><span className="label">Facebook</span></a></li>
                <li><a href="https://instagram.com/andymoresi" className="icon fa-instagram alt"><span className="label">Instagram</span></a></li>
                <li><a href="https://www.linkedin.com/in/andy-moresi-766144118" className="icon fa-linkedin alt"><span className="label">Linked In</span></a></li>
                {/* <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li> */}
                {/* <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li> */}
            </ul>
        </section>
        <p className="copyright">&copy; 2007-2019 American Mutt Recordings.</p>
    </footer>
)

export default Footer
