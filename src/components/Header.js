import React from 'react'

import logo from '../assets/images/guitar.jpg'

const Header = props => (
  <header id="header" className="alt">
    <span className="logo">
      <img src={logo} alt="" />
    </span>
    <h1>Andy Moresi</h1>
    <p>Session Musician / Performer / Arranger</p>
    <ul className="icons">
      {/* <li><a href="#" className="icon fa-twitter alt"><span className="label">Twitter</span></a></li> */}
      <li>
        <a
          href="https://facebook.com/andymoresi"
          className="icon fa-facebook alt"
        >
          <span className="label">Facebook</span>
        </a>
      </li>
      <li>
        <a
          href="https://instagram.com/andymoresi"
          className="icon fa-instagram alt"
        >
          <span className="label">Instagram</span>
        </a>
      </li>
      <li>
        <a
          href="https://www.linkedin.com/in/andy-moresi-766144118"
          className="icon fa-linkedin alt"
        >
          <span className="label">Linked In</span>
        </a>
      </li>
      <li>
        <a href="/skype" className="icon fa-skype alt">
          <span className="label">Skype</span>
        </a>
      </li>
      <li>
        <a
          href="https://paypal.me/americanmutt"
          target="blank"
          className="icon fa-paypal alt"
        >
          <span className="label">Paypal</span>
        </a>
      </li>
      {/* <li>
        <a href="/music-made-to-order" className="icon fa-shopping-cart alt">
          <span className="label">Music Made to Order</span>
        </a>
      </li> */}
      {/* <li><a href="#" className="icon fa-github alt"><span className="label">GitHub</span></a></li> */}
      {/* <li><a href="#" className="icon fa-dribbble alt"><span className="label">Dribbble</span></a></li> */}
    </ul>
  </header>
)

export default Header
