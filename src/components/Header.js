import React from 'react'

import logo from '../assets/images/guitar.jpg';

const Header = (props) => (
    <header id="header" className="alt">
        <span className="logo"><img src={logo} alt="" /></span>
        <h1>Andy Moresi</h1>
        <p>Session Musician / Performer / Arranger</p>
    </header>
)

export default Header
